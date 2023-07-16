import React from "react";
import { Container,Row,Col,Form, Button,Image} from "react-bootstrap";
import logo from '../assets/image/img.png';
import logo2 from '../assets/image/google.png';
import { useNavigate } from "react-router";
const Login=()=>{
const  navs=useNavigate();
    return(
        <>
   
    <Container >
        <Row>
            <Col xs={12} md={4}>
            <img src={logo} className='img-thumbnail rounded' alt='shiva'/>
            </Col> 
        </Row>
        <Row>
            <Col md={4}>
                <Form>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter your Email" className="ms-5 mt-5 w-75" style={{"height":"3rem"}} required/>
                        <Form.Control type="text" placeholder="Enter your Password" className="ms-5 mt-5 w-75" style={{"height":"3r<em"}} required/>
                        <br></br>
                        <br></br>
                        <div className="d-flex justify-content-center">
                            
                        <Button variant="success" style={{"width":"20rem"}} onClick={()=>{
                            navs('/Home')
                        }}>Submit</Button>
                        </div>
                        <br></br>
                       
                         <p className="h-2 text-center">or</p>

                         <Form.Label className="d-flex flex-row justify-content-center">
                           
                                
                            <Image src={logo2} roundedCircle style={{"width":"3rem","height":"3rem"}} className=""/><p className="m-2 " style={{"fontSize":"1.2rem"}}>Sign With Google</p>
                            </Form.Label>
                            <br></br>
                            
                            <p className="text-center">Don't have account ? Sign up</p>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
        </>
    )

}
export default Login;
