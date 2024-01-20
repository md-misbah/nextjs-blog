import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { LuLanguages } from "react-icons/lu";
import { FaLanguage } from "react-icons/fa6";






export default function EdunLang() {
    return (
        <section>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <div className="aboutHeadingTitle mb-12">
                        <h3 className='subTitle mx-auto text-center text-sm textAlt mb-1.5'>My Academic Career</h3>
                        <h1 className="headTitleLine mx-auto text-2xl text-center custom font-semibold">Education & Languages</h1>
                    </div>
                    <div className="eduLDataWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-8">

                        <div className="EduWrap csBg p-8  customShadow rounded-2xl w-11/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 ">

                            <div className="eduTitle flex flex-wrap">
                                <FaGraduationCap className="customLime text-3xl" />
                                <h1 className="customLime text-2xl font-semibold ml-2" >Education</h1>
                            </div>

                            <div className="eduCard customBoxBorder p-4 mt-4 rounded-xl">
                                <div className="educard_title flex justify-between">
                                    <div className="edutitleM flex customLime font-semibold	">
                                        <LiaGraduationCapSolid className='customLime text-2xl mr-1' /> <span classname="font-semibold">HSC</span>
                                    </div>
                                    <span>(2024-2025)</span>
                                </div>
                                <div className="educard_desc">
                                    <div className="scResulc flex justify-between">
                                        <h1 className="font-semibold">Background: <span className='font-normal'>Science</span>
                                        </h1>
                                        <h1 className="font-semibold customLime">GPA: <span>(Not Yet)</span>
                                        </h1>

                                    </div>
                                    <h1 className="font-semibold">Institute: <span className='font-normal'>BAF Shaheen College Dhaka</span></h1>
                                    <h1 className="font-semibold">Location: <span className='font-normal'>Dhaka, Bangladesh</span></h1>
                                </div>
                            </div>
                            <div className="eduCard customBoxBorder p-4 mt-4 rounded-xl">
                                <div className="educard_title flex justify-between">
                                    <div className="edutitleM flex customLime font-semibold	">
                                        <LiaGraduationCapSolid className='customLime text-2xl mr-1' /> <span classname="font-semibold">SSC</span>
                                    </div>
                                    <span>(2022-2023)</span>
                                </div>
                                <div className="educard_desc">
                                    <div className="scResulc flex justify-between">
                                        <h1 className="font-semibold">Background: <span className='font-normal'>Science</span>
                                        </h1>
                                        <h1 className="font-semibold customLime">GPA: <span>5.00</span>
                                        </h1>

                                    </div>
                                    <h1 className="font-semibold">Institute: <span className='font-normal'>Monipur High School & College (Branch - 02)</span></h1>
                                    <h1 className="font-semibold">Location: <span className='font-normal'>Dhaka, Bangladesh</span></h1>
                                </div>
                            </div>

                        </div>
                        <div className="EduWrap csBg p-8 customShadow rounded-2xl w-11/12 m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 ">

                            <div className="eduTitle flex flex-wrap">
                                <LuLanguages className="customLime text-3xl" />
                                <h1 className="customLime text-2xl font-semibold ml-2" >Languages</h1>
                            </div>

                            <div className="eduCard customBoxBorder p-4 mt-4 rounded-xl">
                                <div className="singleProgress mb-4">
                                    <div className="educard_title flex justify-between">
                                        <div className="edutitleM flex customLime font-semibold	">
                                            <FaLanguage className='customLime text-2xl mr-1' /> <span classname="font-semibold">English</span>
                                        </div>
                                        <span>(Fluent)</span>
                                    </div>
                                    <progress className="progress progress-cus-success" value="85" max="100"></progress>
                                </div>
                                <div className="singleProgress mb-4">
                                    <div className="educard_title flex justify-between">
                                        <div className="edutitleM flex customLime font-semibold	">
                                            <FaLanguage className='customLime text-2xl mr-1' /> <span classname="font-semibold">Bengali</span>
                                        </div>
                                        <span>(Native)</span>
                                    </div>
                                    <progress className="progress progress-cus-success" value="100" max="100"></progress>
                                </div>
                                <div className="singleProgress mb-4">
                                    <div className="educard_title flex justify-between">
                                        <div className="edutitleM flex customLime font-semibold	">
                                            <FaLanguage className='customLime text-2xl mr-1' /> <span classname="font-semibold">Hindi</span>
                                        </div>
                                        <span>(Conversational)</span>
                                    </div>
                                    <progress className="progress progress-cus-success" value="60" max="100"></progress>
                                </div>
                                <div className="singleProgress">
                                    <div className="educard_title flex justify-between">
                                        <div className="edutitleM flex customLime font-semibold	">
                                            <FaLanguage className='customLime text-2xl mr-1' /> <span classname="font-semibold">Urdu</span>
                                        </div>
                                        <span>(Conversational)</span>
                                    </div>
                                    <progress className="progress progress-cus-success" value="60" max="100"></progress>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
