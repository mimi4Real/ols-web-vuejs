import http from 'http'
import storeBase from './../store/'
import request from "./service";

const API_BASE = 'http://10.205.20.206:8081/api/training_camp'

export function getCampDetail (campId, cb) {
  return request({
    url: `${API_BASE}/detail`,
    method: 'get',
    params: {id: campId}
  })
}

export function getCampList(){
  return request({
    url: `${API_BASE}/list`,
    method: 'get',
  })
}

export function deleteCampList(campId){
  return request({
    url: `${API_BASE}/delete`,
    method: 'delete',
    data: {id: campId}
  })
}

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
