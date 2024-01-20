import React from 'react'
// import { Poppins } from 'next/font/google';
import Image from 'next/image';
import MyImage from '../images/me.jpeg'
import { FaAward } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im"
import { HiOutlineDownload } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

export default function About() {
    return (
        <section id="about">
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <div className="aboutHeadingTitle mb-12">
                        <h3 className='subTitle mx-auto text-center text-sm text-white mb-1.5'>My Intro</h3>
                        <h1 className="headTitleLine mx-auto text-2xl text-center custom font-semibold">About Me</h1>
                    </div>
                    <div className="aboutDataWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-8">
                        <div className="aboutImageWrap rounded-2xl w-8/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 authorAboutImage ">
                            <div className="aboutImage">
                                <Image
                                    src={MyImage}
                                    quality="100"
                                    alt="Picture of the author"
                                    className="authorAboutImage object-cover mx-auto"
                                />
                            </div>
                        </div>
                        <div className="aboutmetaWrap">
                            <div className="aboutBox grid grid-cols-3 gap-x-4 mb-12">
                                <div className="aboutIcoBox text-center py-4 px-5 shadow csBg rounded-xl">
                                    <div className="abIco my-2">
                                        <FaAward className="customLime m-auto text-xl" />
                                    </div>
                                    <h1 className="mt-2 mb-0 text-sm font-semibold text-white">Experience</h1>
                                    <span className="mb-2 tinyFont text-white text-xs">3++ Years Working</span>
                                </div>
                                <div className="aboutIcoBox text-center py-4 px-4 shadow csBg rounded-xl">
                                    <div className="abIco my-2">
                                        <ImBriefcase className="customLime m-auto text-xl" />
                                    </div>
                                    <h1 className="mt-2 mb-0 text-sm font-semibold text-white">Completed</h1>
                                    <span className="mb-2 tinyFont text-white text-xs">30++ Projects</span>
                                </div>
                                <div className="aboutIcoBox text-center py-4 px-5 shadow csBg rounded-xl">
                                    <div className="abIco my-2">
                                        <BiSupport className="customLime m-auto text-xl" />
                                    </div>
                                    <h1 className="mt-2 mb-0 text-sm font-semibold text-white">Support</h1>
                                    <span className="mb-2 tinyFont text-white text-xs">Online 24/7</span>
                                </div>

                            </div>
                            <div className="aboutHeadTitle"><h1 className='text-2xl text-left mb-3 mt-8 customLime font-semibold'> Md Misbah </h1></div>
                            <div className="aboutdesc mb-4"><p className='text-justify text-base text-white'>I'm a multi-skilled professional, who dominates the fields of full-stack web programming, data wizardry, graphic design, virtual assisting, and project management. I'm all about the tech and creativity fusion, bringing a laid-back yet meticulous vibe to my work. Let's turn ideas into digital awesomeness!</p></div>

                            <div className="aboutButton mt-8 flex justify-around">
                                <button className="group relative h-12 w-40 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <a href="#contacts" rel="noopener noreferrer">
                                        <div className="text-base relative customLime group-hover:text-white flex justify-center">
                                            <div className="btnTxt">Contact Me </div>
                                            <div className="btnIco ml-1 mt-1"><FaRegPaperPlane /></div>
                                        </div>
                                    </a>
                                </button>
                                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <a href="../data/sa.pdf" target='_blank' value="Download!">
                                        <div className="text-base relative customLime group-hover:text-white flex justify-center">
                                            <div className="btnTxt">Download Resume</div>
                                            <div className="btnIco ml-1 mt-1 text-base"><HiOutlineDownload /></div>
                                        </div>
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
