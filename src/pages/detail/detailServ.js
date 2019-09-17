import axios from 'axios';

export function queryNews(params){
  return axios.get(`/api/v1/topic/${params.id}`)
}
