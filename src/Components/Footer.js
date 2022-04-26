import React from "react";
// Assets
import smileLogo from "../Assets/Logos/smileLogo_blanc.png";

export default function Footer() {
  return (
    <div id="Footer" className="grid">
      {/*  #1ST */}
      <div className="column">
        <div className="logoContainer">
          <img src={smileLogo} alt="smile and pay" className="img-fluid" />
        </div>
      </div>
      {/* 2ND */}
      <div className="column">
        <h4> À propos</h4>
        <p>Blog</p>
        <p>Travailler chez Smile&Pay</p>
        <p>Programme d'affiliation</p>
        <p>Nous sommes à Paris !</p>

        <div className="RS"></div>
      </div>
      {/* 3RD */}
      <div className="column">
        <h4> Terminaux de paiement</h4>
        <p>Mini Smile</p>
        <p>Maxi Smile</p>
        <p>Super Smile</p>
        <h4>Produit</h4>
        <p>Click&Collect</p>
        <p>Boutique en ligne</p>
        <p>Paiement à distance</p>
      </div>
      {/* 4TH */}
      <div className="column">
        <h4> Aide & Contact</h4>
        <p>Nous contacter !</p>
        <p>Qui sommes-nous</p>
        <p>Aide en ligne</p>
        <h4>Legal</h4>
        <p>CGU</p>
        <p>CGV</p>
        <p>Mentions Légales</p>
      </div>
    </div>
  );
}
