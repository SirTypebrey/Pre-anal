import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coins: [] };
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1'
    );
    this.setState({ coins: res.data });
  }

  render() {
    console.log(this.state.coins);
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ol>
          <li>
            Utiliza la API REST de{' '}
            <a href="https://openlibra.com/es/page/public-api">OpenLibra.com</a>{' '}
            para obtener datos acerca de libros. La petición tendrá que incluir
            los siguientes parámetros:<b> - 1,5 puntos</b>
          </li>
          <ul>
            <li>Categoría: Programación</li>
            <li>Número máximo de resultados: 5</li>
            <li>Idioma: español</li>
          </ul>
          <li>
            Utiliza los resultados devueltos por la consulta para rellenar un
            componente{' '}
            <a href="https://react-bootstrap.github.io/components/carousel/">
              Carrusel
            </a>{' '}
            de React-Bootstrap usando los siguientes campos:<b> - 1,5 puntos</b>
            <ul>
              <li>Imagen: cover</li>
              <li>Título: title</li>
              <li>Autor: author</li>
            </ul>
            Este además se encontrará anidado dentro de un Container de
            React-Bootstrap
          </li>
          <li>
            {' '}
            Modifica los estilos para que se muestre la imagen de portada a la
            izquierda del elemento de carrusel y a la derecha los atributos de
            texto, añadiendo la descripción acortada (content_short){' '}
            <b> - 1 punto</b>
          </li>
        </ol>
        <Container>
          <Carousel variant="dark">
            {this.state.coins.map((item) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={item.image} />
                  <Carousel.Caption>
                    <h3>Titulo: {item.name}</h3>
                    <p>Autor: {item.symbol}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Ejercicio3;
