import styled from 'styled-components';

const colorList = ["red", "skyblue"]
const StyleDiv01 = styled.div`
    color: blue; font-size: 30px;
`;
const StyleH1 = styled.h1`
    background-color: ${colorList[1]};
    color: ${colorList[0]}; 
`;
function TestCom02(){
    return (<>
        <StyleDiv01>TestCom02</StyleDiv01>
        <StyleH1>TestCom02</StyleH1>
    </>
    )
}
export default TestCom02;