import { useContext, useEffect, useReducer } from "react";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../modules/authModule";
import { getList } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ListCon(){
    const [state, dispatch] = useReducer(reducer, initalState);
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();
    const onInfo = ( username ) => {
        if(auth.isLoggedIn){
            navigate("/info/"+username)
        }else{
            navigate("/login")
        }
    }
    console.log(1111)
    useEffect( () => {
        async function get(){
            const res = await getList();
            const data = await res.json();
            dispatch({type:"LIST", data })
        }
        get();
        /*
        getList()
        .then( res => {
            console.log("res : ", res)
            if( res.ok )
                return res.json();
        })
        .then( data => {
            console.log("list : ", data)
            dispatch({type:"LIST", data})
        })
            */
        /*
        const data = getList()
        console.log("container data : ", data)
        dispatch({type:"LIST", data})
        */
    },[] )
    return (<>
        <HeaderCom />
        <ListCom onInfo={onInfo} data={state.data} />
    </>)
}
export default ListCon;