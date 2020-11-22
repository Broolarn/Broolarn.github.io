import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import items from '../items.json';

export const ProjectsContex = createContext();

export const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState(items);
    console.log(projects);
    return (
        <ProjectsContex.Provider value={[projects, setProjects]}>
            {children}
        </ProjectsContex.Provider>
    );
};

ProjectsContextProvider.propTypes = {
    children: PropTypes.node,
};
