import React from 'react';

export function Pagination(params) {
  return (
    <nav className="mx-auto" aria-label="Pagination">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  );
}
