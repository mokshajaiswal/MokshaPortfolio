// src/pages/Experience.tsx
import React, { useRef, useEffect, useState } from 'react';
import './Experience.css';

import flower3 from '../assets/about/flower3.png'; // Replace with your flower icon path

const Experience: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  return (
    <div className="experience-container-main">

       <div className='experience-column' >


        {/* Headings */}
        <div className='experience-row' style={{marginBottom: '60px'}}>
          <div className='row1'>
          <div className="heading-e d-flex ">
          <img src={flower3} alt="flower" className="heading-icon-e" />
          <h2 className="heading-text-e">Experience</h2>
          <img src={flower3} alt="flower" className="heading-icon-e" />
        </div>

          </div>
          <div className='row2'>
                 
                  </div>
          <div className='row3'>
          <h1 className="headline-experience">My Journey in Bridging Creativity and Functionality</h1>
          </div>
        </div>


       {/* IG Group */}
        <div className='experience-row'>
          <div className='row1'>
          March 2024 - July 2024
          </div>
          <div className='row2'>
                  <div className="timeline-container">
              <div className="timeline-marker"  style={{ 
                                                        borderRadius: '50%',        // Ensure the image remains a circle
                                                        boxShadow: '0 0 0 3px #DFD2F6' // Simulates an outer border using box-shadow
                                                      }}  ></div>
              <div className="timeline-line-dashed"></div>
                  </div>
                  </div>
          <div className='row3'>
          <div className="experience-container">
                  <div className="experience-title">
                    <span className="company-name">IG</span>
                    <span className="role">Product Designer</span>
                  </div>
                  <ul className="experience-details">
                    <li>
                      Redesigned key user flows based on usability testing insights, leading to a 10% improvement in conversion rates of the main IG website. This translated into tangible business growth and revenue generation.
                    </li>
                    <li>
                      Effectively communicated design ideas through sketches, prototypes, and wireframes, reducing development iterations by 15%, and saving an estimated 20 hours per sprint.
                    </li>
                  </ul>
                </div>
          </div>
        </div>


          {/* Zeta */}
          <div className='experience-row'>
                    <div className='row1'>
                    March 2022 - March 2024
                    </div>
                    <div className='row2'>
                            <div className="timeline-container">
                        <div className="timeline-marker" style={{
                                                                  borderRadius: '50%',        // Ensures it's circular
                                                                  backgroundColor: '#F39B6C',// Background color for the circle
                                                                  boxShadow: '0 0 0 3px #FFC5A6' // Outer border
                                                                }}></div>
                        <div className="timeline-line-dashed"></div>
                            </div>
                            </div>
                    <div className='row3'>
                    <div className="experience-container">
                            <div className="experience-title">
                              <span className="company-name">Zeta</span>
                              <span className="role">UX Designer</span>
                            </div>
                            <ul className="experience-details">
                              <li>
                              Redesigned finance and EOD center app, Reduced processing time by 20%, and minimized failure rates.
                              </li>
                              <li>
                              Led UX research for Merchant Center, enhancing functionality conceptualized and designed critical business components aligning user needs with business goals.
                              </li>
                              <li>
                              Conducted comprehensive user research and testing initiatives, leading to a 20% enhancement in user satisfaction scores and a 10% decrease in user-reported issues.
                              </li>
                            </ul>
                          </div>
                    </div>             
    </div>



     {/* Metafic */}
     <div className='experience-row'>
                    <div className='row1'>
                    June 2021 - March 2022
                    </div>
                    <div className='row2'>
                            <div className="timeline-container">
                        <div className="timeline-marker" style={{
                                                                  borderRadius: '50%',        // Ensures it's circular
                                                                  backgroundColor: '#F7D96A',// Background color for the circle
                                                                  boxShadow: '0 0 0 3px #FFF0B8' // Outer border
                                                                }}></div>
                        <div className="timeline-line-dashed"></div>
                            </div>
                            </div>
                    <div className='row3'>
                    <div className="experience-container">
                            <div className="experience-title">
                              <span className="company-name">Metafic</span>
                              <span className="role">UX/UI Designer</span>
                            </div>
                            <ul className="experience-details">
                              <li>
                              Led a team of 2 interns, providing mentorship and fostering a collaborative environment.
                              </li>
                              <li>
                              Collaborated with multiple product managers to successfully ship a variety of projects.
                              </li>
                              <li>
                              Implemented efficient processes resulting in measurable improvement of 30%.
                              </li>
                              <li>
                              Reduction in time spent on requirement gathering and a 40% decrease in prototyping duration.
                              </li>
                            </ul>
                          </div>
                    </div>
    </div>





{/* Lollypop Design Studio */}
<div className='experience-row'>
                    <div className='row1'>
                    May 2021 - June 2021
                    </div>
                    <div className='row2'>
                            <div className="timeline-container">
                        <div className="timeline-marker"style={{
                                                                  borderRadius: '50%',        // Ensures it's circular
                                                                  backgroundColor: '#99AD6D',// Background color for the circle
                                                                  boxShadow: '0 0 0 3px #CBD8AD' // Outer border
                                                                }}></div>
                        <div className="timeline-line-dashed"></div>
                            </div>
                            </div>
                    <div className='row3'>
                    <div className="experience-container">
                            <div className="experience-title">
                              <span className="company-name">Lollypop Design Studio</span>
                              <span className="role">UI/UX Designer Intern</span>
                            </div>
                            <ul className="experience-details">
                              <li>
                              Researched and designed Balanco, an app that helps in maintaining a specific lifestyle.
                              </li>
                              
                            </ul>
                          </div>
                    </div>
    </div>





    {/* Verzeo */}
<div className='experience-row'>
                    <div className='row1'>
                    May 2021 - June 2021
                    </div>
                    <div className='row2'>
                            <div className="timeline-container">
                        <div className="timeline-marker"style={{ 
                                                        borderRadius: '50%',        // Ensure the image remains a circle
                                                        boxShadow: '0 0 0 3px #DFD2F6' // Simulates an outer border using box-shadow
                                                      }} ></div>
                        <div className="timeline-line-dashed"></div>
                            </div>
                            </div>
                    <div className='row3'>
                    <div className="experience-container">
                            <div className="experience-title">
                              <span className="company-name">Verzeo</span>
                              <span className="role">UI/UX Designer Intern</span>
                            </div>
                            <ul className="experience-details">
                              <li>
                              Exhibited excellent storytelling and presentation skills. Comfortably worked in international and cross-functional teams.
                              </li>
                              <li>
                              Led impactful redesigns, consistently improving user experiences across a wide range of digital projects at Possible which stopped the 45% user retention from the onboarding.
                              </li>
                              
                              
                            </ul>
                          </div>
                    </div>
    </div>





     {/* ApnaMD */}
<div className='experience-row'>
                    <div className='row1'>
                    April 2020 - September 2020
                    </div>
                    <div className='row2'>
                            <div className="timeline-container1">
                        <div className="timeline-marker1"style={{
                                                                  borderRadius: '50%',        // Ensures it's circular
                                                                  backgroundColor: '#F39B6C',// Background color for the circle
                                                                  boxShadow: '0 0 0 3px #FFC5A6' // Outer border
                                                                }}></div>
                        <div className="timeline-line-dashed1"></div>
                            </div>
                            </div>
                    <div className='row3'>
                    <div className="experience-container">
                            <div className="experience-title">
                              <span className="company-name">Apna MD</span>
                              <span className="role">Freelance UI/UX Designer</span>
                            </div>
                            <ul className="experience-details">
                              <li>
                              Apna MD, Health Sector: Designed end to end mobile app and website from inception to launch. Created comprehensive prototypes to visualize and test app functionality.
                              </li>
                              
                              
                              
                            </ul>
                          </div>
                    </div>
    </div>


































  </div>
</div>
    
  




  );
};

export default Experience;

