import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <ul className="lista-footer">
          <li>
            <a href="#">
              <div className="logo"></div>
            </a>
          </li>
          <li>
            <div>
              <p>102</p>
              <p>Niñez y adolescencia</p>
            </div>
          </li>
          <li>
            <div>
              <p>103</p>
              <p>Emergencias</p>
            </div>
          </li>
          <li>
            <div>
              <p>107</p>
              <p>SAME</p>
            </div>
          </li>
          <li>
            <div>
              <p>911</p>
              <p>Policía</p>
            </div>
          </li>
          <li>
            <div>
              <p>147</p>
              <p>Atención ciudadana</p>
            </div>
          </li>
          <li>
            <div>
              <p>144</p>
              <p>Violencia de género</p>
            </div>
          </li>
          <li>
            <div>
              <p>Teléfonos útiles</p>
              <p>
                <a target="_blank" href="https://www.buenosaires.gob.ar/laciudad/telefonosutiles" rel="noreferrer">
                  Ver todos los teléfonos
                </a>
              </p>
            </div>
          </li>
        </ul>
        <div className="copyright">
          <p>&copy;Derechos reservados - SANATORIO LOS BEPI 2021</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default Footer;
