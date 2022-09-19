import React from 'react'

const SelectBox = (props) => {
  const {
    type,
  } = props;

  return (
    <>
      {type ==='years' && <select>
        <option key='' value='2000년'>2000년</option>
        <option key='' value='2001년'>2001년</option>
        <option key='' value='2002년'>2002년</option>
      </select>}
      {type === 'month' &&  <select>
        <option key='' value='1월'>1월</option>
        <option key='' value='2월'>2월</option>
        <option key='' value='3월'>3월</option>
      </select>}
      {type === 'day' && <select>
        <option key='' value='1일'>1일</option>
        <option key='' value='2일'>2일</option>
        <option key='' value='3일'>3일</option>
      </select>}
      {type === 'phon' && <select>
        <option key='' value='010'>010</option>
        <option key='' value='017'>017</option>
        <option key='' value='018'>018</option>
      </select>}
    </>
  )
}

export default SelectBox;