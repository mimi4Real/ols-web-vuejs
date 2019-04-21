import http from 'http'

const API_BASE = '/api'

export default {
  login () {
    return http.post(`${API_BASE}/login`)
  },
  getCampDetail (campId) {
    return http.get(`/detail/${campId}`)
  }
}
