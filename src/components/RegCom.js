import StyleButton from "./common/StyleButton";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { ProductTitle } from "./common/StyleProduct";

function RegCom({ onChange,onSubmit,role,username,password }){
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>
                    회 원 가 입
                </ProductTitle>
                <StyleForm onSubmit={onSubmit} width="30%">
                    <StyleInput value={username} onChange={onChange} name="username" placeholder="username" />
                    <StyleInput value={password} onChange={onChange} name="password" placeholder="password" />
                    <StyleInput value={role} onChange={onChange} name="role" placeholder="role" />
                    <input type="file" name="file" onChange={onChange} />
                    <StyleButton background={["0, 100, 238", 0.5]}>REGISTER</StyleButton>
                </StyleForm>
                
            </StyleContentWrap>
        </StyleContentBlock>
    </>)   
}
export default RegCom;