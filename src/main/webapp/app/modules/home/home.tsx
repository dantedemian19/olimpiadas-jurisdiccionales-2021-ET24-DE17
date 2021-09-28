import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { translate, Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faEye, faHeading, faHeadset, faHeadSideCough, faHeartbeat, faMedkit, faTooth } from '@fortawesome/free-solid-svg-icons';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <>
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
            <h1>Nuestro departamento</h1>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <ul className="iconos-banner">
            <li>
              <FontAwesomeIcon icon={faEye} size="3x" className="icono" />
              <h5>CUIDADO DE LOS OJOS CON LÁSER</h5>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeartbeat} size="3x" className="icono" />
              <h5>CUIDADO DEL CORAZON</h5>
            </li>
            <li>
              <FontAwesomeIcon icon={faBrain} size="3x" className="icono" />
              <h5>NEUROLOGÍA</h5>
            </li>
            <li>
              <FontAwesomeIcon icon={faTooth} size="3x" className="icono" />
              <h5>CUIDADO DENTAL</h5>
            </li>
            <li>
              <FontAwesomeIcon icon={faEarlybirds} size="3x" className="icono" />
              <h5>CUIDADO DEL OÍDO</h5>
            </li>
            <li>
              <FontAwesomeIcon icon={faMedkit} size="3x" className="icono" />
              <h5>EMERGENCIA</h5>
            </li>
          </ul>
        </div>
      </section>
      <section className="cuerpo" style={{ justifyContent: 'center', display: 'flex' }}>
        <div className="estadistica">
          <div className="escala-covid"></div>
          <div className="datos">
            <h1>Covid-19</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore possimus laudantium nisi commodi quia in aspernatur numquam
              laboriosam soluta harum. Provident quasi magnam laudantium neque minus facere delectus consectetur ad ullam maxime tempore
              officiis nam tempora magni, nobis itaque, modi ab dicta quo. Nam blanditiis ea debitis ex quos amet officiis qui alias.
              Deserunt, provident numquam. Molestiae itaque sint repellat voluptatum dicta corrupti expedita perspiciatis, atque eligendi
              repudiandae aspernatur impedit odit unde non id dolorum facere autem velit nihil esse! Quam iure iste eum animi obcaecati
              perferendis, vero ipsum quae? Nihil natus nesciunt ea sapiente accusamus rem exercitationem nulla minus.
            </p>
            <button className="btn btn-dark ver-mas">Ver más</button>
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
              <button className="btn btn-dark" style={{ width: '15%', fontSize: 20, margin: '25px 42.5% 0 42.5%' }}>
                Enviar
              </button>
            </div>
          </AvForm>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
