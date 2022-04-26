import React, { useEffect, useRef } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utilitaries
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
// Component
import Button from "./Button";
// Assets
import logoSmile from "../Assets/Logos/smileLogo-bleu-blanc.svg";
import sortingIcon from "../Assets/Icons/caret-down.png";

export default function Navbar() {
  const navbarRef = useRef();
  const { width } = useWindowSize();
  const mobileFormat = width < 772;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Herobanner",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(navbarRef.current, {
      backgroundColor: "#FFFFFF",
      duration: 0.3,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div
      id="Navbar"
      className="fixed flex justify-between align-center"
      ref={navbarRef}
    >
      {mobileFormat && (
        <div className="burger">
          <div className="burgerStage"></div>
          <div className="burgerStage"></div>
          <div className="burgerStage"></div>
        </div>
      )}
      <div className="logoSmile">
        <img src={logoSmile} alt="Smile logo" className="img-fluid" />
      </div>
      {!mobileFormat && (
        <>
          <ul className="flex navLinks justify-between">
            <li>
              TERMINAUX DE PAIEMENT
              <span>
                <img src={sortingIcon} className="img-fluid" />
              </span>
            </li>
            <li>
              SERVICES
              <span>
                <img src={sortingIcon} className="img-fluid" />
              </span>
            </li>
            <li>TARIFS</li>
            <li>QUI SOMMES-NOUS</li>
            <li>AIDE</li>
          </ul>
          <ul className="identifiers flex align-center">
            <li className="inscrire">
              <Button padding="5px 30px"> S'INSCRIRE </Button>
            </li>
            <li className="connecter">Se connecter</li>
          </ul>
        </>
      )}
    </div>
  );
}
