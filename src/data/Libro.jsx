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
        <Card bg="dark" text="light" style={{ width: '40%' }}>
          <Card.Img variant="top" src={this.portada} style={{ width: '75%' }} />
          <Card.Body>
            <Card.Title>Titulo: {this.titulo}</Card.Title>
            <Card.Text>
              <p>Autor: {this.autor}</p>
              <p>Numero de paginas: {this.numero}</p>
              <p>Idioma: {this.idioma}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Fecha: {this.fecha}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default ComponenteListaClase;
