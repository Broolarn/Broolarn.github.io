import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';
import { ItemDisplay } from '../components/ItemDisplay';
import { ProjectsContex } from '../Contexts/Projects';

export const CardGenerator = () => {
    const [projects] = useContext(ProjectsContex);

    const createProjects = () => {
        return projects.records.map((item) => {
            return (
                <Grid item key={item.title}>
                    <ItemDisplay project={item} key={item.title} />
                </Grid>
            );
        });
    };
    return (
        <div id="ItemDisplay">
            <Grid container spacing={3} justify="center">
                {createProjects()}
            </Grid>
        </div>
    );
};
