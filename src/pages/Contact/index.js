import React from "react";

export default function Contact() {
  return (
    <div className="container contact-form mb-5">
      <form className="d-flex flex-column g-3 needs-validation was-validated" noValidate="">
        <h2>Send me a message!</h2>
        <div className="col-md-4 mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          ></input>
          <div className="invalid-feedback">Required Field</div>
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            ></input>
            <div className="invalid-feedback">Required Field</div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">
            Message
          </label>
          <input
            type="textarea"
            className="form-control"
            id="validationCustom03"
            required
          ></input>
          <div className="invalid-feedback">Required Field</div>
        </div>
        <div className="col-12"></div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
