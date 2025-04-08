import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import StyleForm from "./common/StyleForm"
import StyleInput from "./common/StyleInput"
import { ProductTitle } from "./common/StyleProduct"
import StyleButton from "./common/StyleButton"
function ModifyCom({onChange,onSubmit,username,password,role}){
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>수 정 페 이 지</ProductTitle>
                <StyleForm onSubmit={onSubmit} width="30%">
                    <StyleInput name="username" value={username} readOnly/>
                    <StyleInput name="password" value={password} onChange={onChange}/>
                    <StyleInput name="role" value={role} onChange={onChange}/>
                    <StyleButton>수정</StyleButton>
                </StyleForm>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default ModifyCom;