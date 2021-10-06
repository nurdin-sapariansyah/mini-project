import react from "react";
import logo from "./logo.png";
import vector from "./vector.jpg";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

function Home() {
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

        {/* //body */}
        <img
          src={vector}
          alt=""
          width="100%"
          height="350"
          class="d-inline-block align-text-center"
        />
        <div class="container position-absolute bottom-0 start-50 translate-middle-x">
          <div class="row">
            <div class="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
              <h4 class="text-info fw-bold">Registrasi Vaksin</h4>
              <p class="fst-italic fw-lighter text-md-start">
                Lindungi diri sendiri dengan berpartisipasi dalam program
                Vaksinasi COVID-19
              </p>
              <div class="card start-center">
                <div class="card-body text-center d-grid gap-2 col-6 mx-auto">
                  <Link
                    type="button"
                    class="btn btn-info btn-lg"
                    to="/registrasi"
                  >
                    Registrasi
                  </Link>
                  <br />
                  <Link
                    type="button"
                    class="btn btn-info btn-lg bg-body rounded"
                    to="/cekData"
                  >
                    Cek data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //end body */}
      </div>
    );
  }
}

export default Home;
