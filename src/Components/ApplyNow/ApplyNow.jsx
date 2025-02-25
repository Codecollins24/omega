import React, { useState } from "react";
import "./ApplyNow.css";
import UpLoadPhoto from "./UpLoadPhoto";
const ApplyNow = () => {
  const [inputs, setInput] = useState({});
  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Application Sent Successfully");
  };
  return (
    <>
      <div className="applynow-header">
        <h3>ONLINE APPLICATION</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        </p>
      </div>
      <div className="applynow-container">
        <div className="applynow-links">
          <h3>Apply Online</h3>
          <div>
            <a href="#uploadPhoto">Upload a Photo</a>
            <a href="#basicInformation">Basic Information</a>
            <a href="#bioData">Bio Data</a>
            <a href="#education">Education</a>
            <a href="#documents">Documents</a>
          </div>
        </div>
        <form action="" className="apply-form" onSubmit={handleSubmit}>
          <div id="uploadPhoto">
            <UpLoadPhoto />
          </div>
          <p className="required">
            All fields marked with an asterick(*) are required!
          </p>
          <div className="input-fields">
            <h3 className="category-title" id="basicInformation">
              Basic Information
            </h3>
            <div>
              <div className="input-fields-con">
                <label className="label">
                  Title*
                  <input
                    type="text"
                    name="title"
                    value={inputs.title}
                    onChange={handleInputs}
                    placeholder="Mr/Mrs/Ms"
                    required
                  />
                </label>
                <label className="label">
                  Surname*
                  <input
                    type="text"
                    name="surname"
                    value={inputs.surname}
                    onChange={handleInputs}
                    placeholder="Last Name"
                    required
                  />
                </label>
                <label className="label">
                  First Name*
                  <input
                    type="text"
                    name="firstname"
                    value={inputs.firstname}
                    onChange={handleInputs}
                    placeholder="First Name"
                    required
                  />
                </label>

                <label className="label">
                  Other Names
                  <input
                    type="text"
                    name="other"
                    value={inputs.other}
                    onChange={handleInputs}
                  />
                </label>
                <label className="label">
                  Gender*
                  <input
                    type="text"
                    name="gender"
                    value={inputs.gender}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Nationality*
                  <input
                    type="text"
                    name="nationality"
                    value={inputs.nationality}
                    onChange={handleInputs}
                    required
                  />
                </label>

                <label className="label">
                  Birth Date*
                  <input
                    type="date"
                    name="date"
                    value={inputs.date}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Phone number*
                  <input
                    type="number"
                    name="telphone"
                    value={inputs.telphone}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Email*
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleInputs}
                    required
                  />
                </label>

                <label className="label">
                  Session(Day / Evening)*
                  <input
                    type="text"
                    name="session"
                    value={inputs.session}
                    onChange={handleInputs}
                    placeholder="Choose either Day or Evening"
                    required
                  />
                </label>
                <label className="label">
                  Intake Month*
                  <input
                    type="month"
                    name="intake"
                    value={inputs.intake}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Sponsor
                  <input
                    type="text"
                    name="sponsor"
                    value={inputs.sponsor}
                    onChange={handleInputs}
                  />
                </label>

                <label className="label">
                  Sponsor Number
                  <input
                    type="number"
                    name="sponsornumber"
                    value={inputs.sponsornumber}
                    onChange={handleInputs}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="input-fields">
            <h3 className="category-title" id="bioData">
              Bio Data
            </h3>
            <div>
              <div className="input-fields-con">
                <label className="label">
                  Religion*
                  <input
                    type="text"
                    name="religion"
                    value={inputs.religion}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Marital Status*
                  <input
                    type="text"
                    name="maritalstatus"
                    value={inputs.maritalstatus}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Spouse Name
                  <input
                    type="text"
                    name="spousename"
                    value={inputs.spousename}
                    onChange={handleInputs}
                  />
                </label>

                <label className="label">
                  Spouse Occupation
                  <input
                    type="text"
                    name="spouseoccupation"
                    value={inputs.spouseoccupation}
                    onChange={handleInputs}
                  />
                </label>
                <label className="label">
                  Disabilities
                  <input
                    type="text"
                    name="disabilities"
                    value={inputs.disabilities}
                    onChange={handleInputs}
                  />
                </label>
                <label className="label">
                  Physical Address*
                  <input
                    type="text"
                    name="physicaladdress"
                    value={inputs.physicaladdress}
                    onChange={handleInputs}
                    required
                  />
                </label>

                <label className="label">
                  Residence Country*
                  <input
                    type="text"
                    name="country"
                    value={inputs.country}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Home District / State*
                  <input
                    type="text"
                    name="district"
                    value={inputs.district}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Occupation
                  <input
                    type="text"
                    name="occupation"
                    value={inputs.occupation}
                    onChange={handleInputs}
                  />
                </label>

                <label className="label">
                  Next of Kin*
                  <input
                    type="text"
                    name="kin"
                    value={inputs.kin}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Kin Relationship*
                  <input
                    type="text"
                    name="kinrelationship"
                    value={inputs.kinrelationship}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  Kin Contact
                  <input
                    type="text"
                    name="kincontact"
                    value={inputs.kincontact}
                    onChange={handleInputs}
                  />
                </label>

                <label className="label">
                  Sponsor Number
                  <input
                    type="number"
                    name="sponsornumber"
                    value={inputs.sponsornumber}
                    onChange={handleInputs}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="input-fields">
            <h3 className="category-title" id="education">
              Education
            </h3>
            <div>
              <div className="input-fields-con">
                <label className="label">
                  O'level Year*
                  <input
                    type="text"
                    name="olevel"
                    value={inputs.olevel}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  O'level School*
                  <input
                    type="text"
                    name="olevelschool"
                    value={inputs.olevelschool}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  O'level Index number*
                  <input
                    type="text"
                    name="olevelindexnumber"
                    value={inputs.olevelindexnumber}
                    onChange={handleInputs}
                    required
                  />
                </label>

                <label className="label">
                  A'level Year*
                  <input
                    type="text"
                    name="alevelyear"
                    value={inputs.alevelyear}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  A'level School*
                  <input
                    type="text"
                    name="alevelschool"
                    value={inputs.alevelschool}
                    onChange={handleInputs}
                    required
                  />
                </label>
                <label className="label">
                  A'level Index number*
                  <input
                    type="text"
                    name="alevelindexnumber"
                    value={inputs.alevelschoolnumber}
                    onChange={handleInputs}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="documents">
            <h3 className="category-title" id="documents">
              Documents
            </h3>
            <div className="documents-con">
              <div>
                <p>Attach any required Documents such as Certificates etc</p>
                <ul>
                  <li>
                    Only documents of type doc, docx, pdf, zip, jpeg, png, jpg
                    and rar are accepted
                  </li>
                  <li>Maximum file size 20mbs</li>
                  <li>Maximum number of files 7 files</li>
                </ul>
              </div>
              <div
                className="img-input-field "
                onClick={() => document.getElementById("filesInput").click()}
              >
                <input type="file" className="hidden-input" id="filesInput" />
                <p>Add Document(s)</p>
                <p>+</p>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit Application" className="submit" />
        </form>
      </div>
    </>
  );
};

export default ApplyNow;
