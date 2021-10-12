import './footer.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

export type IHomeProp = StateProps;

export const Footer = () => {
  return (
    <footer>
      <div className="footer page-content">
        <Row>
          <Col md="12">
            <ul className="lista-footer">
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
                  <a href="#">
                    <div className="logo"></div>
                  </a>
                  <h4 style={{ fontWeight: 'bolder', fontSize: 22 }}>Teléfonos útiles</h4>
                  <p style={{ fontSize: 20, fontWeight: 400 }}>
                    <a target="_blank" href="https://www.buenosaires.gob.ar/laciudad/telefonosutiles" rel="noreferrer">
                      Ver todos los teléfonos
                    </a>
                  </p>
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
            </ul>
            <hr style={{ width: '55%', backgroundColor: '#495057', marginTop: '-20px' }} />
            <div className="copyright">
              <p>&copy;Derechos reservados C-CARE 2021 - Siempre al cuidado de nuestros pacientes</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Footer);
