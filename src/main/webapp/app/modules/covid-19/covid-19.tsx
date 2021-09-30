import './covid-19.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faEye, faHeadphones, faHeartbeat, faMedkit, faTooth } from '@fortawesome/free-solid-svg-icons';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

export type IHomeProp = StateProps;

export const Covid = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div className="covid-screen">
      <section>
        <div className="banner covid">
          <div className="banner-turnos">
            <div className="titulo-turnos">
              <h1>COVID-19</h1>
            </div>
          </div>
        </div>
      </section>
      <main className="contenedor-covid">
        <section className="datos-covid"></section>
      </main>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Covid);
