import React, { Component } from "react";
import { NavItem, Nav, Row, Col, Button, ButtonToolbar, Container, NavLink } from "reactstrap";
import WeatherDisplay from '../Components/WeatherDisplay';
import HrefChanger from '../FComponents/HrefChanger';
import ToolTip from '../Components/ToolTip';

const PLACES = [
  { name: "Киев", zip: "03057" },
  { name: "Львов", zip: "79007" },
  { name: "Харьков", zip: "61202" },
  { name: "Житомир", zip: "13253" }
];

class Places extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {

      const activePlace = this.state.activePlace
    
    return (
      <div  className = {PLACES[activePlace].name} style = {{height: "92vh"}}>    {/* Смена фоновой картинки */}
        <Container className = "overlay">
          <Row>
            <Col md={4} sm={4} className = "mt-5">
                 <h1>Выберите город</h1>

              <Nav>     {/* Создаем кнопки на основе заданого массива */}
              <ButtonToolbar>
                {PLACES.map((place, index) => (
                  <Button color="info" block className = ""
                    key={index}
                    onClick={() => {
                    this.setState({ activePlace: index });
                    }}>
                        {place.name}
                  </Button>   
                ))}
              </ButtonToolbar>
              </Nav>
            </Col>

            <Col md={4} sm={4} className = "mt-5">   {/* Задаем пропсы и вызываем компонент с информацией о погоде */}
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} name={PLACES[activePlace].name} />
            </Col>

            <Col md={4} sm={4} className = "mt-5">
              <h1 className = "mb-1">
                <ToolTip main={"Проверка погоды"}
                tooltipInfo={"Проверить правильность погоды на Sinoptik.ua"}
                bsColor={"text-dark"}/>
             </h1>

            <Nav vertical>    {/* Создаем ссылки для проверки погоды используя функцию HrefChanger */}
                {PLACES.map((place, index) => (
                  <NavItem >
                    <NavLink href={HrefChanger(place.name)}
                     className ="text-white rounded bg-secondary mb-1"
                     target="_blank"  rel="noopener noreferrer">
                       {place.name}
                    </NavLink>
                  </NavItem>
                ))}
            </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Places;