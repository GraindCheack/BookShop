import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RenderField from '../common/RenderField'

function BookForm(params) {

  const onSubmit = formValues => {
    params.onSubmit(formValues);
  }

  return (
    <form className="w-100" role="creating" onSubmit={params.handleSubmit(onSubmit)}>
      <div className="d-flex">
        <div className="create-inp-grp">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Автор</span>
            </div>
            <Field component={RenderField} name="author.last_name" placeholder="Фамилия" required={true}/>
            <Field component={RenderField} name="author.first_name" placeholder="Имя" required={true}/>
            <Field component={RenderField} name="author.middle_name" placeholder="Отчество" required={true}/>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Книга</span>
            </div>
            <Field component={RenderField} name="name" placeholder="Название" required={true}/>
            <Field component={RenderField} name="article_number" placeholder="Артикул" required={true}/>
          </div>
        </div>
        <button className="btn btn-outline-primary flex-grow-1 create-btn ml-md-5 ml-2">Создать</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'bookForm',
  touchOnBlur: false
})(BookForm);
