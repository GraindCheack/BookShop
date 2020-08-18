import React from 'react';

export function AbstractTable(params) {
  const { Table, Search, Pagination } = params;

  return (
    <div className="dashboard-block w-100 d-flex flex-column px-0">
      <span className="px-4">Список книг</span>
      <Search />
      <Table />
      <Pagination />
    </div>
  );
}
