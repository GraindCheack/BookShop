import React, { useEffect } from 'react';

import { getCurrYear } from '../../actions/dashboard';
import { connect } from 'react-redux';
import { max } from 'lodash';

function Graph(params) {
  /* const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"] */
  let data = [
    { name: "Янв", amount: 0 },
    { name: "Фев", amount: 0 },
    { name: "Мар", amount: 0 },
    { name: "Апр", amount: 0 },
    { name: "Май", amount: 0 },
    { name: "Июн", amount: 0 },
    { name: "Июл", amount: 0 },
    { name: "Авг", amount: 0 },
    { name: "Сен", amount: 0 },
    { name: "Окт", amount: 0 },
    { name: "Ноя", amount: 0 },
    { name: "Дек", amount: 0 },
  ];

  useEffect(() => {
    params.getCurrYear()
  }, [params.getCurrYear])

  if (params.dashboard.curr_year) {
    data = data.map((value, index) => {
      return {
        name: value.name,
        amount: params.dashboard.curr_year[index+1]
      }
    })
  }

  const maxAm = data.reduce((max, curr) => {
    return curr.amount > max ? curr.amount: max
  }, 0);
  const digitsAm = (Math.log10(maxAm) >> 0) + 1;
  const maxY = 10 ** digitsAm;
  const diff = 10 ** (digitsAm - 1);

  const getYAxis = () => {
    const content = [<text key={"textY-" + 10} className="graph-circle" x="5" y="52">{maxY - diff * 0}</text>];
    for (let i = 0; i < 10; i++) {
      content.push(<line key={"lineY-" + i} className="graph-text" x1="40" y1={50 * (i + 1)} x2="60" y2={50 * (i + 1)} stroke="#343A40" strokeWidth="2" />);
      content.push(<text key={"textY-" + i} className="graph-circle" x="5" y={52 + 50 * (i + 1)}>{maxY - diff * (i + 1)}</text>);
    }
    return content;
  };

  const getXAxis = () => {
    const content = [];
    let startMonthAm,
      endMonthAm = 50 + 500 * ((maxY - data[0].amount) / maxY);
    for (let i = 0; i < 12; i++) {
      const xStart = 80 * (i + 1),
        xEnd = 80 * (i + 2);

      content.push(<line key={"lineX-" + i} className="graph-text" x1={xStart} y1="540" x2={xStart} y2="560" stroke="#343A40" strokeWidth="2" />);
      content.push(<text key={"textX-" + i} className="graph-circle" x={65 + 80 * i} y="590">{data[i].name}</text>);

      startMonthAm = endMonthAm;
      if (i < 11) {
        endMonthAm = 50 + 500 * ((maxY - data[i + 1].amount) / maxY);
        content.push(<line key={"valueLine-" + i}
          x1={xStart} y1={startMonthAm}
          x2={xEnd} y2={endMonthAm}
          stroke="#0080FF" strokeWidth="2" />);
      }
      content.push(<circle key={"circle-" + i} cx={xStart} cy={startMonthAm} r="6" />);
      content.push(<text key={"valueText-" + i} x={xStart - 10} y={startMonthAm - 30}>{data[i].amount}</text>);
    }
    return content;
  };

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

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getCurrYear }
)(Graph);
