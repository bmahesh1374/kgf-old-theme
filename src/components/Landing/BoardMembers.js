import React from "react";
import "../Styles/BoardMembers.css"
import "bootstrap/dist/css/bootstrap.min.css"
import facebook from "../Assets/facebook-icon.png"
import linkedin from "../Assets/linkedin-icon.png"
import twitter from "../Assets/x-icon.png"
import kgf from "../Assets/kgf-fav.png"
import jetti_kusum from "../Assets/jetti_kusum.png"

const boardMembers = [
  {
    name: "Jetti Kusum Kumar",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: jetti_kusum,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Maganti Murali Mohan",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: jetti_kusum,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "KISHORE BABU",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: jetti_kusum,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "LOKESH KUMAR",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: jetti_kusum,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

function BoardMembers() {
  return (
    <>
      
      <div className="board-section" id="board-members">
        <div className="board-sub-section">
          
        <h4 className="board-title ms-3">OUR BOARD MEMBERS</h4>
        <img src={kgf} alt="kgf logo" />
        
        <div className="row justify-content-center g-4 px-2">
          {boardMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6">
               
              <div className="card board-card d-flex flex-row align-items-center h-100">
                <div className="board-icons">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="board-image me-3"
                />

                <div className="board-content">
                  <h5 className="board-name mb-1">{member.name}</h5>
                  <p className="board-title1 mb-1">{member.title1}</p>
                  <p className="board-title2">{member.title2}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default BoardMembers;
