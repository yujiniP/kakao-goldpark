import { useState } from 'react';
import './App.css';
import Button from './component/Button';

function App() {
  let counter = 0;
  const[counter2, setCounter2] = useState(0);
  const increase = () => {
    counter= counter + 1;
    setCounter2(counter2 + 1);
    console.log('counter는', counter, 'counter2는', counter2);
  }
  return (
    <>
    <div className='member-join'>
      <h1>회원가입</h1>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <Button name='남자'/><Button name='여자'/>
    </div>
    </>
  );
}

export default App;
