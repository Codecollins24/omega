import React, { useContext } from "react";
import "./Courses.css";
import Card from "../../Components/Card/Card";
import { StoreContext } from "../../StoreContext/StoreContext";

const Courses = () => {
  const { handleApply } = useContext(StoreContext);
  return (
    <div className="courses">
      <div className="courses-title">
        <h1>COURSES</h1>
      </div>
      <div className="courses-container">
        <div className="choose-level">
          <a href="#undergraduate">Undergraduate</a>
          <a href="#postgraduate">Postgraduate</a>
          <a href="#phd">PhD</a>
        </div>
        <div className="program-content-container">
          <div id="undergraduate" className="program-type">
            <h3 className="program">Undergraduate</h3>
            <div className="home-card-group">
              <Card
                imgSrc="/computerscience1.jpg"
                title="Computer Science"
                price="$2000"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/medicine-1.jpg"
                title="Medicine & Surgery"
                price="$3500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/ict1.jpg"
                title="Infomation Technology"
                price="$900"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Public Health"
                price="$2500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Computer Animation"
                price="$1030"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Business Administration"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Midwifry"
                price="$1200"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Eduaction in Arts"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
            </div>
          </div>
          <div id="postgraduate" className="program-type">
            <h3 className="program">Postgraduate</h3>
            <div className="home-card-group">
              <Card
                imgSrc="/computerscience.png"
                title="Computer Science"
                price="$2000"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/medicine.png"
                title="Medicine & Surgery"
                price="$3500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/ict.png"
                title="Infomation Technology"
                price="$900"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Public Health"
                price="$2500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Computer Animation"
                price="$1030"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Business Administration"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Midwifry"
                price="$1200"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Eduaction in Arts"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
            </div>
          </div>
          <div id="phd" className="program-type">
            <h3 className="program">PhD</h3>
            <div className="home-card-group">
              <Card
                imgSrc="/computerscience.png"
                title="Computer Science"
                price="$2000"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/medicine.png"
                title="Medicine & Surgery"
                price="$3500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/ict.png"
                title="Infomation Technology"
                price="$900"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Public Health"
                price="$2500"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Computer Animation"
                price="$1030"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Business Administration"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Midwifry"
                price="$1200"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
              <Card
                imgSrc="/computerscience.png"
                title="Eduaction in Arts"
                price="$800"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
                cardLinkName="APPLY NOW"
                cardLink={handleApply}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
