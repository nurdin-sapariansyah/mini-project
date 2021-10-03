import react from "react";
import logo from "./logo.png";

function Home() {
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

      {/* //body */}
      <div class="container position-absolute top-50 start-50 translate-middle">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Registrasi Vaksin</h5>

                <a href="#" class="btn btn-primary">
                  Registrasi
                </a>
                <a href="#" class="btn btn-primary">
                  Cek data
                </a>
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

export default Home;
