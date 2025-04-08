import { Navigate, useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import ModifyCom from "../components/ModifyCom";
import { useEffect, useReducer } from "react";
import { getInfo, modify } from "../service/authService"
import { initalState, reducer } from "../modules/authModule";
function ModifyCon(){
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(()=>{
        const data = getInfo( username )
        dispatch({type:"MODIFY", data})
    },[username])
    //console.log("MODIFY : ", state )
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch({type:"CHANGE_INPUT", value, name, form:"modify"} )
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log("modify submit : " , state.modify )
        //console.log("modify e.target : " , e.target )
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries() )
        //console.log("userData : ", userData);
        modify( userData )
        navigate("/info/"+username)
    }
    return (<>
        <HeaderCom />
        <ModifyCom onChange={onChange} onSubmit={onSubmit}
                            username={state.modify.username}
                            password={state.modify.password}
                            role={state.modify.role} />   
    </>)
}
export default ModifyCon;