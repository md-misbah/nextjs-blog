import React from 'react'
import { Poppins } from 'next/font/google';


import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { MdPalette } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { HiPhoto } from "react-icons/hi2";
import { MdVideoSettings } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { FaDigitalTachograph } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaSearchDollar } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { HiPresentationChartLine } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";




const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})



export default function Skills() {
    return (
        <section id="skills" className={poppins.className}>
            <div className="sm:container mx-auto">
                <div className="skillsWrapper w-11/12 m-auto">
                    <div className="skillHeadingTitle mb-12">
                        <h3 className='skillSub_Title mx-auto text-center text-sm textAlt mb-1.5'>My Abilities</h3>
                        <h1 className="skillHeadTitleLine mx-auto text-2xl text-center customLime font-semibold">My Skills & Efficiency</h1></div>
                    <div className="leftRightWrap grid gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2	">
                        <div className="skillWrapperLeft customShadow p-5 my-4  rounded-2xl  bg-white">
                            <div className="skill_Left_skillTitle text-base font-semibold customLime m-auto text-center my-3">Front-End Development</div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner sm:block md:block lg:flex lg:justify-between">
                                    <div className="innerLeft">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><DiHtml5 /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	 textMain">HTML</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="90" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><DiCss3 /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">CSS</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="92" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime">
                                                <IoLogoJavascript />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">JavaScript with ES</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="87" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon flex mt-2 mr-1 text-base customLime"><FaBootstrap />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">Bootstrap & JQuery</h1>
                                                <h3 className="skill_acc textMouse  text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="88" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="innerRight">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><FaReact /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">React JS</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="85" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><SiNextdotjs /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">Next JS</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="85" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime">
                                                <SiTailwindcss />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">Tailwind</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="89" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon flex mt-2 mr-1 text-base customLime"><FiMonitor />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium textMain">Front-End Web Development</h1>
                                                <h3 className="skill_acc textMouse  text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="90" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skillWrapperRight customShadow p-5 my-4  rounded-2xl  bg-white">
                            <div className="skill_Left_skillTitle text-base font-semibold customLime m-auto text-center my-3">Graphics Development</div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner sm:block md:block lg:flex lg:justify-around ">
                                    <div className="innerLeft mr-4">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><MdPalette /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	 textMain">Graphics Design</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="88" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><GiPencilBrush /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">UI/UX Design</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="85" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime">
                                                <HiPhoto />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Photo Editing</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Intermediate</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="68" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon flex mt-2 mr-1 text-base customLime"><MdVideoSettings />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Video Editing</h1>
                                                <h3 className="skill_acc textMouse  text-xs ">Intermediate</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="60" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="innerRight sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><MdAnimation /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	 textMain">Animation</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Beginner</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="20" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><FaPencilRuler /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Illustration</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Intermediate</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="62" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime">
                                                <HiPencilSquare />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Branding Design</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Intermediate</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="65" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon flex mt-2 mr-1 text-base customLime"><FaDigitalTachograph />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Digital Art</h1>
                                                <h3 className="skill_acc textMouse  text-xs ">Intermediate</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="60" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skillWrapperRight customShadow p-5 my-8  rounded-2xl  bg-white">
                            <div className="skill_Left_skillTitle text-base font-semibold customLime m-auto text-center my-3">More Skills</div>
                            <div className="skill_Left_skills">
                                <div className="skill_inner sm:block md:block lg:flex lg:justify-around">
                                    <div className="innerLeft mr-4">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><HiPresentationChartLine /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	 textMain">Presentaion</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="95" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><MdOutlineSupportAgent /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Virtual Assistant</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="90" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon flex mt-2 mr-1 text-base customLime"><SiReacthookform />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">Copy-Typing</h1>
                                                <h3 className="skill_acc textMouse  text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="95" max="100"></progress> */}
                                            </div>
                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime">
                                                <SiMicrosoftoffice />

                                            </div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">MS Office</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Advance</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="92" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="innerRight mr-4">
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><SiGooglemarketingplatform /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	 textMain">Marketing</h1>
                                                <h3 className="skill_acc  text-xs	textMouse ">Beginner</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="25" max="100"></progress> */}
                                            </div>

                                        </div>
                                        <div className="singleSkill_left_01 my-4 flex">
                                            <div className="skill_icon mt-2 mr-1 text-base customLime"><FaSearchDollar /></div>
                                            <div className="skillData">
                                                <h1 className="skill_head text-base font-medium	textMain">SEO</h1>
                                                <h3 className="skill_acc textMouse text-xs ">Beginner</h3>
                                                {/* <progress className="progress progress-cus-success w-56" value="25" max="100"></progress> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
