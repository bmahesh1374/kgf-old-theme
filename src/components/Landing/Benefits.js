import React from "react";
import "../Styles/Benefits.css";
import benefit from "../Assets/benefits.png";

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div className="benefits-scroll-wrapper">
          <img className="benefits-img" src={benefit} alt="img" />
          <h3 className="benefits-title">Benefits</h3>
        </div>
      </div>

      <div className="benefits-grid">
        <div className="benefits-col">
          <p>Hospital Bill Discount</p>
          <p>College Fee Discount</p>
          <p>Job Referral</p>
          <p>Career Counselling</p>
          <p>Abroad Education &amp; Job Referral</p>
          <p>Community Club Membership</p>
        </div>

        <div className="benefits-col">
          <p>Free Event Pass</p>
          <p>Community Club Membership</p>
          <p>KGF Free Event Pass</p>
          <p>Blood Donors</p>
          <p>Discount on Agriculture Needs</p>
          <p>Housing Support</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
