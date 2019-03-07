import React from "react";

// Material UI
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';




const Landing = () => (
  <div align='center'>
    <h1 style={{ textDecoration: 'none', color: '#64ffda' }} >
      Connections </h1>

    <h2 style={{ textDecoration: 'none', color: '#bdbdbd' }}> Contacts | QR </h2>

    <p style={{ textDecoration: 'none', color: '#bdbdbd' }}>
      Your professional connections, by QR code.
  </p>
    
    <h3 style={{ textDecoration: 'none', color: '#ffffff' }}>
      Developed by: <br /></h3>

    {/* Sienna's LinkedIn and GitHub */}
    <Tooltip title="LinkedIn" placement="left-start">
      <Button><a style={{ textDecoration: 'none', color: '#ffffff' }} href="https://www.linkedin.com/in/sienna-spargo-534703b8/">Sienna</a></Button>
    </Tooltip>
    <Tooltip title="GitHub" placement="bottom">
      <Button><a style={{ textDecoration: 'none', color: '#bdbdbd' }} href="https://github.com/siennaspargo">Spargo</a></Button>
    </Tooltip>


    {/* Project Repo */}
    <Tooltip title="Project Repo" placement="bottom">
      <Button><a style={{ textDecoration: 'none', color: '#64ffda' }} href="https://github.com/rafblanco/business_qr_card.git">&</a></Button>
    </Tooltip>

    {/* Rafael's LinkedIn and GitHub */}
    <Tooltip title="LinkedIn" placement="bottom">
      <Button><a style={{ textDecoration: 'none', color: '#ffffff' }} href="https://www.linkedin.com/in/rafael-blanco-13b6a76b/">Rafael</a></Button>
    </Tooltip>
    <Tooltip title="GitHub" placement="right-start">
      <Button><a style={{ textDecoration: 'none', color: '#bdbdbd' }} href="https://github.com/rafblanco">Blanco</a></Button>
    </Tooltip>


    <br />
    <br />
    <br />
    <br />
    <br />


    <img alt="scanMe" src={require('../../images/scanmeQR.png')} />

    <br />
    <br /><br /><br /><br /><br />

    <p style={{ textDecoration: 'none', color: '#bdbdbd' }}>
      Utilized React.js, Node.js and Express Web Server
    <br />
      Backed by MongoDB and Mongoose ORM
     <br />
      Contains both GET and POST routes for retrieving contact data
      <br />
      UI/UX designed with Material UI, MVC structure
      <br />
      Authenticated with Firebase, Deployed with Heroku
  </p>


  </div>
);

export default Landing;
