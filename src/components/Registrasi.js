import react from "react";
import logo from "./logo.png";

function Registrasi() {
  return (
    <div>
      {/* //header */}
      <header>
        <nav class="navbar navbar-light bg-light shadow-sm">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                alt=""
                width="80"
                height="40"
                class="d-inline-block align-text-top"
              />
              PeduliDiriSendiri.com
            </a>
          </div>
        </nav>
      </header>
      {/* // end header */}

      {/* // body */}
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {/* // end body */}
    </div>
  );
}

export default Registrasi;
