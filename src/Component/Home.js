import React from "react";
import "./home.css";
import cafe3 from "../images/cafe3.jpg";
import cafe from "../images/cafe.jpg";
import cafe1 from "../images/cafe1.jpg";
import cafe2 from "../images/cafe2.jpg";
import caf from "../images/caf.jpg";
import Espresso from "../images/Espresso.jpg";
import cm from "../images/cm.mp4";
import c from "../images/c.jpg";
import doughnut from "../images/doughnut.jpg";

const Home = () => {
  return (
    <>
      <div className="container-fluid px-0 my-2">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={cafe3}
                className="d-block w-100"
                alt="..."
                height="600"
              ></img>
              <div className="carousel-caption">
                <h1 className="cafe-name">Welcome to RK Cafe</h1>
                <p className="para">
                  We believe a cup of coffee is one of the most important simple
                  pleasures in life.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={cafe1}
                className="d-block w-100"
                alt="..."
                height="600"
              ></img>
              <div className="carousel-caption">
                <h1 className="cafe-name">Welcome to RK Cafe</h1>
                <p className="para">Taste The Freshness!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={cafe2}
                className="d-block w-100"
                alt="..."
                height="600"
              ></img>
              <div className="carousel-caption">
                <h1 className="cafe-name">Welcome to RK Cafe</h1>
                <p className="para">
                  Inaugurated by PM Narendra Modi on 29th of October 2018
                </p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      <section id="about" className="py-5">
        <div className="container">
          <div
            className="row"
            style={{ paddingBottom: "25px", paddingTop: "50px" }}
          >
            <div className="col-md-6 my-4">
              <h1 className="text-uppercase title-text display-3">About Us</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus maiores reiciendis ab quam deserunt exercitationem
                impedit esse ex blanditiis atque
              </p>
              <a
                href="/about"
                className="btn hvr-right my-4 text-capitalize Button"
              >
                Know More
              </a>
            </div>
            <div className="col-md-6 about-images my-4">
              <img
                src={Espresso}
                alt=""
                className="img-1 img-thumbnail about-img"
              ></img>
              <img
                src={cafe2}
                alt=""
                className="img-2 img-thumbnail about-img"
              ></img>
              <img
                src={cafe3}
                alt=""
                className="img-3 img-thumbnail about-img"
              ></img>
              <img
                src={cafe}
                alt=""
                className="img-4 img-thumbnail about-img"
              ></img>
              <img
                src={caf}
                alt=""
                className="img-5 img-thumbnail about-img"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="most-liked">
        <div className="video-container">
          <video className="bg-video" autoplay muted loop>
            <source src={cm} type="video/mp4"></source>
          </video>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center py-5">
              <h2 className="text-uppercase text-color font-weight-bold">
                Most Demanded
              </h2>
            </div>
          </div>
          <div
            className="row justify-content-around align-items-center"
            style={{ marginTop: "25px", paddingBottom: "35px" }}
          >
            <div className="col-xl-3 col-lg-4 col-sm rotate">
              <div
                className="card text-center mb-3 coffee-card"
                style={{ height: "400px" }}
              >
                <div className="card-header">
                  <h4 className="font-weight-light title-text">Espresso</h4>
                </div>
                <div className="card-body">
                  <img src={Espresso} className="img-fluid rounded"></img>
                </div>
                <div className="card-footer">with Muffin</div>
                <div className="back">
                  <div className="back-content">
                    <h1 className="text-uppercase font-weight-light">
                      Only for
                    </h1>
                    <h3 className="mb-3" style={{ color: "#ca3434" }}>
                      200Rs
                    </h3>
                    <a href="#" className="btn hvr-right my-4 text-capitalize">
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm rotate">
              <div
                className="card text-center mb-3 coffee-card"
                style={{ height: "400px" }}
              >
                <div className="card-header">
                  <h4 className="font-weight-light title-text">Cafe Latte</h4>
                </div>
                <div className="card-body">
                  <img src={doughnut} className="img-fluid rounded"></img>
                </div>
                <div className="card-footer">with Doughnut</div>
                <div className="back">
                  <div className="back-content">
                    <h1 className="text-uppercase font-weight-light">
                      Only for
                    </h1>
                    <h3 className="mb-3" style={{ color: "#ca3434" }}>
                      300Rs
                    </h3>
                    <a href="#" className="btn hvr-right my-4 text-capitalize">
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm rotate">
              <div
                className="card text-center mb-3 coffee-card"
                style={{ height: "400px" }}
              >
                <div className="card-header">
                  <h4 className="font-weight-light title-text">Cappuccino</h4>
                </div>
                <div className="card-body">
                  <img src={c} className="img-fluid rounded"></img>
                </div>
                <div className="card-footer">with Chocolate Cookies</div>
                <div className="back">
                  <div className="back-content">
                    <h1 className="text-uppercase font-weight-light">
                      Only for
                    </h1>
                    <h3 className="mb-3" style={{ color: "#ca3434" }}>
                      350Rs
                    </h3>
                    <a href="#" className="btn hvr-right my-4 text-capitalize">
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
