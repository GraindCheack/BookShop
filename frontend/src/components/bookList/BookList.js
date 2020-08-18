import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../../conf';
import { AbstractTable } from '../common/AbstractTable';
import { Pagination } from '../common/Pagination';

function CreateBook(params) {
  return (
    <div className="dashboard-block w-100">
      <form className="w-100" role="creating">
        <div className="d-flex">
          <div className="create-inp-grp">
            <div className="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Автор</span>
              </div>
              <input type="text" className="form-control search-input" placeholder="Фамилия" aria-label="Create"/>
              <input type="text" className="form-control search-input" placeholder="Имя" aria-label="Create"/>
              <input type="text" className="form-control search-input" placeholder="Отчество" aria-label="Create"/>
            </div>
            <div className="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Книга</span>
              </div>
              <input type="text" className="form-control search-input" placeholder="Название" aria-label="Create"/>
              <input type="text" className="form-control search-input" placeholder="Артикул" aria-label="Create"/>
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary flex-grow-1 create-btn ml-md-5 ml-2">Создать</button>
        </div>
      </form>
    </div>
  );
}

function BookSearch(params) {
  return (
      <form className="w-100 mt-1 px-4" role="search">
        <div className="input-group mb-3">
          <input type="text" className="form-control search-input" placeholder="Название, имя автора, артикул" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
          </div>
        </div>
      </form>
  );
}

function BookTable(params) {
  const data = [
    {
      name: "Knig",
      author: "Mark Inves Kreyt",
      article: "asd23d"
    },
    {
      name: "Love",
      author: "Breyt Bark Briz",
      article: "asd221"
    },
  ]
  
  return (
      <table className="table table-bordered" style={{borderBottom: "2px solid #707070"}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Автор</th>
            <th scope="col">Арткул</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ ++index }</th>
                <td>{ value.name }</td>
                <td>{ value.author }</td>
                <td>{ value.article }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}

function BookList (params){
  const { setActiveEl } = params
  
  useEffect(() => {
    setActiveEl("Book list")
  }, [setActiveEl])

  return (
    <main className="flex-grow-1">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <CreateBook/>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <AbstractTable Table={BookTable} Pagination={Pagination} Search={BookSearch}/>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(BookList);