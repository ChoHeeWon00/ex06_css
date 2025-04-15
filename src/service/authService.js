//service -> authService.js
let data_set = [
    {username:"aaa",password :"111", role : "USER"},
    {username:"bbb",password :"111", role : "USER"},
    {username:"ccc",password :"111", role : "USER"},
]


const path = "http://localhost:8080";

const login = (username, password) => {
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    //headers content-type 없으면 multipart 방식
    return fetch(path+"/mem/login",{ method:"post", body:form })
    
    /*
    const form = { username, password }
    return fetch(path+"/mem/login", {
        method : "post",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify( form )
    } );
     */

    /*
    const result = data_set.filter( data => data.username === username );
    if( result.length !== 0 ){
        if(result[0].password === password){
            return {status : 200, data : result[0]};
        }
        return {status : 401, data : null};
    }
    return {status : 404, data : null};
    */
}
const register =( user ) => {
    //data_set = data_set.concat( user )
    return fetch(path+"/mem",{
        method:"post",
        headers : {"Content-Type":"application/json"} ,
        body : JSON.stringify( user )
    })
}
const getList = ( start ) => {
    console.log("start : ", start)
    return fetch( path+"/mem?start="+start , {method:"get"} )
}
const getInfo = (username, token) => {
    //return data_set.filter( data => data.username === username )[0]
    //return fetch( path+"/mem/"+username )
    return fetch( path+"/mem/"+username,{
        method : "get",
        headers : {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    } )
}
const deleteUser = ( username ) => {
    //data_set = data_set.filter( data => data.username !== username )
    return fetch(path+"/mem/"+username, { method:"delete" } )
}
const  modify = ( userData , token) => {
    //data_set = data_set.filter( data => data.username !== userData.username)
    //data_set = data_set.concat( userData );
    console.log("userData.username",userData.username)
    return fetch(path+"/mem/"+userData.username,{
        method:"put",
        headers : {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body : JSON.stringify( userData )
    })
}
export {modify, deleteUser, getInfo, getList, login, register};