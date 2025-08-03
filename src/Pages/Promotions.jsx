import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Promotions() {
        const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
  return (
    <div>Promotions</div>
  )
}

export default Promotions