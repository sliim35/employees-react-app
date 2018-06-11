import React from "react";

export default ({ term, data, update, isArchived, initialData }) => {
  const handleChange = e => {
    const value = e.target.value.toLowerCase();

    if (value.length !== 0) {
      const filter = data.filter(employee => {
        return employee.name.toLowerCase().includes(value);
      });

      update({
        data: filter,
        term: value
      });
    } else {
      update({
        data: initialData,
        term: ""
      });
    }
  };

  const handleChangeCheckbox = e => {
    const checked = e.target.checked;

    update({
      isArchived: checked
    });
  };

  return (
    <div className="container mt100 mb30">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={term}
            className="form-control"
            placeholder="Введите ФИО..."
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Archived"
              checked={isArchived}
              onChange={handleChangeCheckbox}
            />
            <label className="form-check-label" htmlFor="Archived">
              Скрыть архивные должности
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
