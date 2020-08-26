import React from 'react';

export function BookTable(params) {
  const { data={} } = params;
  const { results=[] } = data

  return (
    <table className="table table-bordered" style={{ borderBottom: "2px solid #707070" }}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Артикул</th>
          <th scope="col">Автор</th>
        </tr>
      </thead>
      <tbody>
        {results.map((value, index) => {
          return (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{value.name}</td>
              <td>{value.article_number}</td>
              <td>{`${value.author.last_name} ${value.author.first_name} ${value.author.middle_name}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
