import API from '../../api';
export function get(url){
API.get(url)
.then(res => {
    return res.data;
})
}