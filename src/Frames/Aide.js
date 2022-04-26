import React from "react";
// Component
import Button from "../Components/Button";
// Asset
import illustration from "../Assets/Images/personnage-besoin-aide.svg";

export default function Aide() {
  return (
    <div id="Aide" className="flex-column align-center relative">
      <h1>Besoin d'aide ?</h1>
      <p>
        Nous sommes disponibles pour vous aider dans le choix de votre terminal
        de paiement ou de vos services ainsi que pour vous accompagner au
        quotidien. Notre équipe vous répond du lundi au vendredi de 9h00 à
        20h00.
      </p>
      <div className="buttons flex">
        <Button color="#162761" bgColor="#FFFFFF" border padding="15px 30px">
          06 83 81 82 95
        </Button>
        <Button color="#FFFFFF" bgColor="#162761" padding="15px 30px">
          NOUS CONTACTER
        </Button>
      </div>
      <div className="illustration absolute">
        <img src={illustration} alt="guy on the phone" className="img-fluid" />
      </div>
    </div>
  );
}
