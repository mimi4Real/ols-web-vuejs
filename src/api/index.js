import request from './service'

const API_BASE = 'http://10.205.20.206:8081/api/training_camp'

export function getCampDetail (campId, cb) {
  return request({
    url: `${API_BASE}/detail`,
    method: 'get',
    params: {id: campId}
  })
}

export default {
  login () {
    return request.post(`${API_BASE}/login`)
  }
}
