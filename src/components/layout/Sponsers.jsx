import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Nike",
    url: "https://seekvectors.com/storage/images/nike-logo-06.svg",
  },
  {
    name: "Fitbit",
    url: "https://imgs.search.brave.com/BHGUlvQnPj-vdk59HCEUFKq7GGMQo5B77NVfYzvqhvo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvRml0Yml0LUxv/Z28tMjAwNy0yMDE2/LTcwMHgzOTQucG5n",
  },
  {
    name: "WHOOP",
    url: "https://imgs.search.brave.com/IrMkW8q5DSNVhhUvxpvHWU6uORtwy11YzGKz76mnNfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjI3M2IyZTFiNGJm/MzNiODQ1YTUyZjUu/cG5n",
  },
  {
    name: "MuscleBlaze",
    url: "https://imgs.search.brave.com/g13cS4BthWBxl2FB0ErQXwBdUWRXMLKc_PCDLffYzms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/a2luZGxpZmUuaW4v/aW1hZ2VzL2ZlYXR1/cmVfdmFyaWFudC8x/NDgvbWJfbG9nb19i/bGFja19fMl8ucG5n/P3Q9MTcwNDg2NTU2/NQ",
  },
  {
    name: "GNC",
    url: "https://imgs.search.brave.com/77R2O6_EyhmE4x0a8PnDInZ1OZrP1nmj7rpEsG7hyZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Z25jLnN2Zw",
  },
  {
    name: "Cult.Fit",
    url: "https://imgs.search.brave.com/jFWHNRTocvfZ4gU1Uf4_CBFLOARsR_Kx9YNiwXqYftk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMC9j/dWx0LWZpdC1sb2dv/LWZyZWVsb2dvdmVj/dG9ycy5uZXRfLTQw/MHgzODcucG5n",
  },
  {
    name: "1mg",
    url: "https://cdn.brandfetch.io/idCCxXrcyY/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1751021250694",
  },
  {
    name: "HealthKart",
    url: "https://imgs.search.brave.com/8PQqqpGvdIQORWk36hbVWo0xVlJWe16E6KLdQsLm0u8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFwdGlrLmFpL2hz/LWZzL2h1YmZzL0hl/YWx0aEthcnRfbG9n/b18yMDAyMjMud2Vi/cD93aWR0aD02OTAm/aGVpZ2h0PTIzNCZu/YW1lPUhlYWx0aEth/cnRfbG9nb18yMDAy/MjMud2VicA",
  },
  {
    name: "Decathlon",
    url: "https://imgs.search.brave.com/-xHAXg8pWkAvnwlPOirl3K__tW9d33VjCUBUmmf_M-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDEvRGVjYXRobG9u/LUxvZ28tNTAweDI4/MS5wbmc",
  },
  {
    name: "Adidas",
    url: "https://seekvectors.com/storage/images/addidas-logo.svg",
  },
];

export default function SponsorsSection() {
  return (
    <div className="bg-black py-16 overflow-hidden relative">
      <h2 className="text-center text-3xl font-bold text-neutral-300 mb-10">
        Our Sponsors
      </h2>

      <div className="relative w-full overflow-x-hidden">
        {/* Left blur shadow */}
        <div className="absolute top-0 left-0 h-full w-40 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-black via-black/80 to-transparent backdrop-blur-sm" />
          <div className="absolute inset-0 shadow-[inset_-20px_0_40px_rgba(0,0,0,0.8)]" />
        </div>
        
        {/* Right blur shadow */}
        <div className="absolute top-0 right-0 h-full w-40 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-l from-black via-black/80 to-transparent backdrop-blur-sm" />
          <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(0,0,0,0.8)]" />
        </div>

        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-21%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.url}
              alt={sponsor.name}
              className="h-16 w-auto opacity-80 hover:opacity-100 transition duration-300 brightness-0 invert filter drop-shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}