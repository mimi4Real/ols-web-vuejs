import http from 'http'

const API_BASE = 'http://10.205.20.206:8081/api/training_camp'

export default {
  login () {
    return http.post(`${API_BASE}/login`)
  },
  getCampDetail (campId) {
    return http.get(`/detail/${campId}`)
  }
}
