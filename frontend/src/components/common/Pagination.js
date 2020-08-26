import React from 'react';

function Page(params) {
  const { text, number, loadPage } = params

  function handleClick(e) {
    e.preventDefault();
    loadPage(number)
  }

  return (
    <li className="page-item">
      <button key={`page-button-${text}`} className="page-link" onClick={handleClick}>{text}</button>
    </li>
  );
}

function ActivePage(params) {
  const { text } = params
  return (
    <li className="page-item active">
      <button className="page-link">{text} <span className="sr-only">(current)</span></button>
    </li>
  );
}

export function Pagination(params) {
  const { page, count, loadPage } = params
  const pageCount = ((count - 0.01) / 20 >> 0) + 1
  
  const pages = []

  if (count !== 0) {

    if ( page === 1) {
      pages.push(<ActivePage key={`active-page-${1}`} text={1}/>) 
      if (pageCount !== 1) {
        pages.push(<Page key={`page-${pageCount}`} text={pageCount} number={pageCount} loadPage={loadPage}/>)
        pages.push(<Page key={`page-next`} text={"Next"} number={page + 1} loadPage={loadPage}/>)
      } 
    } else {
      pages.push(<Page key={`page-previous`} text={"Previous"} number={page - 1} loadPage={loadPage}/>)
      pages.push(<Page key={`page-${1}`} text={1} number={1} loadPage={loadPage}/>)
      if (page === pageCount) {
        pages.push(<ActivePage key={`active-page-${pageCount}`} text={pageCount}/>)
      } else {
        pages.push(<ActivePage key={`active-page-${page}`} text={page}/>)
        pages.push(<Page key={`page-${pageCount}`} text={pageCount} number={pageCount} loadPage={loadPage}/>)
        pages.push(<Page key={`page-next`} text={"Next"} number={page + 1} loadPage={loadPage}/>)
      }
    }

  }
  
  

  return (
    <nav className="mx-auto" aria-label="Pagination">
      <ul className="pagination">
        {pages}
      </ul>
    </nav>
  );
}
