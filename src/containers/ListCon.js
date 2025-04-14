import { use, useContext, useEffect, useReducer, useState } from "react";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../modules/authModule";
import { getList } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ListCon(){
    const [state, dispatch] = useReducer(reducer, initalState);
    const {auth} = useContext(AuthContext)
    const [ start, setStart ] = useState(1);
    const onClick = ( start ) =>{
        setStart( start );
    }

    const navigate = useNavigate();
    const onInfo = ( username ) => {
        if(auth.isLoggedIn){
            navigate("/info/"+username)
        }else{
            navigate("/login")
        }
    }
    useEffect( () => {
        async function get(){
            const res = await getList( start );
            const data = await res.json();
            dispatch({type:"LIST", data })
        }
        get();
    },[start] )
    return (<>
        <HeaderCom />
        <ListCom onClick={onClick}  onInfo={onInfo} data={state.data} />
    </>)
}
export default ListCon;