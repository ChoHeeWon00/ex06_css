//service -> authService.js
let data_set = [
    {username:"aaa",password :"111", role : "USER"},
    {username:"bbb",password :"111", role : "USER"},
    {username:"ccc",password :"111", role : "USER"},
]


const path = "http://localhost:8080";

const login = (username, password) => {
    const result = data_set.filter( data => data.username === username );
    if( result.length !== 0 ){
        if(result[0].password === password){
            return {status : 200, data : result[0]};
        }
        return {status : 401, data : null};
    }
    return {status : 404, data : null};
}
const register =( user ) => {
    //data_set = data_set.concat( user )
    return fetch(path+"/mem",{
        method:"post",
        headers : {"Content-Type":"application/json"} ,
        body : JSON.stringify( user )
    })
}
const getList = () => {
    return fetch( path+"/mem" , {method:"get"} )
}
const getInfo = (username) => {
    return data_set.filter( data => data.username === username )[0]
}
const deleteUser = ( username ) => {
    data_set = data_set.filter( data => data.username !== username )
}
const  modify = ( userData ) => {
    data_set = data_set.filter( data => data.username !== userData.username)
    data_set = data_set.concat( userData );
}
export {modify, deleteUser, getInfo, getList, login, register};