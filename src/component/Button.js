import React from 'react'

const Button = (props) => {
  const {
    name,
    width,
  } = props;

  return (
    <div className={`btn-box`} style={{width:`${width}`}}>
      {name}
    </div>
  );
};

export default Button