import React from "react";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

import '@/css/About.css';


const About = () => {
    return (
        <>
        <Header/>
        <Body>
            <div className="content about">
                <h1 className="secondary-label">about.</h1>
                <div>
                    <p>
                        as suggested by the title of this website, i am adam hilario.
                        <br />
                        the purpose of this website is to serve as a portfolio/portal to put things i&apos;ve made or document what i have done.
                    </p>
                </div>
                <h2 className="secondary-label">
                    <b>education</b>
                </h2>
                <div className="section">
                    <h3 className="secondary-label">
                        McGill University | <i>August 2016 - April 2018</i>
                    </h3>
                    <p>
                        in the autumn after graduating high school, i matriculated at the McGill University in Montreal, Quebec, CA where i began pursuit of a Bachelor of Arts with a major in Software Engineering and a double minor in world cinemaas and psychology
                        <br />
                        however, after the spring semester of my second year, i transferred to University College Dublin.
                    </p>
                </div>
                <div className="section">
                    <h3 className="secondary-label">University College Dublin | <i>September 2018 - May 2022</i></h3>
                    <h4><i>B.Sc Interactive Digital Media</i></h4>
                    <p>
                        In the autumn of 2018, I transferred to University College Dublin, pursuing a Bachelor of Science in Computer Science.
                    </p>
                </div>
                <div className="section">
                    <h3 className="secondary-label">
                        Trinity College Dublin | September 2022 - October 2023
                    </h3>
                    <h4><i>M.Sc Interactive Digital Media</i></h4>
                    <p></p>
                </div>
            </div>
        </Body>
        <Footer/>
        </>
        
    )
};

export default About;