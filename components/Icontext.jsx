import React from "react";

export default function Icontext({ item }) {
  return (
    <div className='list__sublist__item' key={item.id}>
      <img
        src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
        alt='lol'
        className='img'
      />
      <div className='content'>
        {item.top} <br />
        {item.bottom}
      </div>
    </div>
  );
}
