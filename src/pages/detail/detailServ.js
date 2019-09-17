import axios from 'axios';

export function queryNews(){
  return axios.get('/api/v1/topic/5433d5e4e737cbe96dcef312')
}
