import React from "react";
import { Offcanvas ,Button,Col,Container,Tabs,Tab,Image,ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { useNavigate } from "react-router";


import logo3 from '../assets/image/logo3.jpg'


const Home=()=>{
    const [show, setShow] = useState(false);
    const navigate=useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    const [show1,setShow1]=useState(false);

    const handleShow1=()=>setShow1(true)
    const handleClose1=()=>setShow1(false)
   return(
    <>
    <Container >
        <div className="size">
      
        <Col className="" sm={8} md={6} lg={4}> 

         <Button style={{"fontSize":"1.4rem"}} variant="light" onClick={handleShow}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack" viewBox="0 0 16 16">
  <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"/>
  <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
  <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg>
      </Button>


      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton className="m-3 ms-auto">
         
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
            <li className="h6" id="list-item"> <i className="fa-solid fa-plus h4"></i> Inbound Items</li>
            <li className="h6" id="list-item"><i className="fa-sharp fa-solid fa-location-dot"></i> Approval Request</li>
            <li className="h6" id="list-item"><i className="fa-light fa-file"></i> Fulfi Request</li>
            <li className="h6" id="list-item"><i className="fa-solid fa-folder"></i> Mange Mastors</li>
            <li className="h6" id="list-item"><i className="fa-regular fa-book"></i> Inventory</li>
            <li className="h6" id="list-item" ><i className="fa-thin fa-flag"></i>
             </li>
          
        </ul>
            
            <Container>

<div className="size">
  

  <Col className="" sm={8} md={6} lg={4}> 

   <Button variant="none" onClick={handleShow1} className="h6  text-dark d-flex w-full" style={{"marginTop":"0rem"}}>
  Reports (prees here)
</Button>

       


<Offcanvas show={show1} onHide={handleClose1} >
<div className="man">


<Image src={logo3} roundedCircle style={{"width":"2.5rem","height":"2.5rem"}} className="ms-auto me-3 mt-3"/>
</div>
    <p className="h4 text-center">Reports </p>
   
  <Offcanvas.Header closeButton className="me-3 ms-auto">
   
  </Offcanvas.Header>
  <Offcanvas.Body>
   <div className="report-body">

    <p className="h6 text-start">inventory Reports</p>
    <br></br>
    <div className="d-flex flex-row gap-5 ms-5 flex-wrap">

     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
        <h5 className="mt-1">393</h5>
        <br />
        <p className="h6">Number of unqiue SKU </p>
     </div>
     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
     <h5 className="mt-1 text-danger">4</h5>
        <br />
        <p className="h6 text-success">Number of unqiue SKU </p>
     </div>
    </div>
   
   <br></br>
   <div className="issuance">

    <p className="h6 text-start">Issuance Reports</p>
    <br></br>
    <div className="d-flex flex-row gap-5 ms-5 flex-wrap">

     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
     <h5 className="mt-1 text-primary">94%</h5>
        <br />
        <p className="h6">Number of unqiue SKU </p>
     </div>
     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
     <h5 className="mt-1">393</h5>
        <br />
        <p className="h6">Number of unqiue SKU </p>
     </div>
    </div>
   </div>
   <br></br>
   <div className="inwarding">

    <p className="h6 text-start">inwarding Reports</p>
    <br></br>
    <div className="d-flex flex-row gap-5 ms-5 flex-wrap">

     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
     <h5 className="mt-1">20</h5>
        <br />
        <p className="h6">Number of unqiue SKU </p>
     </div>
     <div style={{"width":"7rem","height":"7rem"}} className="text-center shadow-lg">
     <h5 className="mt-1">3</h5>
        <br />
        <p className="h6">Number of unqiue SKU </p>
     </div>
    </div>
   </div>
 
   </div> 
  </Offcanvas.Body>
   <Button variant="primary"className="rounded-5 m-1" onClick={()=>navigate('/Login')}>Previous</Button>
</Offcanvas>



</Col>

</div>
  </Container>
             
             
        </Offcanvas.Body>
      </Offcanvas>
      <br></br>
<div className="man">

    <p className="h-2 ms-4" style={{"fontSize":"1.5rem"}}>Hello Shiva 👋</p>
    <Image src={logo3} roundedCircle style={{"width":"2rem","height":"2rem"}} className="ms-auto"/>
</div>

    <br></br>
      <div className="box">

        <div className="rounded-4  "style={{"height":"12rem","width":"20rem","background":"#1D747E"}}>
          <p className="text-white text-center mt-1">Choose Activity</p>
          <div className="man">
            <div className="rounded bg-light ms-5 text-center" style={{"width":"5rem","height":"3rem"}}>Request</div>
            <div className="rounded bg-light ms-5 text-center" style={{"width":"5rem","height":"3rem"}}>Fulfill</div>
            <div className="rounded bg-light ms-5 text-center" style={{"width":"5rem","height":"3rem"}}>Accept Return</div>
            <div className="rounded bg-light ms-5 text-center" style={{"width":"5rem","height":"3rem"}}>inbloud</div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
   
      
<Container className="shadow-lg rounded-5">

      <div className="d-flex justify-content-center bar">

      <Tabs variant="pills" className="rounded" defaultActiveKey={"home"}>
      <Tab eventKey="home" title="Pending" className="bg-success">
         
      </Tab>
      <Tab eventKey="profile" title="Active" className="dark">
       
      </Tab>
      <Tab eventKey="contact" title="Closed">
       
      </Tab>
      
    </Tabs>
      </div>
</Container>

<br></br>
<br></br>
<div className="box">
 
<div className="rounded-4  "style={{"height":"12rem","width":"20rem","background":"#1D747E"}}>
  <p className="text-white text-center mt-1">Choose Activity</p>
  <div className="man">
  <Image src={logo3} roundedCircle style={{"width":"2rem","height":"2rem"}} className="ms-4"/><p className="m-1 text-light" style={{"fontSize":".9rem"}}>Cosmic Boy</p>
  <Button variant="success ms-auto me-3" size="sm">View</Button>
  </div>
  <br></br>
  <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">shiva1</ListGroup.Item>
      <ListGroup.Item as="li">hari</ListGroup.Item>
      <ListGroup.Item as="li">spence</ListGroup.Item>
    </ListGroup>
</div>
</div>
      
      
</Col>
        </div>
    </Container>
    </>
   )
}
export default Home;