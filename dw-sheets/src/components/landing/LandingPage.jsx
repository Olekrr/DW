import React from 'react';
import './LandingPage.css'; // Optional: Add a CSS file for styling
import moltenCoreImg from "../../assets/moltencore.jpg";
import blackwingLairImg from "../../assets/blackwinglair.jpg";
import ahnQirajImg from "../../assets/ahnqiraj.webp";
import naxxramasImg from "../../assets/naxxramas.jpg";
import deathwishImg from "../../assets/deathwish.jpg";

const LandingPage = () => {
  const raids = [
    { name: 'Molten Core', image: moltenCoreImg },
    { name: 'Blackwing Lair', image: blackwingLairImg },
    { name: 'Ahn\'Qiraj', image: ahnQirajImg },
    { name: 'Naxxramas', image: naxxramasImg },
  ];

  return (
    <div className="landing-page">
      <h1 className="header">
        <img src={deathwishImg} alt="Deathwish" className="header-logo" />
        Deathwish Raid Assignment Tool
        <img src={deathwishImg} alt="Deathwish" className="header-logo" />
      </h1>
      <div className="raid-cards">
        {raids.map((raid) => (
          <div className="card" key={raid.name}>
            <img src={raid.image} alt={raid.name} className="card-image" />
            <div className="card-content">
              <h2>{raid.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
