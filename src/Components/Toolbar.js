import React, { Component } from "react";

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { age: true, name: true };
  }

  sort(type) {
    // с помощью реструктуризации создаём две переменные
    const { update, data } = this.props;
    // получаем порядок сортировки
    const isSorted = this.sorted[type];
    // устанавливаем направление
    let direction = isSorted ? 1 : -1;

    // создаём новый массив из данных, чтобы не перезаписывать
    // состояние и сортируем его
    const sorted = [].slice.call(data).sort((a, b) => {
      // чтобы сортировка всегда была одинаковой учтём все условия
      // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
      // значения метод массивов sort сделает свой выбор
      if (a[type] === b[type]) {
        return 0;
      }
      return a[type] > b[type] ? direction : direction * -1;
    });

    // меняем порядок сортировки
    this.sorted[type] = !isSorted;

    // обновляем состояние
    update({
      data: sorted,
      active: 0
    });
  }

  reset() {}

  render() {
    return (
      <thead className="thead-color">
        <tr>
          <th>ФИО</th>
          <th className="sorted" onClick={() => this.sort("role")}>
            Должность <i className="fas fa-sort" />
          </th>
          <th>Телефон</th>
          <th className="sorted" onClick={() => this.sort("birthday")}>
            Дата рождения <i className="fas fa-sort" />
          </th>
        </tr>
      </thead>
    );
  }
}
