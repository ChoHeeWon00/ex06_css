import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
const ListTitle = styled.h3`
    color : brown;
    font-size : 30px;
    width : 200px;
    text-align : center;
    margin : 20px auto;
`;
const DivWrap = styled.div`
    margin : auto;
    width : 30%;
    border-top : 1px solid gray;
`;
const DivContent = styled.div`
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid gray;
    padding : 15px;
`;
function ListCom( { data, onInfo }){
    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ListTitle>회 원 목 록</ListTitle>
                <DivWrap>
                    <DivContent>
                        <b>아이디</b><b>비밀번호</b><b>ROLE</b>
                    </DivContent>
                    {data && data.map( (d, i) => 
                        <DivContent key={i}>
                            <span style={{ cursor : "pointer" }}
                                onClick={ () => onInfo(d.username) }>{d.username}</span>
                            <span>{d.password}</span>
                            <span>{d.role}</span>
                        </DivContent>
                    )}
                </DivWrap>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default ListCom;