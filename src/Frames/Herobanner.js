import React from "react";
// Utils
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
// Assets
import herobannerImg from "../Assets/Images/herobannerImg.png";
import icon from "../Assets/Icons/made_in_france.svg";

export default function Herobanner() {
  const { width } = useWindowSize();
  const tabletFormat = width < 992;
  return (
    <div id="Herobanner" className="flex relative justify-end">
      <div className={`HBPicture absolute ${tabletFormat && "none"}`}>
        <img
          src={herobannerImg}
          alt="drawing of shop owners"
          className="img-fluid"
        />
      </div>

      <div className="textHB flex-column justify-end">
        <div className="hbTitle flex-column">
          <div className={tabletFormat ? "HBPicture flex" : "none"}>
            <img
              src={herobannerImg}
              alt="drawing of shop owners"
              className="img-fluid"
            />
          </div>
          <div className="line">
            <h3>LES COMMERÇANTS</h3>
          </div>
          <div className="line">
            <h3>RETROUVENT</h3>
          </div>
          <div className="line">
            <h3>LE SMILE</h3>
          </div>
        </div>
        <p>
          La solution française qui facilite l’encaissement des cartes
          bancaires. Simple, sécurisé, sans engagement : votre terminal de
          paiement vous attend !
        </p>
        <p>
          COVID19 : Proposez la commande à distance et la livraison à emporter
          grâce à notre fonctionnalité Vente à Distance sans aucun frais
          supplémentaire.
        </p>
      </div>

      <div className="startupIcon flex-column justify-center align-center">
        <div className="iconContainer">
          <img src={icon} alt="startup française" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
