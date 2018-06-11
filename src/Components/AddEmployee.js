import React, { Component } from "react";

export default class AddEmployee extends Component {
  addEmployee = e => {
    e.preventDefault();

    const employee = {
      id: this.props.lastId + 1,
      birthday: this.birthdayAdd.value,
      name: this.nameAdd.value,
      phone: this.phoneAdd.value,
      role: this.roleAdd.value,
      isArchive: this.archiveAdd.checked
    };

    const data = [...this.props.data, employee];

    this.props.update({
      data: data
    });
  };

  render() {
    return (
      <div className="container mb70">
        <div className="row">
          <div className="col-md-12">
            <h2>Добавить сотрудника</h2>
            <form onSubmit={this.addEmployee}>
              <div className="form-group">
                <label htmlFor="exampleName">Имя сотрудника</label>
                <input
                  name="name"
                  ref={input => {
                    this.nameAdd = input;
                  }}
                  type="text"
                  className="form-control"
                  id="exampleName"
                  placeholder="Введите ФИО"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputRole">Должность</label>
                <select
                  id="inputRole"
                  className="form-control"
                  ref={input => {
                    this.roleAdd = input;
                  }}
                >
                  <option defaultValue disabled>
                    Выберете...
                  </option>
                  <option value="driver">Водитель</option>
                  <option value="cook">Повар</option>
                  <option value="waiter">Официант</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTel">Телефон</label>
                <input
                  ref={input => {
                    this.phoneAdd = input;
                  }}
                  type="tel"
                  className="form-control"
                  id="exampleTel"
                  placeholder="Введите телефон"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleBirthday">Дата рождения</label>
                <input
                  ref={input => {
                    this.birthdayAdd = input;
                  }}
                  type="text"
                  className="form-control"
                  id="exampleBirthday"
                  placeholder="Введите дату рождения"
                />
              </div>
              <div className="form-group form-check">
                <input
                  ref={input => {
                    this.archiveAdd = input;
                  }}
                  type="checkbox"
                  className="form-check-input"
                  id="exampleArchived"
                />
                <label className="form-check-label" htmlFor="exampleArchived">
                  В архиве?
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Добавить сотрудника
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
