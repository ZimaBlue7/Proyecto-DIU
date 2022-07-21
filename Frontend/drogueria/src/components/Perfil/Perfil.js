import React, { Fragment } from 'react'
import Container from "@mui/material/Container";
import '../../Styles/Perfil/Perfil.css';
import imagenes from '../../assets/imagenes.js'; 
import Footer from "../Home/Footer";

import { Form, Button, Row, Col } from "react-bootstrap";

const Perfil = () => {
  return (
    <Container>

<section className="NavP"  >
              {/* Direciones e ingreso al perfil del usuario */}
              {/* <BarraNavegacion/> */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={imagenes.Logo} alt="Logo" className='Logo1' width="30" height="24"/>
        </a>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Contacto</a>
          </li>
          
      </ul>
    </div>
    <div class="btn-group">
  <button  type="button" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={imagenes.perfil} alt="Logo" className='perfil' width="50" height="45"/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Ajustes</a></li>
    <li><a class="dropdown-item" href="#">Ayuda</a></li>
    <li><a class="dropdown-item" href="#">Preferencias</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Cerrar Sesion</a></li>
  </ul>
</div>
  </div>
  
</nav>
              
    </section>

    <section className="cuadro">

      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
    </section>

    <section className='futer'>
        <Footer/>
    </section>

    </Container>
  )
}

export default Perfil