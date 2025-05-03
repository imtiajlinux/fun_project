import React from "react";
import FirstFooter from "../Footer/FirstFooter";
export default function AnimatedFooter() {

    return(
        <>

            <div className="bg-dark bg-opacity-10 ">
                    <FirstFooter  />
                    <section className="animated-section position-relative">
                    <img src="/assets/image/AnimiFooter/Footer_BG.png" alt="Road Background" className="bg-image" />

                    <img src="/assets/image/AnimiFooter/car.gif" alt="Car" className="emoji car" />
                    <img src="/assets/image/AnimiFooter/Cyclist.gif" alt="Bicycle" className="emoji bike" />

                    </section>

            </div>
        </>
    )
}