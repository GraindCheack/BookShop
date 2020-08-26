import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { AccNav } from './AccNav';

function Header (params){
  const { activeEl, auth } = params

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
            {auth.isAuthenticated ? <AccNav auth={auth}/>: <AuthNav/>}
          </div>
        </div>
        <div className="row align-items-center nav">
            <Link className="py-3 col col-md-5 col-lg-4 text-right" to="/dashboard/" style={
              (activeEl==="Dashboard" && {background: "#EA5445", color: "white"}) ||
              {background: "#D44B3D"}
            }>Dashboard</Link>
            <Link className="py-3 col text-left" to="/home" style={
              (activeEl==="Book list" && {background: "#EA5445", color: "white"}) ||
              {background: "#D44B3D"}
            }>Books list</Link>
        </div>
      </div>
    
    </header>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(Header);