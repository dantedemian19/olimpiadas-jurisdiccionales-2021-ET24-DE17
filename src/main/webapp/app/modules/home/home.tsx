import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { translate, Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div className="home-screen">
      <section>
        <div className="banner">
          <div className="card-home">
            <h1 className="titulo">Servicios para clientes</h1>
            <p className="parrafo">Ofrecemos la gama más amplia de servicios innovadores.</p>
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
          <h1>Conceptos generales</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At pariatur quae a accusantium quibusdam aperiam, repellat, officiis
            rem consequatur magni porro sequi sit. Molestias neque accusantium pariatur laudantium placeat natus praesentium vel quasi
            consequatur obcaecati sint repellat, ut minima omnis sit veritatis ducimus mollitia totam dolor, ipsam nemo commodi illum
            aliquam? Accusantium esse eveniet sequi minus! Fugit excepturi iste consequatur dolorum laboriosam eligendi quas nobis fugiat.
            Voluptates ipsam ratione dolorum odit dicta ex officia perferendis sed voluptas quis ea, obcaecati repudiandae earum cumque
            atque, iure suscipit explicabo, consectetur odio maiores nostrum. Sunt quaerat voluptatem natus autem sapiente consequatur eius
            voluptatum!
          </p>
        </div>
        <div className="columnas">
          <ul className="mini-lista">
            <li>
              <div className="subtitulo">
                <h4>Mantente conectado</h4>
                <div className="guion"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem nemo alias soluta. Tenetur debitis
                  harum architecto voluptatum et voluptatem temporibus maxime mollitia, exercitationem ratione nam consectetur id autem
                  excepturi.
                </p>
              </div>
            </li>
            <div className="vertical-divisor"></div>
            <li>
              <div className="subtitulo">
                <h4>Hablar sobre</h4>
                <div className="guion"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem nemo alias soluta. Tenetur debitis
                  harum architecto voluptatum et voluptatem temporibus maxime mollitia, exercitationem ratione nam consectetur id autem
                  excepturi.
                </p>
              </div>
            </li>
            <div className="vertical-divisor"></div>
            <li>
              <div className="subtitulo">
                <h4>Permanecer en la cima</h4>
                <div className="guion"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem nemo alias soluta. Tenetur debitis
                  harum architecto voluptatum et voluptatem temporibus maxime mollitia, exercitationem ratione nam consectetur id autem
                  excepturi.
                </p>
              </div>
            </li>
            <div className="vertical-divisor"></div>
            <li>
              <div className="subtitulo">
                <h4>Sigue haciendo</h4>
                <div className="guion"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem nemo alias soluta. Tenetur debitis
                  harum architecto voluptatum et voluptatem temporibus maxime mollitia, exercitationem ratione nam consectetur id autem
                  excepturi.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="banner-central">
          <div className="contenido-banner">
            <h1 style={{ color: 'white' }}>Nuestro departamento</h1>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <ul className="iconos-banner">
            <li>
              <FontAwesomeIcon icon={faEye} size="3x" className="icono" />
              <p>CUIDADO DE LOS OJOS CON LÁSER</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeartbeat} size="3x" className="icono" />
              <p>CUIDADO DEL CORAZON</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBrain} size="3x" className="icono" />
              <p>NEUROLOGÍA</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faTooth} size="3x" className="icono" />
              <p>CUIDADO DENTAL</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeadphones} size="3x" className="icono" />
              <p>CUIDADO DEL OÍDO</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faMedkit} size="3x" className="icono" />
              <p>EMERGENCIA</p>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore possimus laudantium nisi commodi quia in aspernatur numquam
              laboriosam soluta harum. Provident quasi magnam laudantium neque minus facere delectus consectetur ad ullam maxime tempore
              officiis nam tempora magni, nobis itaque, modi ab dicta quo. Nam blanditiis ea debitis ex quos amet officiis qui alias.
              Deserunt, provident numquam. Molestiae itaque sint repellat voluptatum dicta corrupti expedita perspiciatis, atque eligendi
              repudiandae aspernatur impedit odit unde non id dolorum facere autem velit nihil esse! Quam iure iste eum animi obcaecati
              perferendis.
            </p>
            <Link to="/covid-19">
              <button className="btn btn-dark ver-mas">Ver más</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="contacto">
        <div className="formulario">
          <div>
            <h1>¡Contactanos!</h1>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
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
              <button className="btn btn-dark" style={{ width: '25%', fontSize: 20, margin: '25px 37.5% 0 37.5%' }}>
                Enviar
              </button>
            </div>
          </AvForm>
        </div>
      </section>
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
                    <h4 style={{ fontWeight: 'bolder' }}>Teléfonos útiles</h4>
                    <p>
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
              <hr style={{ width: '55%', backgroundColor: '#495057', marginTop: '-20px', position: 'relative', right: '15px' }} />
              <div className="copyright">
                <p>&copy;Derechos reservados C-CARE 2021 - Siempre al cuidado de nuestros pacientes</p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
