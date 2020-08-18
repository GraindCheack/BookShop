import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../../conf';
import { max } from 'lodash';
import { Pagination } from '../common/Pagination';
import { AbstractTable } from '../common/AbstractTable';

function Card(params) {
  const data = {
    numberBooks: 247
  }
  const { numberBooks } = data
  const { blockStyle, blockClases, text } = params
  
  return (
    <div className={"dashboard-block card-block h-100 " + blockClases} style={blockStyle}>
      <div className="info-bloc__text">
        <p>{text}</p>
        <p className="info-block__number">{numberBooks}</p>
      </div>
      <img src="/static/frontend/images/book.svg" style={{marginLeft: "auto"}}/>
    </div>
  );
}

function AuthorSearch(params) {
  return (
      <form className="w-100 mt-1 px-4" role="search">
        <div className="input-group mb-3">
          <input type="text" className="form-control search-input" placeholder="Фамилия" aria-label="Search"/>
          <input type="text" className="form-control search-input" placeholder="Имя" aria-label="Search"/>
          <input type="text" className="form-control search-input" placeholder="Отчество" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
          </div>
        </div>
      </form>
  );
}

function AuthorTable(params) {
  const data = [
    {
      name: "Mark Inves Kreyt",
      value: "50%"
    },
    {
      name: "Breyt Bark Briz",
      value: "20%"
    },
  ]
  
  return (
      <table className="table table-bordered" style={{borderBottom: "2px solid #707070"}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Автор</th>
            <th scope="col">Книги (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            const procent = value.value

            return (
              <tr key={index}>
                <th scope="row">{ ++index }</th>
                <td>{ value.name }</td>
                <td>
                  <span className="progress-text">{procent}</span>
                  <div className="progress" style={{height: "10px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: procent}} aria-valuenow={procent} aria-valuemin="0" aria-valuemax="100"/>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}

function Graph(params) {
  const data = [
    {name: "Янв", amount: 10},
    {name: "Фев", amount: 20},
    {name: "Мар", amount: 15},
    {name: "Апр", amount: 40},
    {name: "Май", amount: 10},
    {name: "Июн", amount: 70},
    {name: "Июл", amount: 70},
    {name: "Авг", amount: 57},
    {name: "Сен", amount: 23},
    {name: "Окт", amount: 100},
    {name: "Ноя", amount: 45},
    {name: "Дек", amount: 12},
  ]
  const maxAm = max(data)
  const digitsAm = (Math.log10(maxAm) >> 0) + 1
  const maxY = 10 ** (digitsAm + 1)
  const diff = 10 ** digitsAm
  console.log(diff)

  const getYAxis = () => {
    const content = [<text key={"textY-" + 10} className="graph-circle" x="5" y="52">{maxY-diff*0}</text>]
    for (let i = 0; i < 10; i++) {
      content.push(<line key={"lineY-" + i} className="graph-text" x1="40" y1={50*(i+1)} x2="60" y2={50*(i+1)} stroke="#343A40" strokeWidth="2" />)
      content.push(<text key={"textY-" + i} className="graph-circle" x="5" y={52 + 50*(i+1)}>{maxY-diff*(i+1)}</text>)
    }
    return content
  }

  const getXAxis = () => {
    const content = []
    let startMonthAm, 
        endMonthAm = 50 + 500*((maxY - data[0].amount) / maxY)
    for (let i = 0; i < 12; i++) {
      const xStart = 80*(i + 1),
            xEnd = 80*(i + 2)

      content.push(<line key={"lineX-" + i} className="graph-text" x1={xStart} y1="540" x2={xStart} y2="560" stroke="#343A40" strokeWidth="2" />)
      content.push(<text key={"textX-" + i} className="graph-circle" x={65 + 80*i} y="590">{data[i].name}</text>)

      startMonthAm = endMonthAm
      if (i < 11) {
        endMonthAm = 50 + 500*((maxY - data[i + 1].amount) / maxY)
        content.push(<line key={"valueLine-" + i} 
          x1={xStart} y1={startMonthAm} 
          x2={xEnd} y2={endMonthAm}  
          stroke="#0080FF" strokeWidth="2" />)
      }
      content.push(<circle key={"circle-" + i}  cx={xStart} cy={startMonthAm} r="6"/>)
      content.push(<text key={"valueText-" + i}  x={xStart - 10} y={startMonthAm - 30}>{data[i].amount}</text>)
      console.log(50 + 500*(data[i].amount / maxY))
    }
    return content
  }

  return (
    <div className="dashboard-block w-100">
      <svg className="graph" xmlns="http://www.w3.org/2000/svg" version="1.1" width="975" height="600">
        <line x1="50" y1="40" x2="50" y2="550" stroke="#343A40" strokeWidth="2" />
        <line x1="50" y1="550" x2="975" y2="550" stroke="#343A40" strokeWidth="2" />
        {getYAxis()}
        {getXAxis()}
      </svg>
    </div>
  );
}

function Dashboard (params) {
  const { setActiveEl } = params
  
  useEffect(() => {
    setActiveEl("Dashboard")
  }, [setActiveEl])

  return (
    <main className="flex-grow-1">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          {/* <div className="col-12 col-sm-6 col-md-5 col-lg-4 d-flex justify-content-center"> */}
          <div className="col row">
            <div className="col-12 col-md-6 mt-3 p-0">
              <Card blockStyle={{borderLeft: "8px solid #435EBF"}} blockClases="mx-auto mx-md-0 mr-md-auto" text="Книг (всего)"/>
            </div>
            {/* <div className="col-12 col-sm-6 col-md-5 col-lg-4 mt-3 mt-sm-0 d-flex justify-content-center"> */}
            <div className="col-12 col-md-6 mt-3 p-0">
              <Card blockStyle={{borderLeft: "8px solid #D44B3D"}} blockClases="mx-auto mx-md-0 ml-md-auto" text="Книг (прошлый месяц)"/>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          {/* <div className="col-12 col-sm-10 col-md-9 col-lg-7 d-flex justify-content-center"> */}
          <div className="col d-flex justify-content-center">
            <AbstractTable Table={AuthorTable} Search={AuthorSearch} Pagination={Pagination}/>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          {/* <div className="col-12 col-sm-10 col-md-9 col-lg-7 d-flex justify-content-center"> */}
          <div className="col d-flex justify-content-center">
            <Graph/>
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
)(Dashboard);