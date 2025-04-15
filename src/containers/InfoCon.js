import { useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import InfoCom from "../components/InfoCom";
import { useEffect, useReducer, useState } from "react";
import { initalState, reducer } from "../modules/authModule";
import { deleteUser, getImage, getInfo } from "../service/authService";

function InfoCon(){
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initalState);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    const [imageUrl, setImageUrl] = useState();

    const onDelete = async ( username ) => {
        const res = await deleteUser(username, token, 
                                            state.data.fileName);
        if(res.ok)
            navigate("/list")
    }
    useEffect( ()=>{
        //const auth = JSON.parse( sessionStorage.getItem("auth") )
        //console.log("info token : ",  auth.token )

        async function getData(){
            const res = await getInfo(username, token );
            if(res.ok){
                const data = await res.json();
                dispatch({type:"LIST", data})
                const imageRes = await getImage( data.fileName );
                if( imageRes.ok ){
                    const imageBlob = await imageRes.blob();
                    setImageUrl( URL.createObjectURL(imageBlob) );
                }
            }
        }
        getData();
        
        
    } , [username, token] )
    const onModifyForm = () => {
        navigate("/modify/"+username)
    }
    return (<>
        <HeaderCom />
        <InfoCom imageUrl={imageUrl} onModifyForm={onModifyForm} onDelete={onDelete} data={state.data}/>
    </>)
}
export default InfoCon;