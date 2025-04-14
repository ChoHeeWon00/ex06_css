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

const DivPage = styled.div`
    margin-top : 20px;
    text-align : center;
`;
const SpanPage = styled.span`
    width : 30px;
    display : inline-block;
    cursor : pointer;
`;

function ListCom( { onClick, data, onInfo }){
    let number = []
    if( data !== null ){
        //let i = 1;
        for(let i=1 ; i <= data.totalPages ; i++){
            number.push(<SpanPage key={i} onClick={ () => onClick(i) }>{i}</SpanPage>)
        }
        number.push(<b key={data.totalPages + 1}>( {data.currentPage} / {data.totalPages} )</b>)
    }

    return (<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ListTitle>회 원 목 록</ListTitle>
                <DivWrap>
                    <DivContent>
                        <b>아이디</b><b>비밀번호</b><b>ROLE</b>
                    </DivContent>
                    {data && data.list.map( (d, i) => 
                        <DivContent key={i}>
                            <span style={{ cursor : "pointer" }}
                                onClick={ () => onInfo(d.username) }>{d.username}</span>
                            <span>{d.password}</span>
                            <span>{d.role}</span>
                        </DivContent>
                    )}
                    <DivPage>{number}</DivPage>
                </DivWrap>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default ListCom;