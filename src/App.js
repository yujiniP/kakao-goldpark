
import { useState } from 'react';
import './App.scss';
import Button from './component/Button';
import SelectBox from './component/selectBox';

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  }


  return (
    <>
      <div className='member-join'>
        <h1>회원가입</h1>
        <input type='text' placeholder="아이디" />
        <input type='password' placeholder="비밀번호" />
        <div className='inputBox | flex'>
          <Button name='남자' width='50%'/>
          <Button name='여자' width='50%'/>
        </div>
        <div className='privacy'>
          <div className='input-area'>
            <span>생일</span>
            <SelectBox type="years"/>
            <SelectBox type="month"/>
            <SelectBox type="day"/>
          </div>
          <div className='input-area'>
            <span>전화</span>
            <SelectBox type="phon"/>
            <input type='text' />
            <Button name='인증' width='20%'/>
          </div>
        </div>
        <p>모든 약관 내용에 동의합니다. <div className={`select-sliding ${toggle ? 'right' : ''}`} onClick={toggleButton}></div></p>
        <Button name='가입하기' width='100%'/>
      </div>
    </>
  );
}

export default App;
