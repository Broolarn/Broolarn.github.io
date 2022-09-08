import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    media: {
        height: 240,
        objectFit: "scale-down"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const ItemDisplay = ({ project }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Card className={classes.root} onClick={handleToggle}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.video.src}
                    component="img"
                    title={project.video.alt}
                />

                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {project.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {project.skills.programming.join(',')},{project.skills.technique.join(',')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {project.links.report !== '' && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => window.open(project.links.report, '_blank')}
                    >
                        Project report
                    </Button>
                )}
                {project.links.code !== '' && (
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => window.open(project.links.code, '_blank')}
                    >
                        Source
                    </Button>
                )}
            </CardActions>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <img src={project.video.src} alt={project.video.alt} />
            </Backdrop>
        </Card>
    );
};

ItemDisplay.propTypes = {
    project: PropTypes.shape({
        video: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
        category: PropTypes.string,
        title: PropTypes.string,
        skills: PropTypes.shape({
            programming: PropTypes.arrayOf(PropTypes.string),
            technique: PropTypes.arrayOf(PropTypes.string),
        }),
        description: PropTypes.string,
        links: PropTypes.shape({ report: PropTypes.string, code: PropTypes.string }),
    }),
};
