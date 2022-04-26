import React from "react";
// Components
import Button from "../Components/Button";
// Assets
import cartefr from "../Assets/Logos/logocartefrancaise.svg";
import wechat from "../Assets/Logos/logoscartes_wechatpay.svg";
import ali from "../Assets/Logos/logoscartes_ali_pay.svg";
import amex from "../Assets/Logos/logoscartesamex.svg";
import apple from "../Assets/Logos/logoscartesapplepay.svg";
import bnp from "../Assets/Logos/logoscartesbnp.svg";
import connec from "../Assets/Logos/logoscartesconnecs.svg";
import contactLess from "../Assets/Logos/logoscartescontactless.svg";
import maestro from "../Assets/Logos/logoscartesmaestro.svg";
import mastercard from "../Assets/Logos/logoscartesmastercard.svg";
import paylib from "../Assets/Logos/logoscartespaylib.svg";
import samsung from "../Assets/Logos/logoscartessamsungpay.svg";
import visa from "../Assets/Logos/logoscartesvisa.svg";
import vpay from "../Assets/Logos/logoscartesvpay.svg";
import gpay from "../Assets/Logos/logoscartesgpay.svg";

export default function PartnersBanner() {
  const partnerLogos = [
    visa,
    vpay,
    mastercard,
    maestro,
    amex,
    bnp,
    contactLess,
    connec,
    cartefr,
    paylib,
    apple,
    gpay,
    samsung,
    ali,
    wechat,
  ];

  return (
    <div id="PartnersBanner" className="flex-column align-center">
      <h4 className="text-center">
        +Tarifs flexibles à partir de <span> 0,65%</span>
      </h4>
      <div className="button">
        <Button bgColor="#162761" padding="15px 30px">
          VOIR NOS TARIFS
        </Button>
      </div>
      <div className="partners flex justify-between align-center">
        {partnerLogos.map((logo, idx) => (
          <div className="partner" key={idx}>
            <img src={logo} className="img-fluid" alt="sponsor" />
          </div>
        ))}
      </div>
    </div>
  );
}
