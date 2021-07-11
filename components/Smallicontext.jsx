import React from "react";

export default function Smallicontext({ item }) {
  return (
    <div className='smallicontext' key={item.id}>
      <img
        src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
        alt=''
        className='img'
      />
      <div className='context'>{item.text}</div>
    </div>
  );
}
