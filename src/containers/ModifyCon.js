import { Navigate, useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import ModifyCom from "../components/ModifyCom";
import { useEffect, useReducer } from "react";
import { getInfo, modify } from "../service/authService"
import { initalState, reducer } from "../modules/authModule";
function ModifyCon(){
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initalState);
    const token = sessionStorage.getItem("token")
    useEffect(()=>{
        //const getOne = async () => {}
        //getOne();
        async function getOne(){
            const res = await getInfo( username , token )
            const data = await res.json();
            dispatch({type:"MODIFY", data})
        }
        getOne();
    },[username, token])
    //console.log("MODIFY : ", state )
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch({type:"CHANGE_INPUT", value, name, form:"modify"} )
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries() )
        const res = await modify( userData , token )
        if(res.ok)
            navigate("/info/"+username)
        else
            alert( await res.text() )
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