import react from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

function Home() {
  render();
  {
    return (
      <div>
        {/* //header */}
        <header>
          <nav class="navbar navbar-light bg-light shadow-sm">
            <div class="container-fluid">
              <Link class="navbar-brand" to="./home">
                <img
                  src={logo}
                  alt=""
                  width="80"
                  height="40"
                  class="d-inline-block align-text-top"
                />
                PeduliDiriSendiri.com
              </Link>
            </div>
          </nav>
        </header>
        {/* // end header */}

        {/* //body */}
        <div class="container position-absolute top-50 start-50 translate-middle">
          <div class="row">
            <div class="col-sm-4">
              <h5 class="text-center">Registrasi Vaksin</h5>
              <br />
              <div class="card bg-secondary start-center">
                <div class="card-body text-center d-grid gap-4 col-6 mx-auto">
                  <Link class="btn btn-primary" to="/registrasi">
                    Registrasi
                  </Link>
                  <Link class="btn btn-primary" to="/cekData">
                    Cek data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //end body */}
        {/* <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer> */}
      </div>
    );
  }
}

export default Home;
