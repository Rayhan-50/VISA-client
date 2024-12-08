import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
const Banner = () => {
  return (
    // <div>
    //   <div className="carousel w-full">
    //     <div id="item1" className="carousel-item relative w-full">
    //       <img
    //         src={img1}
    //         className="w-full h-96"
    //         alt="Visa Requirement Check"
    //       />
    //       <div className="absolute bottom-5 left-5 bg-opacity-75 bg-black text-white p-4 rounded">
    //         <h2 className="text-lg font-bold">
    //           Discover Visa Requirements for Your Next Adventure
    //         </h2>
    //         <p>
    //           Planning a trip or relocation? Our platform makes it easy to find
    //           the visa requirements for your destination, ensuring you're
    //           well-prepared before you travel. With our user-friendly interface,
    //           you can:
    //         </p>
    //         <ul className="list-disc pl-5 mt-2 space-y-1">
    //           <li>
    //             Search by country or region to access tailored visa information.
    //           </li>
    //           <li>
    //             Learn about required documents, eligibility criteria, and
    //             special conditions.
    //           </li>
    //           <li>
    //             Check processing times and application fees for various visa
    //             types.
    //           </li>
    //           <li>
    //             Understand the steps to apply online or through local embassies.
    //           </li>
    //           <li>
    //             Stay updated on the latest travel restrictions and policies.
    //           </li>
    //         </ul>
    //         <p className="mt-2">
    //           Let us simplify your journey by providing accurate and up-to-date
    //           visa requirements, saving you time and reducing uncertainty. Start
    //           exploring today and travel with confidence!
    //         </p>
    //       </div>
    //     </div>
    //     <div id="item2" className="carousel-item relative w-full">
    //       <img src={img2} className="w-full" alt="Apply for Visas Online" />
    //       <div className="absolute bottom-5 left-5 bg-opacity-75 bg-black text-white p-4 rounded">
    //         <h2 className="text-lg font-bold">
    //           Comprehensive Visa Information
    //         </h2>
    //         <p>
    //           Explore a wide range of visa options tailored to your travel and
    //           relocation needs. Whether you're looking to study abroad, explore
    //           a new country, work overseas, or reunite with family, our platform
    //           provides detailed visa information, application guidelines, and
    //           updates on processing times.
    //         </p>
    //         <p className="mt-2">With our streamlined system, you can:</p>
    //         <ul className="list-disc pl-5 mt-2 space-y-1">
    //           <li>Understand the requirements for different visa types.</li>
    //           <li>Access step-by-step application guides.</li>
    //           <li>Track your visa application status in real-time.</li>
    //           <li>Calculate processing times and fees upfront.</li>
    //           <li>Get expert tips on increasing your visa approval chances.</li>
    //         </ul>
    //         <p className="mt-2">
    //           Our goal is to simplify the often complex visa process, ensuring
    //           you have all the resources you need for a successful application.
    //           Start your journey today with confidence!
    //         </p>
    //       </div>
    //     </div>
    //     <div id="item3" className="carousel-item relative w-full">
    //       <img
    //         src={img3}
    //         className="w-full"
    //         alt="Track Your Visa Application"
    //       />
    //       <div className="absolute bottom-5 left-5 bg-opacity-75 bg-black text-white p-4 rounded">
    //         <h2 className="text-lg font-bold">Track Visa Applications</h2>
    //         <p>
    //           Never miss a step in your visa application process with our
    //           real-time tracking system. Designed for convenience and
    //           transparency, you can:
    //         </p>
    //         <ul className="list-disc pl-5 mt-2 space-y-1">
    //           <li>
    //             Monitor your application's progress from submission to approval.
    //           </li>
    //           <li>
    //             Receive instant updates on status changes through email and
    //             notifications.
    //           </li>
    //           <li>
    //             Access detailed timelines, including estimated processing times
    //             and important deadlines.
    //           </li>
    //           <li>
    //             Quickly resolve issues with direct support options integrated
    //             into the tracker.
    //           </li>
    //         </ul>
    //         <p className="mt-2">
    //           Our system ensures that you're always informed and in control,
    //           providing peace of mind as you await your visa approval. Let us
    //           simplify the journey for you!
    //         </p>
    //       </div>
    //     </div>
    //     <div id="item4" className="carousel-item relative w-full">
    //       <img src={img4} className="w-full" alt="Seamless User Experience" />
    //       <div className="absolute bottom-5 left-5 bg-opacity-75 bg-black text-white p-4 rounded">
    //         <h2 className="text-lg font-bold">Seamless User Experience</h2>
    //         <p>
    //           Our portal is designed with you in mind, ensuring a smooth and
    //           intuitive journey at every step. With a dynamic and responsive
    //           interface, you can:
    //         </p>
    //         <ul className="list-disc pl-5 mt-2 space-y-1">
    //           <li>
    //             Effortlessly explore visa options and requirements across
    //             various countries.
    //           </li>
    //           <li>
    //             Access essential features with minimal clicks through a
    //             streamlined navigation system.
    //           </li>
    //           <li>
    //             Enjoy fast-loading pages optimized for both desktop and mobile
    //             devices.
    //           </li>
    //           <li>
    //             Securely submit applications and track your visa status in real
    //             time.
    //           </li>
    //           <li>
    //             Receive personalized updates and notifications to stay informed.
    //           </li>
    //         </ul>
    //         <p className="mt-2">
    //           Whether you're planning your first trip abroad or handling complex
    //           travel arrangements, our portal is your reliable companion.
    //           Simplify your visa process with a user-friendly platform tailored
    //           to meet your needs.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-full justify-center gap-2 py-2">
    //     <a href="#item1" className="btn btn-xs">
    //       1
    //     </a>
    //     <a href="#item2" className="btn btn-xs">
    //       2
    //     </a>
    //     <a href="#item3" className="btn btn-xs">
    //       3
    //     </a>
    //     <a href="#item4" className="btn btn-xs">
    //       4
    //     </a>
    //   </div>
    // </div>
    <div>
  <div className="carousel w-full relative">
    <div id="item1" className="carousel-item relative w-full">
      <img src={img1} className="w-full h-96 object-cover" alt="Visa Requirement Check" />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">
          Discover Visa Requirements for Your Next Adventure
        </h2>
        <p>
          Planning a trip or relocation? Our platform makes it easy to find the visa requirements for your destination, ensuring you're well-prepared before you travel. With our user-friendly interface, you can:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1">
          <li>Search by country or region to access tailored visa information.</li>
          <li>Learn about required documents, eligibility criteria, and special conditions.</li>
          <li>Check processing times and application fees for various visa types.</li>
          <li>Understand the steps to apply online or through local embassies.</li>
          <li>Stay updated on the latest travel restrictions and policies.</li>
        </ul>
        <p className="mt-4">
          Let us simplify your journey by providing accurate and up-to-date visa requirements, saving you time and reducing uncertainty. Start exploring today and travel with confidence!
        </p>
      </div>
    </div>

    <div id="item2" className="carousel-item relative w-full">
      <img src={img2} className="w-full h-96 object-cover" alt="Apply for Visas Online" />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">
          Comprehensive Visa Information
        </h2>
        <p>
          Explore a wide range of visa options tailored to your travel and relocation needs. Whether you're looking to study abroad, explore a new country, work overseas, or reunite with family, our platform provides detailed visa information, application guidelines, and updates on processing times.
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1">
          <li>Understand the requirements for different visa types.</li>
          <li>Access step-by-step application guides.</li>
          <li>Track your visa application status in real-time.</li>
          <li>Calculate processing times and fees upfront.</li>
          <li>Get expert tips on increasing your visa approval chances.</li>
        </ul>
        <p className="mt-4">
          Our goal is to simplify the often complex visa process, ensuring you have all the resources you need for a successful application. Start your journey today with confidence!
        </p>
      </div>
    </div>

    <div id="item3" className="carousel-item relative w-full">
      <img src={img3} className="w-full h-96 object-cover" alt="Track Your Visa Application" />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Track Visa Applications</h2>
        <p>
          Never miss a step in your visa application process with our real-time tracking system. Designed for convenience and transparency, you can:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1">
          <li>Monitor your application's progress from submission to approval.</li>
          <li>Receive instant updates on status changes through email and notifications.</li>
          <li>Access detailed timelines, including estimated processing times and important deadlines.</li>
          <li>Quickly resolve issues with direct support options integrated into the tracker.</li>
        </ul>
        <p className="mt-4">
          Our system ensures that you're always informed and in control, providing peace of mind as you await your visa approval. Let us simplify the journey for you!
        </p>
      </div>
    </div>

    <div id="item4" className="carousel-item relative w-full">
      <img src={img4} className="w-full h-96 object-cover" alt="Seamless User Experience" />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Seamless User Experience</h2>
        <p>
          Our portal is designed with you in mind, ensuring a smooth and intuitive journey at every step. With a dynamic and responsive interface, you can:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1">
          <li>Effortlessly explore visa options and requirements across various countries.</li>
          <li>Access essential features with minimal clicks through a streamlined navigation system.</li>
          <li>Enjoy fast-loading pages optimized for both desktop and mobile devices.</li>
          <li>Securely submit applications and track your visa status in real time.</li>
          <li>Receive personalized updates and notifications to stay informed.</li>
        </ul>
        <p className="mt-4">
          Whether you're planning your first trip abroad or handling complex travel arrangements, our portal is your reliable companion. Simplify your visa process with a user-friendly platform tailored to meet your needs.
        </p>
      </div>
    </div>
  </div>

  <div className="flex w-full justify-center gap-2 py-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
  </div>
</div>

  );
};

export default Banner;
