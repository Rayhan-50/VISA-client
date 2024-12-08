
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDetailsClick = (visaId) => {
    navigate(`/details/${visaId}`);
  };

  const handleSeeAllClick = () => {
    navigate("/all-visas");
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className={`py-2 px-4 rounded font-semibold ${
            isDarkMode
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Banner />

     
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            <Typewriter
              words={['Latest Visas', 'Explore Visa Opportunities', 'Find Your Visa Today']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.slice(0, 6).map((visa) => (
              <div
                key={visa._id}
                className={`shadow-md rounded-lg overflow-hidden ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{visa.countryName}</h3>
                  <p className="text-sm">
                    <strong>Visa Type:</strong> {visa.visaType}
                  </p>
                  <p className="text-sm">
                    <strong>Processing Time:</strong> {visa.processingTime}
                  </p>
                  <p className="text-sm">
                    <strong>Fee:</strong> {visa.fee}
                  </p>
                  <p className="text-sm">
                    <strong>Validity:</strong> {visa.validity}
                  </p>
                  <p className="text-sm">
                    <strong>Application Method:</strong> {visa.applicationMethod}
                  </p>
                  <button
                    onClick={() => handleDetailsClick(visa._id)}
                    className={`mt-4 font-semibold py-2 px-4 rounded ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={handleSeeAllClick}
              className={`py-3 px-6 rounded font-semibold ${
                isDarkMode
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              } text-white`}
            >
              See All Visas
            </button>
          </div>
        </div>
      </section>

    
      <section className={`py-12 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                userName: "John Doe",
                country: "Canada",
                feedback: "The visa process was seamless and hassle-free. Highly recommend this platform!",
                userImage: "https://i.ibb.co.com/5Rw7WK8/download.jpg",
              },
              {
                id: 2,
                userName: "Jane Smith",
                country: "Australia",
                feedback: "Excellent service! Got my visa approved faster than expected.",
                userImage: "https://i.ibb.co.com/944Y0Pb/download.jpg",
              },
              {
                id: 3,
                userName: "Michael Brown",
                country: "Germany",
                feedback: "Very user-friendly and informative. A big thumbs up!",
                userImage: "https://i.ibb.co.com/5hrzdSC/download.webp",
              },
            ].map((testimonial) => (
              <Fade key={testimonial.id} cascade>
                <div
                  className={`shadow-lg rounded-lg p-6 text-center ${
                    isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <img
                    src={testimonial.userImage}
                    alt={testimonial.userName}
                    className="w-16 h-16 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">{testimonial.userName}</h3>
                  <p className="text-sm mb-2">Applied for: {testimonial.country}</p>
                  <blockquote className="text-sm italic">
                    "{testimonial.feedback}"
                  </blockquote>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

     
      <section className={`py-12 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-8">Visa Tips & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "How to Prepare Your Documents",
                link: "https://simplevisa.com/7-essential-documents-needed-for-an-electronic-visa-application/",
                description: "Learn about the essential documents required for a successful visa application.",
              },
              {
                id: 2,
                title: "Common Visa Rejection Reasons",
                link: "https://btwvisas.com/blog/visa-rejection-reasons/",
                description: "Avoid these pitfalls to ensure your visa application gets approved.",
              },
              {
                id: 3,
                title: "FAQs for First-Time Applicants",
                link: "https://www.acko.com/visa/visa-interview-questions-and-answers/",
                description: "Answers to the most commonly asked questions about the visa process.",
              },
            ].map((resource) => (
              <Fade key={resource.id}>
                <div
                  className={`shadow-lg rounded-lg p-6 ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                  }`}
                >
                  <h3 className="text-lg font-bold">{resource.title}</h3>
                  <p className="text-sm mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    Read More
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
