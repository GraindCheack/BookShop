import React from 'react';

export function AuthorTable(params) {
  
  const { data={} } = params;
  const { results=[] } = data
  results.sort((prev, next) => next.percent - prev.percent);

  return (
    <table className="table table-bordered" style={{ borderBottom: "2px solid #707070" }}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Автор</th>
          <th scope="col">Книги (%)</th>
        </tr>
      </thead>
      <tbody>
        {results.map((value, index) => {
          const {percent, first_name, last_name, middle_name} = value;

          return (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{`${last_name} ${first_name} ${middle_name}`}</td>
              <td>
                <span className="progress-text">{percent.toFixed(2)}</span>
                <div className="progress" style={{ height: "10px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: percent }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
