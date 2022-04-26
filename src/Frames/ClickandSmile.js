import React from "react";
// Component
import Button from "../Components/Button";
// Asset
import mockups from "../Assets/Images/Ordi_tablette_appli_SP-1.png";

export default function ClickandSmile() {
  return (
    <div id="ClickandSmile" className="grid">
      <div className="text flex-column justify-center align-center">
        <div className="relative title">
          <h1>CLICK&SMILE</h1>
          <div className="absolute subtitle">
            <p className="text-center">Nouveau !</p>
          </div>
        </div>
        <p>
          Créez votre <span>boutique en ligne</span> et acceptez les paiements
          sur internet au même prix que vos encaissements traditionnels. <br />
          <br />
          Trouvez plus de clients et augmentez vos ventes grâce au{" "}
          <span>Click&Collect!</span>
        </p>
        <div>
          <Button bgColor="#162761" padding="20px 50px">
            EN SAVOIR PLUS
          </Button>
        </div>
      </div>
      <div className="illustrations">
        <img
          src={mockups}
          alt="mockups of the application on tablet, smartphone and laptop"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
