import React from "react";

export default function Singletext({ item }) {
  return (
    <div className='single__text' key={item.id}>
      {item.top}
    </div>
  );
}
