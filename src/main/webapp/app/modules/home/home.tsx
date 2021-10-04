import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { translate, Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAudioDescription,
  faBacteria,
  faBrain,
  faEye,
  faHeading,
  faHeadphones,
  faHeadset,
  faHeadSideCough,
  faHeartbeat,
  faMedkit,
  faTooth,
} from '@fortawesome/free-solid-svg-icons';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { faApple, faEarlybirds } from '@fortawesome/free-brands-svg-icons';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div className="home-screen">
      <section>
        <div className="banner">
          <div className="card-home">
            <h1 className="titulo">C-CARE</h1>
            <p className="parrafo">Al cuidado y atención de nuestros clientes.</p>
            <ul className="sociales">
              <li>
                <img src="../../../content/images/icono-mano.png" />
              </li>
              <li>
                <img src="../../../content/images/icono-brazo.png" />
              </li>
              <li>
                <img src="../../../content/images/icono-cabeza.png" />
              </li>
              <li>
                <img src="../../../content/images/icono-corazon.png" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cuerpo">
        <div className="general">
          <h1>La salud y la importancia del estilo de vida</h1>
          <p>
            La salud es la condición de todo ser vivo que goza de un absoluto bienestar tanto a nivel físico como a nivel mental y social.
            El estilo de vida, o sea el tipo de hábitos y costumbres que posee una persona, puede ser beneficioso para la salud, pero
            también puede llegar a dañarla o a influir de modo negativo sobre ella. Por ejemplo, un individuo que mantiene una alimentación
            equilibrada y que realiza actividades físicas en forma cotidiana tiene mayores probabilidades de gozar de buena salud
          </p>
        </div>
        <div className="columnas">
          <ul className="mini-lista">
            <li>
              <div className="subtitulo">
                <h4>Salud física</h4>
                <div className="guion"></div>
                <p>
                  Para mantener la salud física en óptimas condiciones, se recomienda realizar ejercicios de forma periódica y tener una
                  dieta equilibrada y saludable, con variedad de nutrientes y proteínas.
                </p>
              </div>
            </li>
            <div className="vertical-divisor"></div>
            <li>
              <div className="subtitulo">
                <h4>Salud mental</h4>
                <div className="guion"></div>
                <p>
                  La salud mental, por su parte, apunta a aglutinar todos los factores emocionales y psicológicos que pueden condicionar a
                  todo ser humano y obligarlo a emplear sus aptitudes cognitivas y su sensibilidad para desenvolverse dentro de una
                  comunidad y resolver las eventuales demandas surgidas
                </p>
              </div>
            </li>
            <div className="vertical-divisor"></div>
            <li>
              <div className="subtitulo">
                <h4>Salud emocional</h4>
                <div className="guion"></div>
                <p>
                  La salud emocional es una parte importante de la salud general. Las personas que son emocionalmente saludables tienen el
                  control de sus pensamientos, sentimientos y comportamientos.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="banner-central">
          <div className="contenido-banner">
            <h1 style={{ color: 'white' }}>Ciencias que aportan al bienestar</h1>
            <p>
              Son aquellas que permiten obtener los conocimientos necesarios para ayudar a prevenir enfermedades y a desarrollar iniciativas
              que promuevan la salud y el bienestar
            </p>
          </div>
          <ul className="iconos-banner">
            <li>
              <FontAwesomeIcon icon={faBacteria} size="3x" className="icono" />
              <p>BIOQUÍMICA</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faApple} size="3x" className="icono" />
              <p>BROMATOLOGÍA</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBrain} size="3x" className="icono" />
              <p>PSICOLOGÍA</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faTooth} size="3x" className="icono" />
              <p>CUIDADO DENTAL</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faMedkit} size="3x" className="icono" />
              <p>MEDICINA</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="cuerpo" style={{ justifyContent: 'center', display: 'flex' }}>
        <div className="estadistica">
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?tab=chart&zoomToSelection=true&facet=none&pickerSort=desc&pickerMetric=new_cases_smoothed_per_million&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=ARG~USA~GBR~ITA~ESP&hideControls=true"
            loading="lazy"
            style={{ border: '0px none' }}
            className="escala-covid"
          ></iframe>
          <div className="datos">
            <h1>Covid-19</h1>
            <p>
              La COVID-19 es la enfermedad causada por el nuevo coronavirus conocido como SARS-CoV-2. La OMS tuvo noticia por primera vez de
              la existencia de este nuevo virus el 31 de diciembre de 2019, al ser informada de un grupo de casos de «neumonía vírica» que
              se habían declarado en Wuhan (República Popular China).
            </p>
            <Link to="/covid-19" className="link-covid">
              <button className="btn btn-dark ver-mas">Ver más</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="contacto">
        <div className="formulario">
          <div>
            <h1>¡Contactanos!</h1>
            <p>Manteneté al contacto con nuestro equipo para próximas actualizaciones.</p>
          </div>
          <AvForm className="form-contacto">
            <div className="columna">
              <AvField
                className="inputs-contacto"
                name="email"
                label={translate('global.form.email.label')}
                placeholder={translate('global.form.email.placeholder')}
                required
                errorMessage="El email no puede estar vacío!"
                data-cy="email"
              />
              <AvField
                className="inputs-contacto"
                name="asunto"
                label={translate('global.form.asunto.label')}
                placeholder={translate('global.form.asunto.placeholder')}
                required
                errorMessage="El asunto no puede estar vacío!"
                data-cy="asunto"
              />
              <label htmlFor="mensaje">Mensaje</label>
              <AvInput
                type="textarea"
                name="mensaje"
                style={{ resize: 'none', height: 100 }}
                placeholder={translate('global.form.cuerpo.placeholder')}
              />
              <button
                className="btn btn-dark enviar-button"
                style={{ backgroundColor: '#1D3557', width: '30%', fontSize: 20, margin: '25px 37.5% 0 37.5%' }}
              >
                Enviar
              </button>
            </div>
          </AvForm>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
