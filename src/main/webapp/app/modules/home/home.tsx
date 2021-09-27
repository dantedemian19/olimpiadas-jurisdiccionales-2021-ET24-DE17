import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faF } from '@fortawesome/free-solid-svg-icons';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <section>
      <div className="banner">
        <div className="card-home">
          <h1 className="titulo">Servicios para clientes</h1>
          <p className="parrafo">Ofrecemos la gama más amplia de servicios innovadores y acreditados para pacientes</p>
          <ul className="sociales">
            <li>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icono" />
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
