import React from 'react';

export function Card(params) {

  const { blockStyle, blockClases, text, data } = params

  const { number } = data

  return (
    <div className={"dashboard-block card-block h-100 " + blockClases} style={blockStyle}>
      <div className="info-bloc__text">
        <p>{text}</p>
        <p className="info-block__number">{number}</p>
      </div>
      <img src="/static/frontend/images/book.svg" style={{ marginLeft: "auto" }} />
    </div>
  );
}
