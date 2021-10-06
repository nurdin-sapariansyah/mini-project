import react from "react";
import logo from "./logo.png";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

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
              </div>
            </div>
          </nav>
        </header>
        {/* // end header */}

        {/* // body */}
        <div class="bg-info">
          <br />
          <div class="container">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Nama
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  NIK
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Alamat
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Jenis kelamin
                </label>
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih jenis kelamin
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Vaksin ke
                </label>
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih vaksin
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Jenis vaksin
                </label>
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pilih jenis vaksin
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
          </div>
          {/* // end body */}
        </div>
      </div>
    );
  }
}

export default Registrasi;
