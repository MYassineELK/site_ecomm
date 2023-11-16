import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import "./navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Modepage } from '../darckmode/Contex';
import { useContext } from 'react';

function OffcanvasExample() {
  const {dark,setdark}=useContext(Modepage)
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Accueil</Navbar.Brand>
            <label className="switch">
  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r={5} cy={12} cx={12} /><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" /></g></svg></span>
  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg></span>   
  <input type="checkbox" className="input" onClick={()=>setdark(!dark)}/>
  <span className="slider" />
</label>

          
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className=" w-64"
            >
    
    <Offcanvas.Header closeButton >

                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1  pe-3">
                  <Nav.Link href="/" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Accueil</p></Nav.Link>
                  <Nav.Link href="/Tp1" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Tp1 raect</p></Nav.Link>
                  <Nav.Link href="/Tp2" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Tp2 raect</p></Nav.Link>
                  <Nav.Link href="/Tp3" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Tp3 raect</p></Nav.Link>
                  <Nav.Link href="/Tp4" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Tp4 raect</p></Nav.Link>
                  <Nav.Link href="/Tp5" ><p className=' text-xl text-gray-700 hover:border-l-4 hover:border-l-red-400  hover:w-24'>Tp5 raect</p></Nav.Link>

                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;