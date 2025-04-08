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
    useEffect( () => {
        const data = getList()
        dispatch({type:"LIST", data})
    },[] )
    return (<>
        <HeaderCom />
        <ListCom onInfo={onInfo} data={state.data} />
    </>)
}
export default ListCon;