import React, { useEffect, useRef } from "react";
// Gsap
import gsap from "gsap";
import { Draggable } from "gsap/all";
// Component
import Review from "../Components/Review";
// Assets
import profilePic1 from "../Assets/Images/profilePic1.png";
import profilePic2 from "../Assets/Images/profilePic2.jpg";
import profilePic3 from "../Assets/Images/profilePic3.jpg";

const customerData = [
  {
    id: 1,
    msg: "Une startup française fiable avec une équipe réactive qui répond parfaitement à toutes mes questions. En trois ans, pas un seul incident de versement. De vrais pros comme on aimerait en avoir plus souvent.",
    pp: profilePic1,
    name: "Gregory Renaux",
    job: "Thérapeute",
    location: "Paris",
  },
  {
    id: 2,
    msg: "Fonctionne bien, ainsi qu'avec les cartes titre-restau CONECS. En cas de problème, une réponse et une solution très rapide. C'est une société française !!",
    pp: profilePic2,
    name: "Joseph Asaro",
    job: "Gérant Pizzeria",
    location: "Lannion",
  },
  {
    id: 3,
    msg: "Solution de paiement par CB simple et fiable. J'utilise le Pocket Smile, celui-ci est bien apprécié par nos clients. Très bon service commercial.",
    pp: profilePic3,
    name: "Marc Borlotti",
    job: "Fromager",
    location: "Marseille",
  },
];

export default function Reviews() {
  const reviewsRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(reviewsRef.current, {
      type: "x",
      bounds: {
        minX: -reviewsRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0,
      },
    });
  }, []);

  return (
    <div id="Reviews" className="relative">
      <h1 className="text-center">+ DE 15 000 CLIENTS À NOS CÔTÉS</h1>
      <div
        className="reviewsContainer flex"
        ref={reviewsRef}
        style={{ width: customerData.length * 60 + "vw" }}
      >
        {customerData.map((customer, idx) => (
          <Review
            reviewsRef={reviewsRef}
            id={idx}
            key={customer.id}
            msg={customer.msg}
            pp={customer.pp}
            name={customer.name}
            job={customer.job}
            location={customer.location}
          />
        ))}
      </div>
    </div>
  );
}
