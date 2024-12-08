
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const MyAddVisa = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-server-smoky.vercel.app/addVisa/${user?.email}`)
        .then((res) => res.json())
        
        .then((data) =>
          {setVisas(data) 
            console.log(data)
          } )
        
      

        .catch((err) => console.error("Error fetching visas:", err));
    }
  }, [user?.email]);
console.log(visas)
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-server-smoky.vercel.app/addVisa/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your visa has been deleted.", "success");
              setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== id));
            } else {
              Swal.fire("Error", data.message || "Failed to delete the visa.", "error");
            }
          })
          .catch((err) => {
            console.error("Error deleting visa:", err);
            Swal.fire("Error", "Failed to delete the visa. Try again later.", "error");
          });
      }
    });
  };
  

  
  const handleUpdate = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedVisa = {
      country: e.target.country.value,
      visa_type: e.target.visa_type.value,
      processing_time: e.target.processing_time.value,
      fee: e.target.fee.value,
    };

    fetch(`https://visa-server-smoky.vercel.app/addVisa/${selectedVisa?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          
          setVisas((prevVisas) =>
            prevVisas.map((visa) =>
              visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
            )
          );
          setIsModalOpen(false); 
        }
      })
      .catch((err) => console.error("Error updating visa:", err));
  };

  return (
    <div className="container mx-auto py-8">
      <Slide direction="left">
        <h1 className="text-2xl font-bold mb-4">My Added Visas</h1>
      </Slide>

      {visas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visas.map((visa) => (
            <Zoom key={visa._id}>
              <div className="card bg-white shadow-lg rounded-lg p-4">
                <Fade>
                  <img
                    src={visa.countryImage}
                    alt={visa.country}
                    className="w-full h-40 object-cover rounded"
                  />
                </Fade>
                <h2 className="text-lg font-bold mt-2">{visa.country}</h2>
                <p>
                  <strong>Visa Type:</strong> {visa.visa_type}
                </p>
                <p>
                  <strong>Processing Time:</strong> {visa.processing_time} days
                </p>
                <p>
                  <strong>Fee:</strong> ${visa.fee}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleUpdate(visa)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(visa._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      ) : (
        <Fade>
          <p className="text-gray-600">No visas added by you yet.</p>
        </Fade>
      )}

    
      {isModalOpen && selectedVisa && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Update Visa Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  defaultValue={selectedVisa.country}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="visa_type">
                  Visa Type
                </label>
                <input
                  type="text"
                  id="visa_type"
                  name="visa_type"
                  defaultValue={selectedVisa.visa_type}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="processing_time">
                  Processing Time (days)
                </label>
                <input
                  type="number"
                  id="processing_time"
                  name="processing_time"
                  defaultValue={selectedVisa.processing_time}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="fee">
                  Fee ($)
                </label>
                <input
                  type="number"
                  id="fee"
                  name="fee"
                  defaultValue={selectedVisa.fee}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddVisa;

