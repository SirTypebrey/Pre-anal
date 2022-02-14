import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Libro from './Libro';
import uuid from 'react-uuid';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);

    this.elementos = [{}];

    this.state = {
      listaComponentes: this.initList(this.elementos),
    };

    this.inputTitulo = React.createRef();
    this.inputAutor = React.createRef();
    this.inputFecha = React.createRef();
    this.inputNumero = React.createRef();
    this.inputPortada = React.createRef();
    this.inputIdioma = React.createRef();

    this.elementos = [{}];
  }

  initList(elementos) {
    const listaInicial = [];
    for (let i = 0; i < elementos.length; i++) {
      listaInicial.push(
        <Libro
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
      <Libro
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
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Crea un formulario para añadir información sobre libros a una lista.
            Ha de tener los siguientes campos:<b> - 1,25 puntos</b>
            <ul>
              <li>Título</li>
              <li>Autor</li>
              <li>Fecha de publicación (selector de fecha) </li>
              <li>Número de paginas (input numérico)</li>
              <li>Portada (URL de imagen)</li>
              <li>Idioma </li>
            </ul>
            Los elementos añadidos se irán introduciendo dentro de un Container
            de React-Bootstrap
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
          </li>
        </ul>

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

export default Ejercicio2;
