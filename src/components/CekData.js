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

        {/* // body */}
        <div class="container">
          <div class="row">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                class="btn btn-secondary me-md-2"
                type="button"
                to="./registrasi"
              >
                Edit Data
              </Link>
              <Link class="btn btn-primary" type="button" to="./registrasi">
                Daftar
              </Link>
            </div>
          </div>

          <div>
            <h5>Cari</h5>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <button class="btn btn-warning" type="submit">
            Cetak sertifikat
          </button>
        </div>
        {/* // end body */}
      </div>
    );
  }
}

export default Registrasi;
