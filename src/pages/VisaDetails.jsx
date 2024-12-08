
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";




const VisaDetails = () => {
  const { user } = useContext(AuthContext);
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
  } = useLoaderData();

  const [showModal, setShowModal] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0];

  const handleApply = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const applicationData = Object.fromEntries(formData.entries());

    const visaData = {
      ...applicationData,
      appliedDate: new Date().toISOString(),
      fee: `$${fee}`,
      countryName,
      visaType,
      processingTime,
      countryImage,
    };

    fetch("https://visa-server-smoky.vercel.app/myVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Visa application submitted successfully!");
        } else {
          toast.error("Failed to submit the visa application.");
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again later.");
      });

    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="card bg-base-100 shadow-xl max-w-xl w-full">
        <figure className="px-10 pt-10">
          <img
            src={countryImage}
            alt={`${countryName} Flag`}
            className="rounded-xl w-full h-40 object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-2xl font-bold">{countryName} Visa</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mt-4 text-left space-y-2 text-sm">
            <p>
              <span className="font-bold">Visa Type:</span> {visaType}
            </p>
            <p>
              <span className="font-bold">Validity:</span> {validity}
            </p>
            <p>
              <span className="font-bold">Processing Time:</span>{" "}
              {processingTime}
            </p>
            <p>
              <span className="font-bold">Age Restriction:</span>{" "}
              {ageRestriction ? `${ageRestriction}+` : "None"}
            </p>
            <p>
              <span className="font-bold">Fee:</span> ${fee}
            </p>
            <p>
              <span className="font-bold">Application Method:</span>{" "}
              {applicationMethod}
            </p>
            <p>
              <span className="font-bold">Support Email:</span>{" "}
              <a href={`mailto:${email}`} className="text-blue-500 underline">
                {email}
              </a>
            </p>
          </div>

          <div className="card-actions mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              Apply for the Visa
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Apply for the Visa</h3>
            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                  className="input input-bordered w-full"
                />
                <select
                  id="countryFlag"
                  name="countryImage"
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="" disabled selected>
                    Select a country flag
                  </option>
                  <option value="https://flagcdn.com/us.svg">
                    🇺🇸 United States
                  </option>
                  <option value="https://flagcdn.com/gb.svg">
                    🇬🇧 United Kingdom
                  </option>
                  <option value="https://flagcdn.com/fr.svg">🇫🇷 France</option>
                  <option value="https://flagcdn.com/de.svg">🇩🇪 Germany</option>
                  <option value="https://flagcdn.com/in.svg">🇮🇳 India</option>
                  <option value="https://flagcdn.com/jp.svg">🇯🇵 Japan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Applied Date</label>
                <input
                  type="date"
                  name="appliedDate"
                  defaultValue={currentDate}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={`$${fee}`}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
