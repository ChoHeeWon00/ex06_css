import { useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import InfoCom from "../components/InfoCom";
import { useEffect, useReducer } from "react";
import { initalState, reducer } from "../modules/authModule";
import { deleteUser, getInfo } from "../service/authService";

function InfoCon(){
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initalState);
    const navigate = useNavigate();
    const onDelete = async ( username ) => {
        const res = await deleteUser(username);
        if(res.ok)
            navigate("/list")
    }
    useEffect( ()=>{
       getInfo(username)
        .then(res => res.json() )
        .then( data =>  { dispatch({type:"LIST", data}) } )
    } , [username] )
    const onModifyForm = () => {
        navigate("/modify/"+username)
    }
    return (<>
        <HeaderCom />
        <InfoCom onModifyForm={onModifyForm} onDelete={onDelete} data={state.data}/>
    </>)
}
export default InfoCon;