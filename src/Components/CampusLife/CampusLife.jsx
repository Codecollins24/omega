import React from "react";
import "./CampusLife.css";
const CampusLife = () => {
  return (
    <section className="campus-life section">
      <div className="title">
        <h3 className="mini-title">University Campus</h3>
        <h1 className="main-title">CAMPUS LIFE</h1>
      </div>

      <div className="campus-life-container">
        <div className="container-left">
          <div className="img col-small">
            <img src="/library-1400313_640.jpg" />
            <div className="img-overlay">
              <div>
                <h3>LIBRARY</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore voluptatibus ut repellendus temporibus explicabo
                  consequatur fuga sapiente sit error.
                </p>
              </div>
            </div>
          </div>
          <div className="img col-big">
            <img src="/graduation.jpg" />
            <div className="img-overlay">
              <div>
                <h3>GRADUATION</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore voluptatibus ut repellendus temporibus explicabo
                  consequatur fuga sapiente sit error.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-right">
          <div className="right-1">
            <div className="img col-small">
              <img src="/sports.jpg" />
              <div className="img-overlay">
                <div>
                  <h3>OUTDOORS</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore voluptatibus ut repellendus temporibus explicabo
                    consequatur fuga sapiente sit error.
                  </p>
                </div>
              </div>
            </div>
            <div className="img col-big">
              <img src="/football.jpg" />
              <div className="img-overlay">
                <div>
                  <h3>SPORTS</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore voluptatibus ut repellendus temporibus explicabo
                    consequatur fuga sapiente sit error.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-2">
            <div className="img col-small">
              <img src="/music.jpg" />
              <div className="img-overlay">
                <div>
                  <h3>MUSIC</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore voluptatibus ut repellendus temporibus explicabo
                    consequatur fuga sapiente sit error.
                  </p>
                </div>
              </div>
            </div>
            <div className="img col-big">
              <img src="/event.jpg" />
              <div className="img-overlay">
                <div>
                  <h3>EVENTS</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore voluptatibus ut repellendus temporibus explicabo
                    consequatur fuga sapiente sit error.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
