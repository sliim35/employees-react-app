import React, { Component } from "react";

export default class EmployeesData extends Component {
  state: {};
  roleRus(role) {
    switch (role) {
      case "cook":
        return "Повар";
      case "driver":
        return "Водитель";
      case "waiter":
        return "Официант";
      default:
        return "Не указано";
    }
  }

  render() {
    return (
      <tr
        data-target="#exampleModal"
        data-toggle="modal"
        onClick={() => this.props.update({ active: this.props.index })}
      >
        <td>{this.props.data.name}</td>
        <td>{this.roleRus(this.props.data.role)}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.props.data.birthday}</td>
      </tr>
    );
  }
}
