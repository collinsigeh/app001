import React from "react";

import "../modules/UI/UIStyles.css";
import "./NewUserForm.css";

const NewUserForm = () => {
  return (
    <div className="card">
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Age (Years)</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
          <input type="submit" className="submit-button" value="Add User" />
      </div>
    </div>
  );
};

export default NewUserForm;
