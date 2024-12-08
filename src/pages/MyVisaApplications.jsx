
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const MyVisaApplications = () => {
  const loadedVisaData = useLoaderData(); 
  const [myVisa, setMyVisa] = useState(loadedVisaData);
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = () => {
    const filteredVisa = loadedVisaData.filter((visa) =>
      visa.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMyVisa(filteredVisa);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-server-smoky.vercel.app/myVisa/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setMyVisa(myVisa.filter((visa) => visa._id !== id));
            }
          });
      }
    });
  
  };

  return (
    <div className="p-6">
    
      <h1 className="text-2xl font-bold mb-4 text-center">
        <Typewriter
          words={["My Visa Applications", `(${myVisa.length}) Applications Found`]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

   
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myVisa.map((visa) => (
          <Fade key={visa._id} cascade damping={0.1}>
            <div className="card bg-base-100 shadow-lg">
              <figure>
                <img
                  src={visa.countryImage}
                  alt={`${visa.countryName} Flag`}
                  className="w-full h-32 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{visa.countryName}</h2>
                <p>
                  <span className="font-bold">Visa Type:</span> {visa.visaType}
                </p>
                <p>
                  <span className="font-bold">Processing Time:</span>{" "}
                  {visa.processingTime}
                </p>
                <p>
                  <span className="font-bold">Fee:</span> ${visa.fee}
                </p>
                <p>
                  <span className="font-bold">Validity:</span> {visa.validity}
                </p>
                <p>
                  <span className="font-bold">Application Method:</span>{" "}
                  {visa.applicationMethod}
                </p>
                <p>
                  <span className="font-bold">Applied Date:</span>{" "}
                  {visa.appliedDate}
                </p>
                <p>
                  <span className="font-bold">Applicant Name:</span>{" "}
                  {visa.firstName} {visa.lastName}
                </p>
                <p>
                  <span className="font-bold">Applicant Email:</span>{" "}
                  <a
                    href={`mailto:${visa.email}`}
                    className="text-blue-500 underline"
                  >
                    {visa.email}
                  </a>
                </p>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(visa._id)}
                  >
                   cancel
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
