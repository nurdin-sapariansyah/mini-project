import react from "react";
import logo from "./logo.png";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import Home from "./cek-data/Home";

function Registrasi() {
  render();
  {
    return (
      <div>
        {/* //header */}
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container-fluid">
              <a class="navbar-brand text-info" href="#">
                <img
                  src={logo}
                  alt=""
                  width="80"
                  height="40"
                  class="d-inline-block align-text-center"
                />
                PeduliDiriSendiri
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active text-info"
                      aria-current="page"
                      href="#"
                    >
                      Beranda
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Tentang
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Cara Kerja
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Syara Penggunaan
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Kebijakan Privasi
                    </a>
                  </li>
                </ul>
                <Link
                  type="button"
                  class="btn btn-info btn-lg"
                  to="/registrasi"
                >
                  Registrasi
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {/* // end header */}

        {/* // body */}
        <div class="container position-absolute top-50 start-50 translate-middle">
          <div class="row">
            <div class="col-md-12 shadow-lg p-3 mb-5 bg-body rounded">
              <div class="card start-center">
                <div class="card-body text-center d-grid gap-4 col-6 mx-auto">
                  <Home></Home>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // end body */}
      </div>
    );
  }
}

export default Registrasi;
