import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../../conf';

function Header (params){
  const { activeEl } = params

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center col-md-5 col-lg-4 text-md-right title">
            <span style={{color: "#3F3F3F"}}>BOOK</span>
            <span style={{color: "#D54B3D"}}>SHOP</span>
          </div>
          <div className="col-12 text-left col-md-auto d-flex align-items-center justify-content-center acc">
            <img src="/static/frontend/images/account_icon.svg" style={{width: "36px", height: "36px"}}/>
            <a href={SITE_URL + 'login'} className="ml-3 acc-link">Sign in</a>
            <a href={SITE_URL + 'register'} className="ml-3 acc-link">Sign up</a>
          </div>
        </div>
        <div className="row align-items-center nav">
            <Link className="py-3 col col-md-5 col-lg-4 text-right" to="/dashboard" style={
              (activeEl==="Dashboard" && {background: "#EA5445", color: "white"}) ||
              {background: "#D44B3D"}
            }>Dashboard</Link>
            <Link className="py-3 col text-left" to="/book_list" style={
              (activeEl==="Book list" && {background: "#EA5445", color: "white"}) ||
              {background: "#D44B3D"}
            }>Books list</Link>
        </div>
      </div>
      
      
      {/* <div style={{ borderRadius: '0' }}>
        <a href={SITE_URL + 'login'}>
          login
        </a>
      </div> */}
    </header>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(Header);