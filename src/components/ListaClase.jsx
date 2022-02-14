import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ComponenteListaClase from './ComponenteListaClase';
import uuid from 'react-uuid';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaComponentes: this.initList(props.elementos),
    };

    this.inputTitulo = React.createRef();
    this.inputAutor = React.createRef();
    this.inputFecha = React.createRef();
    this.inputNumero = React.createRef();
    this.inputPortada = React.createRef();
    this.inputIdioma = React.createRef();
  }

  initList(elementos) {
    const listaInicial = [];
    for (let i = 0; i < elementos.length; i++) {
      listaInicial.push(
        <ComponenteListaClase
          key={uuid()}
          titulo={elementos[i].titulo}
          autor={elementos[i].autor}
          fecha={elementos[i].fecha}
          numero={elementos[i].numero}
          portada={elementos[i].portada}
          idioma={elementos[i].idioma}
        />
      );
    }
    return listaInicial;
  }

  addElement() {
    const newLista = this.state.listaComponentes.concat(
      <ComponenteListaClase
        key={uuid()}
        titulo={this.inputTitulo.current.value}
        autor={this.inputAutor.current.value}
        fecha={this.inputFecha.current.value}
        numero={this.inputNumero.current.value}
        portada={this.inputPortada.current.value}
        idioma={this.inputIdioma.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>
              Titulo:
              <Form.Control
                type="text"
                placeholder="Enter Titulo"
                ref={this.inputTitulo}
              />
            </Form.Label>

            <Form.Label>
              Autor:
              <Form.Control
                type="text"
                placeholder="Enter Autor"
                ref={this.inputAutor}
              />
            </Form.Label>

            <Form.Label>
              Fecha de publicacion:
              <Form.Control type="date" ref={this.inputFecha} />
            </Form.Label>

            <Form.Label>
              Numero de paginas:
              <Form.Control
                type="number"
                placeholder="Enter Paginas"
                ref={this.inputNumero}
              />
            </Form.Label>

            <Form.Label>
              Portada:
              <Form.Control
                type="url"
                placeholder="Enter Portada"
                ref={this.inputPortada}
              />
            </Form.Label>

            <Form.Label>
              Idioma:
              <Form.Control
                type="text"
                placeholder="Enter Idioma"
                ref={this.inputIdioma}
              />
            </Form.Label>
          </Form.Group>
          <Button variant="dark" onClick={this.addElement.bind(this)}>
            Submit
          </Button>
        </Form>
        {this.state.listaComponentes}
      </div>
    );
  }
}

export default ListaClase;
