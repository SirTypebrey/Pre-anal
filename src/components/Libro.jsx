import React from 'react';
import { Card } from 'react-bootstrap';

class ComponenteListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.autor = props.autor;
    this.fecha = props.fecha;
    this.numero = props.numero;
    this.portada = props.portada;
    this.idioma = props.idioma;
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.portada} style={{ width: '75%' }} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <p>Titulo: {this.titulo}</p>
              <p>Autor: {this.autor}</p>
              <p>Fecha: {this.fecha}</p>
              <p>Numero de paginas: {this.numero}</p>
              <p>Idioma: {this.idioma}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ComponenteListaClase;
