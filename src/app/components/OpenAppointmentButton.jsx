"use client";
import { useState } from "react";
import FirstModal from "./home/FirstModal";
import InfoModal from "./home/InfoModal";
import SuccessModal from "./home/SuccessModal";
import { FiArrowRight } from "react-icons/fi";
const OpenAppointmentButton = ({className}) => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    interest: "",
  });
  const [time, setTime] = useState({
    date: "",
    time: "",
    day: "",
  }); // To store selected date and time

  const closeAll = () => {
    setFirstOpen(false);
    setSecondOpen(false);
    setThirdOpen(false);
    setFormData({
      name: "",
      email: "",
      goal: "",
      interest: "",
    });
  };
  const reschedule = () => {
    setSecondOpen(false);
    setThirdOpen(false);
    setFirstOpen(true);
    console.log("Reschedule clicked");
  };

  return (
    <>
      <button
        onClick={() => setFirstOpen(true)}
        className={`relative flex items-center justify-center gap-2 px-6 py-2 rounded-lg
                       border border-[#A63EE7] bg-[#A63EE7] text-white font-medium overflow-hidden
                       transition-all duration-500 ease-out group ${className}`}
      >
        <span
          className="absolute inset-0 bg-black rounded-lg scale-x-0 origin-left
                         transition-all duration-700 ease-in-out group-hover:scale-x-100
                         transform-gpu"
        ></span>
        <span
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black rounded-lg
                         scale-x-0 origin-left transition-all duration-800 ease-out
                         group-hover:scale-x-100 transform-gpu"
        ></span>

        <span className="relative flex items-center gap-2 z-10">
          <span
            className="flex items-center justify-center transition-all duration-500 ease-out
                           transform group-hover:-translate-x-4 group-hover:opacity-0"
          ></span>
          <span className="transition-all duration-500 ease-out group-hover:text-white">
            Book a Free Call
          </span>
          <span
            className="flex items-center justify-center transition-all duration-500 ease-out
                           transform opacity-0 translate-x-4 group-hover:translate-x-0
                           group-hover:opacity-100 group-hover:text-white"
          >
            <FiArrowRight size={18} />
          </span>
        </span>
      </button>

      <div className="z-50 fixed mt-4">
        <FirstModal
          time={time}
          setTime={setTime}
          isOpen={firstOpen}
          onClose={() => setFirstOpen(false)}
          onOpenSecond={() => setSecondOpen(true)}
        />
        <InfoModal
          isOpen={secondOpen}
          onClose={() => setSecondOpen(false)}
          onOpenThird={() => setThirdOpen(true)}
          formData={formData}
          setFormData={setFormData}
        />
        <SuccessModal
          isOpen={thirdOpen}
          onCloseAll={closeAll}
          time={time}
          onClose={() => setFirstOpen(false)}
          onOpenSecond={() => setSecondOpen(true)}
          onClose2={() => setSecondOpen(false)}
          onClose3={() => setThirdOpen(false)}
          formData={formData}
          onReshedule={reschedule}
        />
      </div>
    </>
  );
};

export default OpenAppointmentButton;
