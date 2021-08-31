
const commonHeaders ={
    'Content-Type': "application/json; charset=utf-8",
    'Accept': "application/vnd.github.v3+json",
    'X-Content-Type-Options': "nosniff",
    'Authorization': JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).token
    : '',
}

const BASE_QUERY_URL = 'https://api.github.com';

const HttpServices = () => {
return{
    get: (route) => {
        return fetch(BASE_QUERY_URL + route, {
          headers: commonHeaders,
        }).then((response)=>{
            console.log(response)
            
        })
    },
    command: (command, payload, route) => {
        const request = {
          name: command,
          payload,
        };
    return fetch(BASE_QUERY_URL + route, {
        method: 'POST',
        headers: commonHeaders,
        body: JSON.stringify(request),
    }).then((response)=>{
        console.log(response)
        
    })
}}
};
export default HttpServices;
