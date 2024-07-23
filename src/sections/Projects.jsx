import React from 'react'
import ProjectCard from "../component/ProjectCard"
const projects = [
    {
        name: "SyncSupport",
        description: "Platform to solving all your IT queries using Natural Learning Processing (NLP)",
        url: "https://github.com/Karim-codes/FYP-Project-SyncSupport",
        img: "/proj-logos/projects.png"
    },
    {
        name: "Blog",
        description: "Blog where users can post blogs or read blogs on different topics",
        url: "https://github.com/Karim-codes/Blogt",
        img: "/proj-logos/blog.png"
    },
    {
        name: "Nuzlah E-comerce",
        description: "All islamic related shopping website, from thobes, books and more",
        url: "https://github.com/Karim-codes/Nuzlah",
        img: "/proj-logos/nuzlah-logo.png"
    },
    {
        name: "Bill Manager",
        description: "Platform to solving all your financial issues at one hand allowing to see all your spendings",
        url: "https://github.com/Karim-codes/Bill-Mnagaer",
        img: "/proj-logos/blogo.webp"
    },
]
const Projects = () => {
  return (
    <>
        <h1 className='text-4xl text-left font-bold mb-2'>Recent Projects</h1>
        <ul className=' bg-white gap-10 text-left rounded-xl p-4 '>
            {projects.map((project, i) =>(
                <li key={i}>
                    <ProjectCard 
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        img={project.img}
                    />
                </li>
            ))}
            
        </ul>
    </>
  )
}

export default Projects