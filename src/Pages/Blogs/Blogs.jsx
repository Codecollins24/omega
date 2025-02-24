import React, { useContext } from "react";
import "./Blogs.css";
import Card from "../../Components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../StoreContext/StoreContext";

const Blogs = () => {
  const { handleNavigate } = useContext(StoreContext);
  return (
    <div className="blogs">
      <div className="blogs-title">
        <h1>BLOGS</h1>
      </div>
      <div className="blogs-section">
        <div className="blogs-left">
          <h3 className="latest-news-title">Trending News</h3>
          <div className="blogs-latest">
            <div className="latest-container">
              <div className="latest-img">
                <img src="/about-header.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Lauching New library</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Jan 23,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="football.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>University Football Finals</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Feb 23,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="/cta-2.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Orientation of Freshers</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Jan 27,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="/hero3.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Unveiling new classrooms</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Nov 2,
                  2024
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="/about-header.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Lauching New library</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Jan 23,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="football.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>University Football Finals</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Feb 23,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="/cta-2.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Orientation of Freshers</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Jan 27,
                  2025
                </p>
              </div>
            </div>
            <div className="latest-container">
              <div className="latest-img">
                <img src="/hero3.jpg" alt="" />
              </div>
              <div className="latest-text">
                <h3>Unveiling new classrooms</h3>
                <p>
                  <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Nov 2,
                  2024
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-right">
          <h3 className="general-news-title">General News</h3>
          <div className="blogs-right-container">
            <Card
              imgSrc="/css_conference.jpg"
              title="Css Conference"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Jan 21, 2025"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/cultural_event.jpg"
              title="Cultural Event"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Dec 3, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
            <Card
              imgSrc="/graduation.jpg"
              title="Graduation"
              dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
              dateText="Nov 23, 2024"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
              cardLinkName="READ MORE"
              cardLink={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
