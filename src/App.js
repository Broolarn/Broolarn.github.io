import React from 'react';
import { Navbar } from './components/Navbar';
import { Container, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { CardGenerator } from './pages/CardGenerator';
import { ProjectsContextProvider } from './Contexts/Projects';
import { theme } from './theme';
import { Aboutme } from './pages/Aboutme';
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProjectsContextProvider>
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {/* <Navbar /> */}
                        <Grid item xs={11}>
                            <Aboutme />
                        </Grid>
                        <Grid item xs={11}>
                            <CardGenerator />
                        </Grid>
                    </Grid>
                </ProjectsContextProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
