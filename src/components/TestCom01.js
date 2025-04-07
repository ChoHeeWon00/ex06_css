import "../styles/test.css";
function TestCom01() {
    const style = { color : "blue", fontSize : "20px"};
  return (<>
    <div style={style}>
      TestCom01
    </div>
    <div style={{color : "red", fontSize : "30px"}}>
        css 설정
    </div>
    <div id="test" className="test">
        외부 css 설정
    </div>
    </>);
}
export default TestCom01;