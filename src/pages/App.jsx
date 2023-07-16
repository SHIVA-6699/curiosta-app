
import "../App.css";

import {Container,Row,Col, Button,Image,} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router";
import logo1 from "../assets/image/img.png"
export default function App() {
const navs=useNavigate();

  return (
    <>
 
  <Container fuild="true">
    <Row className='text-center'>
        <Col xs={12} md={12} lg={4} xl={4}>
         <Image src={logo1} thumbnail
               alt="Navbar image"
               width={750} 
               height={200}
        />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={4}>
        <p className='h5 text-success text-center'>Let's make things together!</p>
        <br></br>
        <br></br>
        <p className='h6 text-muted text-center'>unlimted opportuninty to unleash your creative side just a click Away! </p>
        </Col>
    </Row>

    <Row className='text-center'>
   
      <Col xs={12} md={12} lg={4}>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
       <div>


        <Button variant='success' style={{"width":"20rem"}} onClick={()=>navs('/Login')}>Get Started!</Button>
       </div>

      </Col>
    </Row>
  </Container>

 
     </>
  );
}
