import React from "react";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

//style
import '@/css/About.css';




const About = () => {
    return (
        <>
        <Header/>
        <Body>
            <div className="content about">
                <h1 className="secondary-label">about.</h1>
                <div className="profile">
                    <img src='./assets/images/clown.jpeg' />
                </div>
                <div>
                    <p>
                        As suggested by the title of this website, I am Adam Hilario.
                        <br />
                        The purpose of this website is to serve as a portfolio/portal to put things I&apos;ve made or document what i have done.
                    </p>
                </div>
                <h2 className="secondary-label">
                    <b>education</b>
                </h2>
                <div className="section">
                    <h2 className="primary-label">
                        McGill University | <i>August 2016 - April 2018</i>
                    </h2>
                    <p>
                        In the autumn after graduating high school, I matriculated at the McGill University in Montreal, Quebec, CA 
                        where I began pursuit of a Bachelor of Arts with a major in Software Engineering and a double minor in World 
                        Cinemas and Psychology. However, after the spring semester of my second year, I transferred to University College Dublin.
                        <br/><br/>
                        And while I did technically acquire enough credits in my Film and Psychology minor to warrant the accolade
                        (the Software Emgineering courses were seriously impacted), they don't exactly hand out a diploma for just two minors
                        So the only sort of qualifucations I walked away from McGill with was an Ordination from the Univeral Life Church that I signed
                        up for on a whim. So technically I am a minister and can officiate weddings. (See the link to the contact form below.)
                    </p>
                </div>
                <div className="section bsc">
                    <h2 className="primary-label">University College Dublin | <i>September 2018 - May 2022</i></h2>
                    <h4><i>B.Sc Computer Science</i></h4>
                    <p>
                        In the autumn of 2018, I transferred to University College Dublin, pursuing a Bachelor of Science in Computer Science.
                        <br/><br/>
                    </p>
                    <h4 className="secondary-label">Final Project</h4>
                    <p>
                        For my Bachelor's Project, I used Microsoft's HoloLens and Unity to aid in the development of an annotation software 
                        called MAAP Annotate started by my supervisor at the time. The aim of the software was facilitate the annotation of megalithic art in a virtual
                        space using mixed reality. 
                        <br/><br/>
                        While not initially planned, my contribution entailed porting the software from the first HoloLens to the HoloLens 2 (which was way more evolved than I had predicted. On the backend, the only 
                        thing the two versions of the HoloLens have in common are the name ) and added 
                        functionaliy to enable sharing of annotation data through Azure blob storage.
                        <br /><br/>
                        Embedded below is the write that accompanied the submission:
                    </p>
                    <div className="pdf">
                        <embed src='./assets/pdf/FYP_Final_Report.pdf' width="500" height="375" />
                        <p><b><i>Figure 1.1: BSc Final Year Project Report</i></b></p>
                    </div>
                </div>
                <div className="section">
                    <h2 className="primary-label">
                        Trinity College Dublin | September 2022 - October 2023
                    </h2>
                    <h4><i>M.Sc Interactive Digital Media</i></h4>
                    <p>
                        The Interactive Digital Media Master's is a three trimester taught program by Trinity's School of Computer Science 
                        that was designed to be an interdisciplinary course that combined a variety of STEAM fields into a single degree.
                        In practice, the skills acquired from this program are well suited for game and full stack development with modules 
                        such as Graphic Design and Film abedding the design philosophy of a UI/UX or the narrative structure of games respectively. 
                        Other modules included 3D Modelling, Cultural Studies, Game Design, Web Development, and Programming.
                        <br/><br/>
                    </p>
                    <h4 className="secondary-label">Final Project</h4>
                    <p>
                        
                        The final trimester of the program was dedicated to an independent project. My team and I decided to make a game developed with Unity and C#
                        <br/><br/>
                        Below are some images and the final slideshow from the presentation of our game.
                    </p>
                    <div className="work-sample">
                        <div className="slideshow-bob">
                            <iframe src="./assets/pdf/Sidney.pdf" width="560" height="375"/>
                            <p><b><i>Figure 2.1: Presentation Slideshow</i></b></p>
                        </div>
                        <div className="video">
                            <iframe className="demo" src="https://www.youtube.com/embed/sbv0iAtByQs?si=FVUD_k374xEbp0oo"/>
                            <p><b><i>Figure 2.2: Gameplay demo</i></b></p>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </Body>
        <Footer/>
        </>
        
    )
};

export default About;