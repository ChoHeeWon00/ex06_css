import { useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import InfoCom from "../components/InfoCom";
import { useEffect, useReducer } from "react";
import { initalState, reducer } from "../modules/authModule";
import { getInfo } from "../service/authService";

function InfoCon(){
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect( ()=>{
        const data = getInfo(username);
        dispatch({type:"LIST", data})
    } , [username] )
    return (<>
        <HeaderCom />
        <InfoCom data={state.data}/>
    </>)
}
export default InfoCon;