import { useContext, useReducer } from "react";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../modules/authModule";
import { login } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initalState)
    const {loginProvider} = useContext(AuthContext);
    //console.log("login con : ", state)
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "CHANGE_INPUT", form: "login", name, value });
        //console.log("login onChange : ", state.login)
    };
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log("login onSubmit : ", state.login)
        dispatch({ type: "LOADING" });
        const res = await login(state.login.username, state.login.password);
        //console.log( "login res : ", await res.json() )
        if(res.ok){
            const data = await res.json();
            console.log("data : ", data)
            loginProvider(state.login.username, data.token );
            navigate("/")
            
            
        }else{
            dispatch({ type: "INITALSTATE" });
        }
        /*
        dispatch({ type: "FINISHED" });
        if( result.status === 200 ){
            //alert("로그인 성공");
            navigate("/")
            loginProvider(state.login.username);
        }else{
            //alert("로그인 실패");
            dispatch({ type: "INITALSTATE" });
        }
            */
    }
    return (<>
        <HeaderCom />
        <LoginCom loading={state.loading} onSubmit={onSubmit} onChange={onChange} username={state.login.username}
                                        password={state.login.password}/>
      </>);
  }
  export default LoginCon;