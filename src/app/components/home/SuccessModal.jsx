
'use client';
import React, { useState } from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io'; // Close icon
import FirstModal from './FirstModal';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const SuccessModal = ({
  isOpen,
  onCloseAll,
  formData,

  onOpenSecond,

  onReshedule,
  time
}) => {
  const [cancel, setCancel] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [footer, setFooter] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  console.log(time);
  const handleCancel = () => {
    setCancel(true);
    setFooter(false);
  };

  const handleCancelModal = () => {
    setCancelModal(true);
    setCancel(false);
    setShowCloseIcon(true);
  };

  const handleNevermind = () => {
    setCancel(false);
    setCancelModal(false);
    setFooter(true);


  };
  const handleCloseAll = () => {
    setCancel(false);
    setCancelModal(false);
    setFooter(true);
    setShowCloseIcon(false);

    if (onCloseAll) onCloseAll();
  };
  if (!isOpen) return null;



  return (
    <div
      className='fixed mt-20 inset-0 z-50 flex justify-center items-start pt-10 sm:pt-16 bg-black'
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className='relative bg-white w-[1180px] h-[850px] flex lg:rounded-3xl overflow-hidden justify-between shadow-lg
                    flex-col sm:flex-row sm:w-[1080px] sm:h-[700px] pb-6 lg:pb-0'
      >
        {/* Close Button */}
        {showCloseIcon && (
          <button
            onClick={handleCloseAll}
            className='absolute cursor-pointer top-4 right-4 text-black hover:text-black transition'
          >
            <IoMdClose className='text-3xl' />
          </button>
        )}

        {/* Left Section */}
        <div
          className='bg-[#A63EE7] flex flex-col items-center justify-center p-6 text-white
                      w-full sm:w-[430px] h-[33%] sm:h-auto'
        >
          {cancelModal ? (
            <>
              <RxCrossCircled className='text-9xl mb-4 text-red-400' />
              <h2 className='text-2xl font-semibold mb-2 text-center'>
                This meeting is canceled
              </h2>
            </>
          ) : (
            <>
              <IoCheckmarkCircleSharp className='text-9xl mb-4' />
              <h2 className='text-2xl font-bold mb-2 text-center'>
                This meeting is scheduled
              </h2>
              <p className='text-center text-[16px]'>
                We've emailed everyone a calendar invite.
              </p>
            </>
          )}
          {showCloseIcon ? "" : <div>
            <button className='px-6 py-2 border border-white rounded-lg text-white cursor-pointer mt-6 flex gap-2' onClick={handleCloseAll}>
              <FaRegArrowAltCircleLeft className='pt-1 text-xl' /> Back to Home
            </button>
          </div>}
        </div>

        {/* Right Section */}
        <div
          className='w-full sm:w-[650px] p-6 ml-0 lg:ml-12 overflow-y-auto
                      h-[67%] sm:h-auto'
        >
          <div className='space-y-4'>
            <div>
              <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
                Event Name
              </label>
              <div className='w-full sm:w-[520px] lg:h-[45px]  h-[70px] border border-gray-300 rounded-xl text-[#6D6D6D] px-3 py-4 pointer-events-none'>
                Consultation (45-minutes) between Dr. Troy Abel and{' '}
                {formData.name}
              </div>
            </div>
            <div>
              <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
                Event Date/Time
              </label>
              <div className='w-full sm:w-[520px] h-[75px] border text-[#6D6D6D] border-gray-300 rounded-xl px-3 py-4 pointer-events-none'>
                <h1>{time.day},{time.date}</h1>
                <p>{time.time}</p>
              </div>
            </div>
            <div>
              <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
                Attendees
              </label>
              <div className='w-full sm:w-[520px] h-[80px] border border-gray-300 rounded-xl px-3 py-4 pointer-events-none'>
                <h1 className='text-[#6D6D6D]'>
                  Dr. Troy Abel{' '}
                  <span className='text-sm bg-purple-300 p-1 rounded'>
                    Host
                  </span>
                </h1>
                <h1 className='text-[#6D6D6D]'>{formData.name}</h1>
              </div>
            </div>
            <div>
              <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
                Location
              </label>
              <div className='w-full text-[#6D6D6D] sm:w-[520px] h-[45px] border border-gray-300 rounded-xl px-3 py-4 pointer-events-none '>
                <a href='' className='pb-4 mb-2'>Google Meet </a>
              </div>
            </div>
          </div>
          <div>
            <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
              Confirmed Details
            </label>
            <div className='w-full sm:w-[520px] h-[187px] border border-gray-300 rounded-xl px-3 py-4 pointer-events-none overflow-y-auto'>
              <h1 className='text-[16px] text-black font-bold'>
                What's the #1 thing you're hoping to get out of our
                conversation?
              </h1>
              <p className='text-[#6D6D6D]'>{formData.goal}</p>
              <h1 className='text-[16px] text-black font-bold'>
                Which area of UX are you most interested in? (e.g., UX/UI
                Design, UX Research, UX Strategy, I'm still figuring it out!)
              </h1>
              <p className='text-[#6D6D6D]'>{formData.interest}</p>
            </div>
          </div>

          {cancel && (
            <>
              <div>
                <label className='block text-[#6D6D6D] font-semibold mb-4 mt-6 text-[18px]'>
                  Reason for cancellation (optional)
                </label>
                <input
                  type='text'
                  className='mt-2 block p-5 text-xl w-full sm:w-[520px] h-[80px] border border-gray-300 rounded-xl px-3 py-4 overflow-y-auto'
                  placeholder='Google Meet'
                />
              </div>
              <div>
                <div className='flex gap-4 mt-6 pr-8 lg:pr-14 lg:justify-end justify-center'>
                  <button
                    onClick={handleNevermind}
                    className='border-2 cursor-pointer text-center text-black  w-[100px] h-[42px] text-[18px] rounded-xl border-[#ACADBC]  hover:bg-gray-200'
                  >
                    Nevermind
                  </button>
                  <button
                    onClick={handleCancelModal}
                    className='border-2 cursor-pointer text-center w-[130px] text-white h-[42px] text-[18px] border-[#A63EE7] rounded-xl bg-[#A63EE7]'
                  >
                    Cancel event
                  </button>
                </div>
              </div>
            </>
          )}

          {footer && (
            <>
              <div className='mt-6 pt-4 text-lg text-center text-gray-500'>
                Need to make a change?{' '}
                <span
                  onClick={() => {
                    // close third modal if exists
                    onReshedule?.();       // call reschedule function if exists
                    // close SuccessModal
                  }}
                  className='underline cursor-pointer text-[#A63EE7]'
                >
                  Reschedule
                </span>{' '}
                or{' '}
                <span
                  onClick={handleCancel}
                  className='underline cursor-pointer text-[#A63EE7]'
                >
                  Cancel
                </span>
              </div>
              {isModalOpen && (
                <FirstModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onOpenSecond={onOpenSecond}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
