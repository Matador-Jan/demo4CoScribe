import service from './axios.js'

const PREFIX = '/api/admin'

// 发起get请求，后面可以拼接字符串等当查询条件
export function getUserApp(id) {
  return service.get('/getUserApp/' + id)
}

export function login(obj) {
  return service.post('/api/admin/login', {
    ...obj,
  })
}
