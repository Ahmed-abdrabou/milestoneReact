import React, { useCallback, useEffect } from "react";

import "./ProjectSection.css";

const ProjectSection = () => {
  const MINIMUM_VISIBLE_HEIGHT = 150;
  const reveal = useCallback(() => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - MINIMUM_VISIBLE_HEIGHT) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }, [MINIMUM_VISIBLE_HEIGHT]);

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);
  return (
    <div className="projectsSection">
      <h2 className="sectionHeader">Our Projects</h2>
      <div className="projectsContainer">
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">El Obour City</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">October City</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">El Sherouk City</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">Madinet Nasr</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">Ismailia City</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
        <div className=" projectCard reveal">
          <div className="projectImage">
            <img src="./sources/obour.jpg" alt="projectImage" />
          </div>
          <div className="projectDescription">
            <div className="title">El Mansoura City</div>
          </div>
          <div className="projectShowMore">
            <div className="showMore">show More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
