import http from 'http'
import storeBase from './../store/'

const API_BASE = 'http://10.205.20.206:8081/api/training_camp'
export default {
  login () {
    return http.post(`${API_BASE}/login`)
  },
  getCampDetail (campId) {
    return http.get(`/detail/${campId}`)
  },
  postCamp (formData) {
    return fetch(`${API_BASE}/creat`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTU2NDI2Nzc1fQ.5U_3VA-OI1DoV61H35IvYnPPLBx8HVDJO4zZwUB_lIRGmCZLCWu_hQTagfY1tL13cy8ZW8sIBYuK6lPD0mxYoQ'
      }
    });
  }
}
