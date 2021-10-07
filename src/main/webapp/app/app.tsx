import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { setLocale } from 'app/shared/reducers/locale';
import Header from 'app/shared/layout/header/header';
import Footer from 'app/modules/footer/footer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';
import { StarOutlined, CloseOutlined } from '@ant-design/icons';
import $ from 'jquery';

// MATERIAL UI IMPORTS

import Rating from '@mui/material/Rating';
import { translate } from 'react-jhipster';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Button, Modal } from 'antd';
import { createValoracion } from './entities/valoracion/valoracion.reducer';
import { IValoracion } from './shared/model/valoracion.model';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps {}

export const App = (props: IAppProps) => {
  const [valueRating, setValueRating] = React.useState(0);
  const [valueDescripcion, setValueDescripcion] = React.useState('');
  const [displayValoration, setDisplayValoration] = useState(false);

  useEffect(() => {
    props.getSession();
    props.getProfile();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(valueRating, 'estrellitas');
  }, [valueRating]);

  const paddingTop = '60px';
  return (
    <Router basename={baseHref}>
      <div className="app-container" style={{ paddingTop }}>
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <ErrorBoundary>
          <Header
            isAuthenticated={props.isAuthenticated}
            isAdmin={props.isAdmin}
            currentLocale={props.currentLocale}
            onLocaleChange={props.setLocale}
            ribbonEnv={props.ribbonEnv}
            isInProduction={props.isInProduction}
            isOpenAPIEnabled={props.isOpenAPIEnabled}
          />
        </ErrorBoundary>
        <div className="container-fluid view-container" id="app-view-container">
          <Card className="jh-card">
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>

            <Modal
              className="modal-valoration"
              title="¡Valoranos!"
              visible={displayValoration}
              onCancel={() => {
                setDisplayValoration(false);
              }}
            >
              <div className="cont-valoration">
                <h1>¡Danos tu opinión!</h1>
                <div className="estrellas">
                  <Rating
                    name="size-large"
                    defaultValue={1}
                    className="rating"
                    onChange={(event, newValue) => {
                      setValueRating(newValue);
                    }}
                  />
                </div>
                <div className="descripcion">
                  <AvForm className="input-valoracion">
                    <AvInput
                      type="textarea"
                      name="mensaje"
                      style={{ resize: 'none', height: 100, width: 250, marginBottom: 10 }}
                      placeholder={translate('global.form.opinion.placeholder')}
                      onChange={value => {
                        setValueDescripcion(value.target.defaultValue);
                      }}
                    />
                  </AvForm>
                </div>
                <Button
                  className="button-valoracion"
                  type="primary"
                  danger
                  disabled={valueRating ? false : true}
                  onClick={() => {
                    createValoracion({ estrellas: valueRating, descripcion: valueDescripcion });
                    setDisplayValoration(false);
                  }}
                >
                  Enviar
                </Button>
              </div>
            </Modal>

            <div id="floating-button" onClick={() => setDisplayValoration(true)}>
              {/* {displayValoration === true ? (
                <CloseOutlined className="close" />
              ) : (
                // <p className="plus" style={{ display: 'none' }}>
                //   <StarOutlined className="plus" />
                // </p> */}
              <p className="plus">
                <StarOutlined className="plus" />
              </p>

              <p className="texto-v">Valoranos</p>
              {/* )} */}
            </div>
          </Card>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ authentication, applicationProfile, locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
  isAuthenticated: authentication.isAuthenticated,
  isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
  ribbonEnv: applicationProfile.ribbonEnv,
  isInProduction: applicationProfile.inProduction,
  isOpenAPIEnabled: applicationProfile.isOpenAPIEnabled,
});

const mapDispatchToProps = { setLocale, getSession, getProfile, createValoracion };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
