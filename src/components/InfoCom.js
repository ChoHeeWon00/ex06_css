import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";
const InfoWrap = styled.div`
    width : 30%;
    margin : auto;
    border : 1px solid gray;
    font-size : 24px;
    padding : 20px;
    border-radius : 5px;
`;
function InfoCom( { data } ){
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>개 인 정 보</ProductTitle>
                <InfoWrap>
                {data && <>
                    username<br />- {data.username}<hr />
                    password<br />- {data.password}<hr />
                    role<br />- {data.role}<hr />
                </>}
                </InfoWrap>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default InfoCom;