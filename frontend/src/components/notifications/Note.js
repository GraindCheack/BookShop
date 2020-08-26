import React, { useEffect } from 'react';

export function Note(params) {
  const { imageLink, title, number, setModalData, readingFunction, data_not_read, data=[] } = params;

  const onClick = (e) => {
    e.preventDefault();
    setModalData({
      title: title,
      body: data
    });
    data_not_read.forEach(element => {
      readingFunction({...element, is_read: true})
    });
  };

  return (
    <div className="note-block" data-toggle="modal" data-target="#staticBackdrop" onClick={onClick}>
      <img src={imageLink} />
      <div className="note-block__number">{number}</div>
    </div>
  );
}
