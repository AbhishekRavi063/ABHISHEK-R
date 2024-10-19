import React from 'react';
import './Projects.css';
import netflix from '../../Assets/Netflix.png';
import github from '../../Assets/github-logo.png';
import fitclub from "../../Assets/Fitclub.png"
import qwipboard from '../../Assets/qwipboard.png'
import nextportfolio from '../../Assets/next-portfolio.png'
import knowlumi from '../../Assets/knowlumi.png'
import plante from '../../Assets/PLANTE.png'
import domus from '../../Assets/DOMUS.png'




const cardData = [
  {
    image: netflix,
    title: "NETFLIX UI CLONE",
    description: "Netflix UI clone using TMDB movies API",
    technology: "REACT.JS",
    linkText: "Visit website",
    linkUrl: "https://netflix-8xu3.onrender.com",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: fitclub,
    title: "fitclub",
    description: "fitclub",
    technology: "REACT.JS",
    linkText: "Visit website",
    linkUrl: "https://abhishek-fitclub.onrender.com",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: qwipboard,
    title: "Qwipboard",
    description: "AI powered Clipboard",
    technology: "REACT.JS, python, AWS",
    linkText: "Visit website",
    linkUrl: "https://qwipboard.vercel.app/",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: nextportfolio,
    title: "NEXT PORTFOLIO",
    description: "A PORTFOLIO CREATED WITH NEXT.JS",
    technology: "NEXT.JS",
    linkText: "Visit website",
    linkUrl: "https://github.com/AbhishekRavi063/next.js--portfolio",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: knowlumi,
    title: "KNOWLUMI",
    description: "KNOWLUMI A FULL STACK EDU-TECH APP",
    technology: "REACT.JS, NODE.JS",
    linkText: "Visit website",
    linkUrl: "https://knowlumi.vercel.app/",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: plante,
    title: "PLANTE",
    description: "WEB APP FOR SELLING AND BUYING PLANTS",
    technology: "REACT.JS, NODE.JS",
    linkText: "Visit website",
    linkUrl: "https://github.com/AbhishekRavi063/plante",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: domus,
    title: "DOMUS",
    description: "WEB APP FOR SMART HOME AUTOMATION",
    technology: "REACT.JS",
    linkText: "Visit website",
    linkUrl: "https://github.com/AbhishekRavi063/DOMUS",
    creatorImage: github,
    creatorName: "MINE",
  }
];

const NftCard = () => {
  return (
    <div className="mainn">

 
      <h1 className='ph'>Projects</h1>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="nft">
            <a href={card.linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="main">
              <img
                className="tokenImage"
                src={card.image}
                alt="NFT"
              />
              <h2 className='ct1'>{card.title}</h2>
              <p className="description">{card.description}</p>
              <div className="tokenInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{card.technology}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  
                    {card.linkText}
                  
                </div>
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src={card.creatorImage}
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Creation of</ins> {card.creatorName}
                </p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftCard;
