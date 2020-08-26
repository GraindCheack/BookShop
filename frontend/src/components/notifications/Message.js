import React from 'react';

export default function Message(params) {
  const { date, message, is_read = false } = params;

  return (
    <div className="card mt-3" style={is_read && {opacity: "0.5"} || {}}>
      <div className="card-header" style={{fontSize: "1rem"}}>
        {date}
      </div>
      <div className="card-body">
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
}
