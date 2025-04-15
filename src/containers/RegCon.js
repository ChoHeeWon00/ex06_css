import { useReducer } from "react";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../modules/authModule";
import { register } from "../service/authService";
import { useNavigate } from "react-router-dom";

function RegCon(){
    const [state, dispatch] = useReducer(reducer, initalState);
    const onChange = (e) => {
        if( e.target.type === "file" ){
            dispatch({type:"CHANGE_INPUT", value:e.target.files[0], 
                                         name : "file", form:"register"})
        }else{
            const {value, name} = e.target;
            dispatch({type:"CHANGE_INPUT", value, name, form:"register"})
        }
    }
    const navigate = useNavigate()
    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log("reg submit : ", state.register)
        const formData = new FormData( e.target );
        const res = await register( formData )
        if( res.ok ){
            alert( "회원 가입을 축하합니다!!!");
            navigate("/login")
        }else{
            alert( await res.text() );
        }
        console.log("register : ", res)
        
    }
    return (<>
   <HeaderCom />
    <RegCom onChange={onChange} onSubmit={onSubmit} role={state.register.role}
        username={state.register.username} password={state.register.password}/>
    </>)   
}
export default RegCon;





