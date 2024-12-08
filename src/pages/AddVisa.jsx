
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
  const { user } = useContext(AuthContext); 

  const handleaddVisa = (e) => {
    e.preventDefault();
    const countryImage = e.target.countryImage.value;
    const countryName = e.target.countryName.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.processingTime.value;
    const description = e.target.description.value;
    const ageRestriction = e.target.ageRestriction.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.applicationMethod.value;
    const email = user.email;

    const visaData = {
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
    };

    console.log(visaData);
    
    fetch('https://visa-server-smoky.vercel.app/addVisa',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(visaData)
    }) 
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Congratulation Visa Added Successfully",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
    })

  
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Add Visa</h2>
        <form onSubmit={handleaddVisa} className="space-y-4">
          <div className="flex w-full gap-5">
            <div className="flex-1">
             
              <label htmlFor="countryFlag" className="block font-bold mb-2">Country Flag</label>
<select
  id="countryFlag"
  name="countryImage"
  className="w-full p-2 border rounded"
  required
>
  <option value="" disabled selected>Select a country flag</option>
  <option value="https://flagcdn.com/us.svg">🇺🇸 United States</option>
  <option value="https://flagcdn.com/gb.svg">🇬🇧 United Kingdom</option>
  <option value="https://flagcdn.com/fr.svg">🇫🇷 France</option>
  <option value="https://flagcdn.com/de.svg">🇩🇪 Germany</option>
  <option value="https://flagcdn.com/in.svg">🇮🇳 India</option>
  <option value="https://flagcdn.com/jp.svg">🇯🇵 Japan</option>
</select>

            </div>
            <div className="flex-1">
              <label className="block font-bold mb-2">Country Name</label>
              <input
                type="text"
                name="countryName"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <label className="block font-bold mb-2">Visa Type</label>
              <select
                name="visaType"
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select a type</option>
                <option value="Tourist visa">Tourist Visa</option>
                <option value="Student visa">Student Visa</option>
                <option value="Official visa">Official Visa</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-2">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2">Required Documents</label>
            <div>
              <label>
                <input type="checkbox" /> Valid Passport
              </label>
              <label>
                <input type="checkbox" /> Visa Application Form
              </label>
              <label>
                <input type="checkbox" /> Recent Passport-Sized Photograph
              </label>
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2">Description</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <label className="block font-bold mb-2">Age Restriction</label>
              <input
                type="number"
                name="ageRestriction"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-2">Fee</label>
              <input
                type="number"
                name="fee"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <label className="block font-bold mb-2">Validity</label>
              <input
                type="text"
                name="validity"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-2">Application Method</label>
              <input
                type="text"
                name="applicationMethod"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="text-center pt-5">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
