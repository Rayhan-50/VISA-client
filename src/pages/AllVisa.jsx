

import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Allvisa = () => {
  const contextValue = useContext(AuthContext);
  const allVisas = useLoaderData();

  const [selectedVisaType, setSelectedVisaType] = useState("All");

  const visaTypes = ["All", ...new Set(allVisas.map((visa) => visa.visaType))];

  const filteredVisas =
    selectedVisaType === "All"
      ? allVisas
      : allVisas.filter((visa) => visa.visaType === selectedVisaType);

  return (
    <div className="p-6">
   
      <h1 className="text-2xl font-bold text-center mb-6">
        <Typewriter
          words={["All Visas", `(${filteredVisas.length}) Visas Available`]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* Visa Type Filter */}
      <div className="flex justify-center mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedVisaType}
          onChange={(e) => setSelectedVisaType(e.target.value)}
        >
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Visa Cards Grid with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVisas.map((singleVisa) => (
          <Fade key={singleVisa._id} cascade damping={0.1}>
            <VisaCard singleVisa={singleVisa}></VisaCard>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Allvisa;
