import React from "react";
// Assets
import bulleQuestion from "../Assets/Icons/bulle_question.svg";
import bulleReponse from "../Assets/Icons/bulle_reponse.svg";

export default function Questions() {
  return (
    <div id="Questions" className="">
      <div className="relative title">
        <h1 className="text-center">VOUS ÊTES SCEPTIQUES</h1>
        <div className="absolute subtitle">
          <p className="text-center">Plus pour longtemps !</p>
        </div>
      </div>
      <div className="question flex justify-between align-center relative">
        Qui peut devenir client SMILE&PAY ?
        <div className="bulleQuestion absolute">
          <img
            src={bulleQuestion}
            alt="queue de la bulle"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="answer flex justify-end relative">
        <div className="">
          Vous !
          <br />
          <br /> Vous êtes le bienvenu, quel que soit votre statut, votre
          chiffre d'affaires ou votre compte bancaire ! Nous acceptons tous les
          professionnels (entrepreneurs individuels, sociétés, commerçants,
          agriculteurs, ...), munis d'un numéro de SIRET et d'un compte bancaire
          (domicilié en France), ainsi que les Associations et Comités
          d'Entreprise avec SIRET (le numéro SIRET est obligatoire même pour les
          associations et CE). <br />
          <br /> Enseignes, franchises ? Contactez-nous, nous avons une offre
          personnalisée également pour vous ! <br />
          <br /> L’important : vous offrir une liberté qui vous redonnera le
          sourire 😊
          <div className="bulleReponse absolute ">
            <img
              src={bulleReponse}
              alt="queue de la bulle"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
