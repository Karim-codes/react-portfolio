import React from 'react';
import { ChevronRight } from 'lucide-react';
const ProjectCard = ({ name, description, url, img }) => {
    return (
        <a 
            className=" group flex border-b py-8
            px-2 rounded-md hover:bg-slate-100 mt-2 transition 0.02s cursor-pointer"
        >
            <img src={img} 
                alt={name} 
                height="50" 
                width="50" 
                className="object-contain" />
            <div className='flex flex-col flex-grow'>
                <p className="group-hover:text-red-400">{name}</p>
                <p className="text-secondary-foreground">{description}</p>

            </div>
            <div>
                <ChevronRight/>
            </div>
        </a>
    );
};

export default ProjectCard;
