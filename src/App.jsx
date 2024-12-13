import React, { useEffect, useState } from "react";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import "./App.css";
//icon import
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from '@mui/icons-material/ArrowRight'; 
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import TelegramIcon from '@mui/icons-material/Telegram';
//picture import
import logo from "./assets/picture/logo.png";
import Coffee from "./assets/picture/1.jpg";
function App() {
  return (
    <>
      {/* heder */}
      <div id="bg" />
      <Row>
      <div id="bg" />
        <Col className="col-1">
          <MenuIcon id="Menu" />
        </Col>
        <Col className="col-1">
          <img src={logo} alt="logo" id="logo" />
        </Col>
        <Col className="col-9">
        
          <h5 className="component">Home</h5>
          <h5 className="component">About us</h5>
          <h5 className="component">Products</h5>
          <h5 className="component">Contacts</h5>
        </Col>
        <Col>
          <SearchIcon id="SearchIcon" />
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          <h1 id="h1-Freshly">Freshly</h1>
          <h1 id="h1-Coffee">Coffee</h1>
        </Col>

        <Col className="col-3">
          <img src={Coffee} alt="Coffee" id="Coffee-Picture" />
        </Col>
        <Col className="col-1">
        <InstagramIcon className="icon-App"/>
        <TwitterIcon className="icon-App"/>
        <TelegramIcon className="icon-App"/>
        </Col>
        
      </Row>
      <Row>
        <Col className="col-3"/>
        <Col className="col-5 ">
        <Button variant="outline-dark"id="Explore-Button">Explore</Button>
        </Col>
        <Col className="col-4">
        
        <ArrowLeftIcon id="icon-Left"/>
        <ArrowRightIcon id="icon-Right"/>
        </Col>
      </Row>
    </>
  );
}

export default App;
