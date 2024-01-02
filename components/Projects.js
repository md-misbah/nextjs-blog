import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { FaRegPaperPlane } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Airbnb from '../images/airbnb.png';
import Halloween from '../images/halloween.png';
import Adventure from '../images/adventure.png';
import TodoApp from '../images/to-do-app.png';
import Breakout from '../images/breakout.png';
import Mishbir from '../images/mishbir.png';
import Gym from '../images/gym.png';
import TastyTreat from '../images/tastyTreat.png';
import Travel from '../images/travel.png';




const projectImg = [Airbnb, Halloween, Adventure, TodoApp, Breakout, Gym, Mishbir, TastyTreat, Travel];

const projectName = ["Airbnb V2.0", "Halloween", "Adventure", "To-Do App", "Break-Out", "Gymnasium", "Mishbir", "TastyTreat", "Travel web"];

const projectDesc = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illo sapiente nesciunt nemo architecto optio."];

const projectTag = ["Next App", "React App", "Personal Project", "JavaScript (App)", "JavaScript (Game)"];

const visit = ["Visit Site"]

const projectLink = ["https://airbnb-clone-gamma-jet.vercel.app/", "https://md-misbah.github.io/halloween/", "https://md-misbah.github.io/adventure/", "https://md-misbah.github.io/To-Do-App/", "https://md-misbah.github.io/Breakout/", "https://md-misbah.github.io/gymnasium/", "https://md-misbah.github.io/mishbir/", "https://md-misbah.github.io/foodWeb/", "https://md-misbah.github.io/travelWeb/", "https://md-misbah.github.io/travelWeb/"];

const gitUrl = ["https://github.com/md-misbah"];







const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export default function Projects() {
    return (
        <section id="projects" className={poppins.className}>
            <div className="sm:container mx-auto">
                <div className="projectsWrapper w-11/12 m-auto">
                    <div className="projectHeadingTitle mb-12">
                        <h3 className='projectsSub_Title mx-auto text-center text-sm textAlt mb-1.5'>My Projects</h3>
                        <h1 className="projectsHeadTitleLine mx-auto text-2xl text-center customLime font-semibold">Check Out My Previous Projects</h1>
                    </div>
                    <div className="projectsWrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 my-6">

                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[0]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[0]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[0]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[0]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[1]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[1]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[1]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[2]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[2]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[2]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[3]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[3]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[3]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[3]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[4]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[4]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[4]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[4]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[5]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[5]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[5]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[6]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[6]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[6]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[7]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[7]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[7]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper bg-white customShadow p-6 rounded-2xl">
                            <div className="singleProjectImg w-12/12 h-44 rounded-xl">
                                <Image
                                    src={projectImg[8]}
                                    className="projectImagecustom"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{projectName[8]}</h1></div>
                            <div className="singleProjectDec text-justify text-sm font-light">{projectDesc[0]}</div>
                            <div className="singleProjectTags flex justify-between mt-3">
                                <div className="singleProjectMeta">
                                    <h1 className="customBorder p-2 text-sm customLime">{projectTag[2]}</h1>
                                </div>
                                <div className="singleProjectLink p-2">
                                    <a href={projectLink[8]} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                                        <div className="btnTxt customLime">{visit}</div>
                                        <div className="btnIco ml-1 mt-1"><FaRegPaperPlane className='customLime' /></div>
                                    </a>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="projectGitButton mt-12 w-fit mx-auto">
                        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                            <div className="absolute inset-0 w-3 buttonBgLime transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <a href={gitUrl[0]} target="_blank" rel="noopener noreferrer" >
                                <div className="text-base relative customLime group-hover:text-white flex justify-center">
                                    <div className="btnTxt">Visit My Github</div>
                                    <div className="btnIco ml-1 mt-1 text-base"><SiGithub /></div>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
