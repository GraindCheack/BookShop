import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RenderField from '../common/RenderField'

function AuthorSearch(params) {
  
  const onSubmit = formValues => {
    params.onSubmit(formValues);
  }

  return (
    <form className="w-100 mt-1 px-4" role="filter" onSubmit={params.handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <Field component={RenderField} name="last_name" placeholder="Фамилия" />
        <Field component={RenderField} name="first_name" placeholder="Имя" />
        <Field component={RenderField} name="middle_name" placeholder="Отчество"  />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Фильтр</button>
        </div>
      </div>
    </form>
  );
}


export default reduxForm({
  form: 'authorSearchForm',
  touchOnBlur: false
})(AuthorSearch);
