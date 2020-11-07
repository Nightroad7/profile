import React from 'react';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#000',
        minHeight: '10vh',
        display: 'flex',
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
        width: '20%'
    },
    nav_link: {
        color: "#ffffff",
        textDecoration: 'none',
        letterSpacing: '3px',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    li: {
        listStyle: 'none'
    }
}));
const Header = (props) => {
    const classes = useStyles();

    return (
        <nav className={classes.root} >
            <div className={classes.icon_container} >
                <Twitter style={{ color: 'white', padding: '15px' }} />
                <Facebook style={{ color: 'white', padding: '15px' }} />
                <Instagram style={{ color: 'white', padding: '15px' }} />
            </div>
            <ul className={classes.header_opts}>
                <li className={classes.li}><a className={classes.nav_link} href="/">Home</a></li>
                <li className={classes.li}><a className={classes.nav_link} href="/about">More</a></li>
                {/* <li className={classes.li}><a className={classes.nav_link} href="gallery">Gallery</a></li>
                <li className={classes.li}><a className={classes.nav_link} href="/contact">Contact Me</a></li> */}
            </ul>
        </nav>
    )
};

export default Header;