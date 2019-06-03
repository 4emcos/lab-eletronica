import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {Modal, Button, ButtonToolbar} from "react-bootstrap";
import { Container } from "./styles";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Formik } from "formik";
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup'


const schemaSaidaDePlacasFunc = yup.object({
  lcgDeSaida: yup.string().required(),
  placaDeSaida: yup.string().required(),
  localDeSaida: yup.string().required(),
  respSaida: yup.string().required(),
  respReceber: yup.string().required(),
});


const schemaConsertoDePlacasFunc = yup.object({
  lcgConcerto: yup.string().required(),
  placaDeConserto: yup.string().required(),
  numMaquina: yup.string().required(),
  localConserto: yup.string().required(),
  dataDeDefeito: yup.string().required(),
  respDefeitoConserto: yup.string().required(),
  descDefeitoPlaca: yup.string().required(),
  descConserto: yup.string().required(),
  respConserto: yup.string().required(),
  
});

const schemaEntradaDePlacasFunc = yup.object({
  placaEntrada: yup.string().required(),
  qtdPecas: yup.string().required(),
  nomePecaMaq: yup.string().required(),
  respDeixar: yup.string().required(),
  respReceber: yup.string().required(),
});


class backend extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}


  class SaidaDePlacasFunc extends Component {
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
                  Saída de placas
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/*<h4>Centered Modal</h4>*/}
                <Formik
                validationSchema={schemaSaidaDePlacasFunc}
                onSubmit={console.log}
                initialValues={{
                  localDeSaida : 'Embratex'
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>LCG</Form.Label>
                        <Form.Control
                          type="text"
                          name="lcgDeSaida"
                          value={values.lcgDeSaida}
                          onChange={handleChange}
                          isValid={!!errors.lcgDeSaida}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Nome da placa</Form.Label>
                        <Form.Control
                          type="text"
                          name="placaDeSaida"
                          value={values.placaDeSaida}
                          onChange={handleChange}
                          isValid={!!errors.placaDeSaida}
                        />

                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>


                      <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                        <Form.Label>Local de saída</Form.Label>
                        <InputGroup>
                          {/* <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                          </InputGroup.Prepend>*/}
                          <Form.Control
                            type="text"
                            name="localDeSaida"
                            value={values.localDeSaida}
                            onChange={handleChange}
                            isInvalid={!!errors.localDeSaida}
                            as="select">

                            <option>Embratex</option>
                            <option>Wentex</option>
                            <option>Wentex</option>

                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            {errors.localDeSaida}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="6" controlId="validationFormik03">
                        <Form.Label>Responsável pela saída</Form.Label>
                        <Form.Control
                          type="text"
                          name="respSaida"
                          value={values.respSaida}
                          onChange={handleChange}
                          isInvalid={!!errors.respSaida}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.respSaida}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>Responsável por receber</Form.Label>
                        <Form.Control
                          type="text"
                          
                          name="respReceber"
                          value={values.respReceber}
                          onChange={handleChange}
                          isInvalid={!!errors.respReceber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.respReceber}
                        </Form.Control.Feedback>
                      </Form.Group>

                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik> 
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
      );
    }
  }
  
  class EntradaDePlacasFunc extends Component {
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
              Entrada de placas
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<h4>Centered Modal</h4>*/}
            <p>
            <Formik
              validationSchema={schemaEntradaDePlacasFunc}
              onSubmit={console.log}
              initialValues={{

              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                      <Form.Label>Nome da placa</Form.Label>
                      <Form.Control
                        type="text"
                        name="placaEntrada"
                        value={values.placaEntrada}
                        onChange={handleChange}
                        isValid={!!errors.placaEntrada}
                        as="select">

                        <option>Placa A</option>
                        <option>Placa B</option>
                        <option>Placa C</option>

                      </Form.Control>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                      <Form.Label>Quantidade</Form.Label>
                      <Form.Control
                        type="text"
                        name="qtdPecas"
                        value={values.qtdPecas}
                        onChange={handleChange}
                        isValid={!!errors.qtdPecas}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                      <Form.Label>Nome da maquina</Form.Label>
                      <InputGroup>                
                        <Form.Control
                          type="text"
                          name="nomePecaMaq"
                          value={values.nomePecaMaq}
                          onChange={handleChange}
                          isInvalid={!!errors.nomePecaMaq}
                          as="select">

                          <option>Maq 1</option>
                          <option>Maq 2</option>
                          <option>Maq 3</option>

                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.nomePecaMaq}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                      <Form.Label>Responsável por deixar</Form.Label>
                      <Form.Control
                        type="text"
                        
                        name="respDeixar"
                        value={values.respDeixar}
                        onChange={handleChange}
                        isInvalid={!!errors.respDeixar}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.respDeixar}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                      <Form.Label>Responsável por receber</Form.Label>
                      <Form.Control
                        type="text"
                       
                        name="respReceber"
                        value={values.respReceber}
                        onChange={handleChange}
                        isInvalid={!!errors.respReceber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.respReceber}
                      </Form.Control.Feedback>
                    </Form.Group>              
                  </Form.Row>                  
                  <Button type="submit">Submit form</Button>
                </Form>
              )}
            </Formik>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  class ConsertoDePlacasFunc extends Component {
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
              Conserto de placas
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Centered Modal</h4>*/}
            <p>
                <Formik
                validationSchema={schemaConsertoDePlacasFunc}
                onSubmit={console.log}
                initialValues={{

                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} md="2" controlId="validationFormik01">
                        <Form.Label>LCG</Form.Label>
                        <Form.Control
                          type="text"
                          name="lcgConcerto"
                          value={values.lcgConcerto}
                          onChange={handleChange}
                          isValid={!!errors.lcgConcerto}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} md="7" controlId="validationFormik02">
                        <Form.Label>Nome da placa</Form.Label>
                        <Form.Control
                          type="text"
                          name="placaDeConserto"
                          value={values.placaDeConserto}
                          onChange={handleChange}
                          isValid={!!errors.placaDeConserto}
                          as="select">
                          <option> </option>
                          <option>Placa A</option>
                          <option>Placa B</option>
                          <option>Placa C</option>

                        </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>



                      <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                        <Form.Label>Numero da maquina</Form.Label>
                        <InputGroup>      
                          <Form.Control
                            type="text"                    
                        
                            name="numMaquina"
                            value={values.numMaquina}
                            onChange={handleChange}
                            isInvalid={!!errors.numMaquina}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.numMaquina}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="3" controlId="validationFormik03">
                        <Form.Label>Local</Form.Label>
                        <Form.Control
                          type="text"
                          
                          name="localConserto"
                          value={values.localConserto}
                          onChange={handleChange}
                          isInvalid={!!errors.localConserto}
                          as="select">
                          <option>Embratex</option>
                          <option>Utilidades</option>
                          <option>Wentex</option>


                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.localConserto}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="2" controlId="validationFormik04">
                        <Form.Label>Data</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Data de defeito"
                          name="dataDeDefeito"
                          value={values.dataDeDefeito}
                          onChange={handleChange}
                          isInvalid={!!errors.dataDeDefeito}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.dataDeDefeito}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationFormik05">
                        <Form.Label>Responsável pelo defeito</Form.Label>
                        <Form.Control
                          type="text"
                          
                          name="respDefeitoConserto"
                          value={values.respDefeitoConserto}
                          onChange={handleChange}
                          isInvalid={!!errors.respDefeitoConserto}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.respDefeitoConserto}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </Form.Row>


                      <Form.Row>
                      <Form.Group as={Col} md="12" controlId="validationFormik05">
                        <Form.Label>Descrição do defeito</Form.Label>
                        <Form.Control
                          type="text"
                          as="textarea" rows="3"
                          name="descDefeitoPlaca"
                          value={values.descDefeitoPlaca}
                          onChange={handleChange}
                          isInvalid={!!errors.descDefeitoPlaca}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.descDefeitoPlaca}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </Form.Row>

                      <Form.Row>
                      <Form.Group as={Col} md="12" controlId="validationFormik05">
                        <Form.Label>Descrição do conserto</Form.Label>
                        <Form.Control
                          type="text"
                          as="textarea" rows="3"
                          name="descConserto"
                          value={values.descConserto}
                          onChange={handleChange}
                          isInvalid={!!errors.descConserto}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.descConserto}
                        </Form.Control.Feedback>
                      </Form.Group>
                      </Form.Row>
                      <Form.Row>
                      <Form.Group as={Col} md="3" controlId="validationFormik05">
                        <Form.Label>Responsável pelo conserto</Form.Label>
                        <Form.Control
                          type="text"
                          
                          name="respConserto"
                          value={values.respConserto}
                          onChange={handleChange}
                          isInvalid={!!errors.respConserto}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.respConserto}
                        </Form.Control.Feedback>
                      </Form.Group>  
                      </Form.Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
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
      
      this.state = { 
        modalShow: false,
        smShow: false,
        lgShow: false
      };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
      let smClose = () => this.setState({ smShow: false });
      let lgClose = () => this.setState({ lgShow: false });

  
      return (
        <Container>

<p>{this.state.response}</p>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Saída de placas
          </Button>
          
          <SaidaDePlacasFunc
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ smShow: true })}
          >
            Conserto de placas
          </Button>
          
          <ConsertoDePlacasFunc
            show={this.state.smShow}
            onHide={smClose}
          />
        </ButtonToolbar>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ lgShow: true })}
          >
            Entrada de placas
          </Button>
          
          <EntradaDePlacasFunc
            show={this.state.lgShow}
            onHide={lgClose}
          />
        </ButtonToolbar>
        </Container>
      );
    }
  }
  


export default withRouter(Home);