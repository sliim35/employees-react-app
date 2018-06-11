import React, { Component } from "react";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      employeeData: {}
    };
  }

  toggleMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  handleSave = e => {
    console.log(e.target.value);
  };

  editEmployee = e => {
    e.preventDefault();

    const { data, active } = this.props;

    data[active].name = this.nameEdit.value;

    this.props.update({
      data: data
    });

    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    const { data, active, rolesDictionary } = this.props;

    if (!data || !data[active]) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Ничего не найдено!</h3>
            </div>
          </div>
        </div>
      );
    }

    const employee = data[active];

    return (
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Данные сотрудника
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span>&times;</span>
              </button>
            </div>

            {this.state.editMode ? (
              <form onSubmit={this.editEmployee}>
                <div className="modal-body">
                  <div className="thumbnail-caption">
                    <table className="user-info table table-hover">
                      <tbody>
                        <tr>
                          <td>ФИО:</td>
                          <td className="user-desc">
                            <input
                              name="name"
                              type="text"
                              placeholder={employee.name}
                              ref={input => {
                                this.nameEdit = input;
                              }}
                              onChange={this.handleSave}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Должность:</td>
                          <td className="user-desc">
                            {rolesDictionary[employee.role]}
                          </td>
                        </tr>
                        <tr>
                          <td>Телефон:</td>
                          <td className="user-desc">{employee.phone}</td>
                        </tr>

                        <tr>
                          <td>Дата рождения:</td>
                          <td className="user-desc">{employee.birthday}</td>
                        </tr>

                        <tr>
                          <td>В архиве:</td>
                          <td className="user-desc">
                            {employee.isArchive ? "Да" : "Нет"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-info">
                    Сохранить
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Закрыть
                  </button>
                </div>
              </form>
            ) : (
              <div className="editnone">
                <div className="modal-body">
                  <div className="thumbnail-caption">
                    <table className="user-info table table-hover">
                      <tbody>
                        <tr>
                          <td>ФИО:</td>
                          <td className="user-desc">{employee.name}</td>
                        </tr>

                        <tr>
                          <td>Должность:</td>
                          <td className="user-desc">
                            {rolesDictionary[employee.role]}
                          </td>
                        </tr>

                        <tr>
                          <td>Телефон:</td>
                          <td className="user-desc">{employee.phone}</td>
                        </tr>

                        <tr>
                          <td>Дата рождения:</td>
                          <td className="user-desc">{employee.birthday}</td>
                        </tr>

                        <tr>
                          <td>В архиве:</td>
                          <td className="user-desc">
                            {employee.isArchive ? "Да" : "Нет"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.toggleMode}
                  >
                    Редактировать
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
