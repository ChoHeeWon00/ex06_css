import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";
import StyleButton from "./common/StyleButton";
const InfoWrap = styled.div`
    width : 30%;
    margin : auto;
    border : 1px solid gray;
    font-size : 24px;
    padding : 20px;
    border-radius : 5px;
`;
function InfoCom( {onModifyForm, onDelete, data } ){
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>개 인 정 보</ProductTitle>
                <InfoWrap>
                {data && <>
                    username<br />- {data.username}<hr />
                    password<br />- {data.password}<hr />
                    role<br />- {data.role}<hr />
                    <StyleButton background={["8, 79, 183", 0.7]}
                            onClick={ onModifyForm }>
                        수정
                    </StyleButton>


                    <StyleButton background={["200, 36, 0", 0.7]}
                            onClick={ ()=> onDelete(data.username)}>
                        삭제
                    </StyleButton>
                </>}
                </InfoWrap>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default InfoCom;