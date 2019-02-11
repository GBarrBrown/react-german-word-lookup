import request from 'superagent'

export function searchWord(searchStr){
    return request.get(`/v1/routes/${searchStr}`)
    .then(res => {
        return res.body
    })
}