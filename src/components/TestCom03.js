import StyleButton from './BtnCom03.js';
function TestCom03( props ) {
  return (<div>
     TestCom03<br />
     <StyleButton>클릭</StyleButton><br />
     
     <StyleButton width="100px" background={["255,0,0", 0.5]}>로그인</StyleButton>
    </div>);
}
export default TestCom03;