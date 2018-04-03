import {apiUrl} from './config'

const tokenKey = 'jwt-token'
const tokenHeader = 'Authorization'

const getCookie = key => {
  const cookie = document.cookie
    .split(';')
    .map(i => i.trim().split('='))
    .filter(i => i.shift() === key)

  if (cookie.length === 0) return null
  return cookie.toString()
}

export const getUserByToken = token => token.split('.').splice(1, 1).map(i => atob(i)).map(i => JSON.parse(i)).shift()

export const getToken = () => {
  const cookie = getCookie(tokenKey)
  if (cookie) {
    localStorage.setItem(tokenKey, cookie)
    return cookie
  }
  return localStorage.getItem(tokenKey)
}

const fetchData = (uri = '', method = 'GET', data = {}) => {
  const headers = new Headers
  const token = getToken()
  if (token) headers.append(tokenHeader, token)

  const option = {
    headers,
    method,
    mode: 'cors',
  }

  let requestBody = Object.keys(data).map(key => {
    return key + '=' + encodeURIComponent(data[key])
  }).filter(i => i).join('&')

  if (method === 'POST') {
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    option.body = requestBody
  } else {
    uri += '?' + requestBody
  }

  return fetch(apiUrl + uri, option)
    .then(data => data.json())
    .then(json => {
      if ('error' in json && json.error === 'Unauthorized') {
        localStorage.removeItem(tokenKey)
        location.href = location.href
      }
      return json
    })
    .catch(err => {
      return {
        status: 'error',
        error: 'response_error',
        msg: 'Internal Server Error',
      }
    })
}

export const listUserAddress = userId => fetchData(`/api/user/${userId}/address`)

export const addAddress = (userId, address) => fetchData(`/api/user/${userId}/address`, 'POST', address)

export const getAddress = addressId => fetchData(`/api/address/${addressId}`)

export const updateAddress = (addressId, address) => fetchData(`/api/address/${addressId}`, 'POST', {
  tel: address.tel,
  location: address.location,
  detail: address.detail,
})

export const deleteAddress = addressId => fetchData(`/api/address/${addressId}/delete`, 'POST')

export const listAllCates = () => fetch(`/api/cate`)

export const getUserInfo = userId => fetchData(`/api/user/${userId}/info`)

export const listOrdersByUser = userId => fetchData(`/api/user/${userId}/order`)

export const createOrder = (userId, {addressId, remark, orderDetails}) => fetchData(`/api/user/${userId}/order`, 'POST', {
  address_id,
  remark: remark || '',
  order_details: JSON.stringify(orderDetails),
})

export const deleteOrder = orderNo => fetchData(`/api/order/${orderNo}/cancel`, 'POST')

export const listOrdersByCollector = collectorId => fetchData(`/api/collector/${collectorId}/order`)

export const completeOrder = (orderNo, amount, orderDetails) => fetchData(`/api/order/${orderNo}/complete`, 'POST', {
  amount,
  order_details: JSON.stringify(orderDetails),
})

export const getOrderDetail = orderNo => fetchData(`/api/order/${orderNo}`)
