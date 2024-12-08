import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const VisaCard = ({ singleVisa }) => {
  const {
    countryName,
    countryImage,
    visaType,
    validity,
    processingTime,
    description,
    ageRestriction,
    fee,
    applicationMethod,
    email,
    _id
  } = singleVisa;
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100  shadow-xl">
      {/* Image Section */}
      <figure className="px-10 pt-10">
        <img
          src={countryImage}
          alt={`${countryName} Flag`}
          className="rounded-xl w-full h-32 object-cover"
        />
      </figure>

      {/* Card Body Section */}
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-bold">{countryName}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {visaType} Visa - {validity}
        </p>
        <p className="text-sm">{description}</p>

        {/* Details Section */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-bold">Processing Time:</span> {processingTime}
          </p>
          <p>
            <span className="font-bold">Age Restriction:</span>{""}
            {ageRestriction}+
          </p>
          <p>
            <span className="font-bold">Fee:</span> ${fee}
          </p>
          <p>
            <span className="font-bold">Application Method:</span>{" "}
            {applicationMethod}
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a href={`mailto:${email}`} className="text-blue-500 underline">
              {email}
            </a>
          </p>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
        <NavLink to={`/details/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </NavLink>
          {/* `https://visa-server-smoky.vercel.app/addVisa${singleVisa._id}`  onClick={() => navigate()}*/}
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
