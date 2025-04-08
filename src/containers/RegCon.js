import { useReducer } from "react";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../modules/authModule";
import { register } from "../service/authService";
import { useNavigate } from "react-router-dom";

function RegCon(){
    const [state, dispatch] = useReducer(reducer, initalState);
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch({type:"CHANGE_INPUT", value, name, form:"register"})
    }
    const navigate = useNavigate()
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("reg submit : ", state.register)
        register(state.register)
        navigate("/login")
    }
    return (<>
   <HeaderCom />
    <RegCom onChange={onChange} onSubmit={onSubmit} role={state.register.role}
        username={state.register.username} password={state.register.password}/>
    </>)   
}
export default RegCon;





