"use client";

import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";

const teamMembers = [
  {
    name: "Dr. Troy Abel (Dr. T)",
    designation: ["PhD Human-Computer Interaction", "MFA Visual Communication"],
    role: "President & Lead educator",
    front: `Dr. T has worn many hats throughout his career, from being the hiring manager who assesses talent to the professor sharing knowledge with eager minds. His diverse experiences have equipped him with a deep understanding of what it truly takes to excel in UX design, strategy, and research.`,
    back: `Dr. Abel is a seasoned design leader with over 15 years of experience spanning both academia and industry. As a former design professor at Iowa State University, Virginia Tech, and the University of North Texas, he brings a unique blend of academic rigor and real-world insight to his work. His time in higher education was dedicated to shaping the next generation of designers through research-driven teaching and mentorship. In industry, Dr. T leads high-performing teams that deliver innovative, user-centered solutions with clarity, precision, and purpose. Grounded in research, strategy, and a deep commitment to collaboration, he fosters a culture of growth, creativity, and excellence—consistently driving product innovation and strong business outcomes.`,
    badges: [
      { text: "Portfolio Strategy" },
      { text: "UX Career Transition" },
      { text: "User Research" },
    ],
    headshot: "/image/team/headshot.jpg",
  },
  {
    name: "Andrew Schall",
    role: "Team educator",
    front: `Andrew Schall is a UX leader, researcher, and strategist with 20+ years of experience driving innovation at organizations including ServiceNow, Mayo Clinic, Citibank, Office Depot, and Southwest Airlines.`,
    back: `He is the author of The Persona and Journey Map Playbook and co-author of Eye Tracking in User Experience. Andrew is an experienced instructor teaching user experience courses as an adjunct faculty member at the Maryland Institute College of Art (MICA) Design.`,
    badges: [
      { text: "UX Research Expert" },
      { text: "Author" },
      { text: "Education" },
    ],
    headshot: "/image/team/Andrew.png",
  },
  {
    name: "Cory Lebson",
    role: "Team educator",
    front: `Cory is a principal research consultant and small business owner, leading research projects for a variety of clients across sectors, managing small teams of staff and contractors, and taking care of all business operations. I’m most excited by qualitative, real-time research, especially when it involves in-person interactions with actual or representative users.`,
    back: `(TO BE SUPPLIED)`,
    badges: ["(TO BE SUPPLIED)"],
    headshot: "/image/team/Cory.png",
  },
];

export default function TeamSection() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlides(teamMembers.map((member) => [member]));
      } else {
        const grouped = [];
        for (let i = 0; i < teamMembers.length; i += 2) {
          grouped.push(teamMembers.slice(i, i + 2));
        }
        setSlides(grouped);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  if (slides.length === 0) return null;

  return (
    <section
      id="team"
      className="w-full bg-gradient-to-r from-[#0a0a0a] via-[#1a0f24] to-[#0a0a0a] text-white lg:py-8 md:py-7 sm:py-6 py-5 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle title={"Meet the Team"} />

        <Carousel
  showArrows={true}
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={false}
  showStatus={false}
  swipeable={true}
  renderIndicator={() => null}
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl"
        onClick={onClickHandler}
        aria-label={label}
      >
        &#10094;
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl"
        onClick={onClickHandler}
        aria-label={label}
      >
        &#10095;
      </button>
    )
  }
>
  {slides.map((group, index) => (
    <div key={index} className="flex justify-center gap-8">
      {group.map((member, i) => (
        <div key={i}>
          <TeamCard member={member} />
        </div>
      ))}
    </div>
  ))}
</Carousel>

      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:w-[430px] md:w-[340px] w-[290px] lg:h-[510px] md:h-[635px] h-[720px] mx-auto gap-96 mb-6"
    >
      <div
        className="w-full h-full relative"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full top-0 left-0 bg-[#A63EE7]/5 border border-white/20 rounded-2xl flex flex-col lg:p-5 md:p-4 p-3"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center md:gap-4 sm:gap-3 gap-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={member.headshot}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="my-auto">
                <h3 className="lg:text-[20px] md:text-lg text-base font-normal text-white/90">
                  {member.name}
                </h3>
                <p className="md:text-[16px] text-sm font-normal text-[#ACADBC] mb-2">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center my-auto">
              <p className="w-full block text-left px-2 sm:px-4 text-base text-white/80 font-normal">
                {member.front}
              </p>
              {Array.isArray(member?.designation) &&
                member.designation.length > 0 && (
                  <div className="mt-4">
                    <ul className="space-y-1 text-sm text-gray-200 list-disc list-inside text-left">
                      {member.designation.map((deg, idx) => (
                        <li key={idx}>{deg}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            <div className="mt-auto flex gap-2 flex-wrap justify-center">
              {member.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`${
                    badge?.color || "bg-[#A63EE7]"
                  } px-3 py-1 mt-1 rounded-full text-xs font-normal text-white/90 border border-white/20 shadow-sm`}
                >
                  {badge?.text || badge}
                </span>
              ))}
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full top-0 left-0 bg-[#A63EE7]/10 border border-white/20 rounded-2xl flex flex-col lg:p-5 md:p-4 p-3 overflow-auto"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col justify-center h-full overflow-hidden">
              <div className="flex flex-col items-center my-auto py-4">
                <p className="w-full block text-left px-2 sm:px-4 text-base text-white/70">
                  {member.back}
                </p>
              </div>
            </div>
            <div className="mt-auto flex gap-2 flex-wrap justify-center">
              {member.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`${
                    badge?.color || "bg-[#A63EE7]"
                  } px-3 py-1 mt-1 rounded-full text-xs font-medium text-white/90 border border-white/20 shadow-sm`}
                >
                  {badge?.text || badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
