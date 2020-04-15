import axios from 'axios'

const baseURI = 'https://cnodejs.org'

export async function getList(params) {
  if(params.page){
    return axios.get(`${baseURI}/api/v1/topics?page=${params.page}`)
  }
  if(params.tab){
    return axios.get(`${baseURI}/api/v1/topics?tab=${params.tab}`)
  }
  return axios.get(`${baseURI}/api/v1/topics`)
}

export async function getDetailList(params) {
  return axios.get(`${baseURI}/api/v1/topic/${params.id}`)
}
