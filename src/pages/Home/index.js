import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {Modal, Button, ButtonToolbar} from "react-bootstrap";

import Logo from "../../assets/logo.svg";



import { Container } from "./styles";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
      handleNameChange = ( event ) => { 
        this.setState ({name: event.target.value}); 
        } 
      handleSenhaChange = ( event ) => { 
        this.setState ({senha: event.target.value}); 
        } 
    
      handleSubmit = ( event ) => { 
        event.preventDefault (); 
        const {name, senha} = this.state 
        console.log(name,senha);
        } 
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            <p/>
            Senha: <input type="text" value={this.state.senha} onChange={this.handleSenhaChange} />
          </label>
          <p/>
          <input type="submit" value="Login" />
        </form>
      );
    }
  }
  
  class SaidaDePlacasModel extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              <NameForm/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class EntradaDePlacasModel extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
            <NameForm/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  class ConsertoDePlacasModel extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
            <NameForm/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }




  class Home extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <Container>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Saída de placas
          </Button>
          
          <SaidaDePlacasModel
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Conserto de placas
          </Button>
          
          <ConsertoDePlacasModel
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Entrada de placas
          </Button>
          
          <EntradaDePlacasModel
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
        </Container>
      );
    }
  }
  


export default withRouter(Home);