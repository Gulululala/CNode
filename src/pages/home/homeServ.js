import axios from 'axios'

const baseURI = 'https://cnodejs.org'

export async function getList(params) {
  // console.log(params)
  return axios.get(`${baseURI}/api/v1/topics`,params)
}

export async function getDetailList(params) {
  console.log(params.id)
  return axios.get(`${baseURI}/api/v1/topic/${params.id}`)
}