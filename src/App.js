import React, { Component } from "react";

import load from "./utils/load";
import EmployeeList from "./Components/EmployeeList";
import EditEmployee from "./Components/EditEmployee";
import AddEmployee from "./Components/AddEmployee";
import Filter from "./Components/Filter";
import Toolbar from "./Components/Toolbar";

export default class App extends Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: "",
      isArchived: false,
      rolesDictionary: {
        cook: "Повар",
        driver: "Водитель",
        waiter: "Официант"
      }
    };
    // Сразу загружаем данные
    this.loadData();
  }

  loadData() {
    load(this.props.data).then(employees => {
      this.initialData = JSON.parse(employees);

      this.setState({
        data: this.initialData
      });
    });
  }

  updateData = config => {
    this.setState(config);
  };

  render() {
    let { isArchived, data } = this.state;

    if (isArchived) {
      data = data.filter(employee => {
        return !employee.isArchive;
      });
    }

    return (
      <div>
        <Filter
          term={this.state.term}
          data={data}
          initialData={this.initialData}
          update={this.updateData}
          isArchived={isArchived}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <Toolbar
                  initialData={this.initialData}
                  data={data}
                  update={this.updateData}
                />

                <EmployeeList
                  data={data}
                  update={this.updateData}
                  initialData={this.initialData}
                />
              </table>
            </div>
          </div>
        </div>

        <EditEmployee
          update={this.updateData}
          data={data}
          active={this.state.active}
          isArchived={isArchived}
          rolesDictionary={this.state.rolesDictionary}
        />

        <AddEmployee
          lastId={data && data.length && data[data.length - 1].id}
          update={this.updateData}
          data={data}
          isArchived={isArchived}
        />
      </div>
    );
  }
}
