import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
import UMG from '../../assets/umg.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        backgroundColor: '#FBEAEB',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    icon_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    header_opts: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '30%'
    },
    nav_link: {
        color: "#000",
        textDecoration: 'none',
        letterSpacing: '3px',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    li: {
        listStyle: 'none'
    },
    name_container: {
        background: 'blue',
        width: '100%',
        height: '15vh'
    },
    main_container: {
        display: 'flex',
        flexDirection: 'row',
    },
    textContainer: {
        backgroundColor: 'white',
        width: 'inherit',
        height: 'inherit',
        display: 'flex'
    },
    image: {
        width: 'inherit',
        height: 'inherit',
        objectFit: 'cover'
    }
}));

const Main = (props) => {
    const classes = useStyles();
    return (
        <Card elevation={10} className={classes.root}>
            <div className="name" >
                Dulce María Coy
            </div>
            <div className={classes.main_container} >
                <div className="container1">
                    <div className={classes.textContainer} >
                        <h1 style={{ margin: 'auto' }} >Arquitectura de computadoras</h1>
                        <div className="overlay1">
                            <div className="text1">Ingeniería en Sistemas</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={UMG} alt="umg" className={classes.image} />
                    <div className="overlay">
                        <div className="text">Ingeniería en Sistemas</div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Main;