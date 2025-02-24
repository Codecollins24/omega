import React, { useContext } from "react";
import Button from "../button/button";
import "./Admission.css";
import { StoreContext } from "../../StoreContext/StoreContext";

const Admission = () => {
  const { handleApply } = useContext(StoreContext);
  return (
    <section className="admission">
      <div className="admission-left">
        <h3 className="mini-title">APPLICATIONS ARE OPEN FOR ALL</h3>
        <h1 className="main-title">Apply for Admission</h1>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          pariatur magnam deleniti, provident impedit ipsam mollitia eos quo,
          sequi quae exercitationem blanditiis expedita repellendus dolorum sit
          velit quas alias qui?
        </p>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          accusantium, modi quas ex dolore eius voluptas at repellendus atque.
        </p>
        <Button name="Apply Now" buttonLink={handleApply} />
      </div>
      <div className="admission-right">
        <div className="img-container">
          <img src="/people-2562626_640.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Admission;
