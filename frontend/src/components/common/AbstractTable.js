import React, { useState, useEffect } from 'react';
import { set } from 'lodash';

export function AbstractTable(params) {
  const [page, setPage] = useState(1)
  const [lastFormValue, setlastFormValue] = useState({search: ""})
  const { Table, Search, Pagination, data={} } = params;
  const { count } = data

  const onSubmit = formValues => {
    setlastFormValue(formValues)
    params.dataFunction(page, formValues);
  };

  const loadPage = newPage => {
    setPage(newPage)
    params.dataFunction(newPage, lastFormValue);
  }

  return (
    <div className="dashboard-block w-100 d-flex flex-column px-0">
      <span className="px-4">Список книг</span>
      <Search onSubmit={onSubmit} />
      <Table data={data}/>
      <Pagination page={page} loadPage={loadPage} count={count}/>
    </div>
  );
}
