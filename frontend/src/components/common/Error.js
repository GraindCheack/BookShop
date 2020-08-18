import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function NotFound (params){


  return (
    <main>
      <div className="container-fluid  text-center">
        <span className="title" style={{fontSize: "6rem"}}>404 Страница не найдена</span>
      </div>
    </main>
  );
}

