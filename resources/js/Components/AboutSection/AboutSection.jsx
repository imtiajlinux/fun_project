import React from "react";
import SectionTemp from "./SectionTemp";

export default function AboutSection() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center gap-4">
        <SectionTemp
          name="Mr. Ayaz Waris Khan"
          title="Chairman"
          description="With over 35 years of experience overseas, Mr. Ayaz has established himself as a prominent figure who combines his business acumen with operations and activities of his enduring hard work and persistence to achieve success in many endeavors."
          image="assets/image/chairman.png"
          imagePosition="left" 
        />

        <SectionTemp
          name="Mr. Khalid Ayaz Khan"
          title="Managing Director"
          description="With over 12 years of experience within the Finance industry, Mr. Khalid Ayaz Khan oversees the daily operations and activities of the company. His enduring hard work and persistence helps achieve success in many endeavors."
          image="assets/image/MD khalid.png"
          imagePosition="right" 
        />
      </div>
    </div>
  );
}
