import React from "react";
// Component
import Advantage from "../Components/Advantage";
// Assets
import liberte from "../Assets/Icons/liberte.svg";
import securite from "../Assets/Icons/securite.svg";
import simplicite from "../Assets/Icons/simplicite.svg";

export default function Advantages() {
  return (
    <div id="Advantages" className="grid">
      <Advantage>
        <div className="advIcon">
          <img src={simplicite} className="img-fluid" alt="simplicité" />
        </div>
        <h4>Simple</h4>
        <p className="text-center">
          Aucune démarche à réaliser auprès de votre banque. Créez votre compte{" "}
          <span>en 5-10 minutes 100% en ligne. Recevez </span> votre terminal de
          paiement en <span>24h à 72h. Prêt à l'emploi immédiatement !</span>
        </p>
      </Advantage>
      <Advantage>
        <div className="advIcon">
          <img src={securite} className="img-fluid" alt="sécurité" />
        </div>
        <h4>Sécurisé</h4>
        <p className="text-center">
          Nos terminaux sont{" "}
          <span> agréés par le Groupement Cartes Bancaires (CB)</span>, la plus
          haute certification en matière de{" "}
          <span>
            sécurité. Elle garantit le paiement dès lors qu'une carte est
            insérée
          </span>{" "}
          dans votre TPE !
        </p>
      </Advantage>
      <Advantage>
        <div className="advIcon">
          <img src={liberte} className="img-fluid" alt="liberté" />
        </div>
        <h4>Sans engagement</h4>
        <p className="text-center">
          Vous êtes libre comme l'air,{" "}
          <span> aucune obligation de durée ni de frais caché.</span> Optimisez
          vos coûts en changeant de forfait quand vous le voulez.{" "}
          <span> C'est vous qui décidez !</span>
        </p>
      </Advantage>
    </div>
  );
}
