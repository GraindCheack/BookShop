import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RenderField from '../common/RenderField'

function BookFilter(params) {
  const onSubmit = formValues => {
    params.onSubmit(formValues);
  }

  return (
    <form className="w-100 mt-1 px-4" role="search" onSubmit={params.handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <Field component={RenderField} name="search" placeholder="Название, имя автора, артикул"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Поиск</button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'bookFilterForm',
  touchOnBlur: false
})(BookFilter);
