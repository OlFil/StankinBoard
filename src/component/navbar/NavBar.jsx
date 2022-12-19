import React, { useState, Component } from "react";
import CreateOrder from "../../pages/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import {useCollectionData} from 'react-firebase-hooks/firestore'


function NavBar() {
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const showCart = () => <CreateOrder show={true} onHide={handleClose} animation={false} handleModal={handleClose} />

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            <span className="stankin">СТАНКИН</span> ДОСКА
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <a href="/team" className="nav-item nav-link active me-5">
                О проекте
              </a>
              <button className="btn btn-primary me-5" onClick={handleShow}>
                Создать объявление
              </button>

              <a href="/login">
                {" "}
                <button className="btn btn-outline-primary me-5">
                  {" "}
                  Вход / Регистрация{" "}
                </button>
              </a>
            </ul>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <CreateOrder title={"Создать  объявление"} />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Название</Form.Label>
                    <Form.Control 
                    type="text"
                    autoFocus
                     />
                    <Form.Label>Фото</Form.Label>
                    <Form.Control type="file" />
                    <Form.Label>Описание</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3}
                    />
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Контакт для связи</Form.Label>
                    <Form.Control 
                    type="text"  
                      />

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Group className="mb-3">
                      <Form.Label>Адрес</Form.Label>
                          <Form.Select >
                          <option>Общежитие №8</option> 
                          <option>Общежитие №7</option>
                          <option>Общежитие №6</option>
                          <option>Общежитие №4</option>
                          <option>Общежитие №3</option>
                          <option>Общежитие №1</option>

                          </Form.Select>
                    </Form.Group>
                      
                    </Form.Group>
                   
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Добавить
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
