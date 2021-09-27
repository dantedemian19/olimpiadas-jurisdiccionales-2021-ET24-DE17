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
    <>
      <section>
        <div className="banner">
          <div className="card-home">
            <h1 className="titulo">Servicios para clientes</h1>
            <p className="parrafo">Ofrecemos la gama más amplia de servicios innovadores y acreditados para pacientes</p>
            {/* <ul className="sociales">
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
    </ul> */}
          </div>
        </div>
      </section>
      <section className="cuerpo">
        <h1>Conceptos generales</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At pariatur quae a accusantium quibusdam aperiam, repellat, officiis rem
          consequatur magni porro sequi sit. Molestias neque accusantium pariatur laudantium placeat natus praesentium vel quasi consequatur
          obcaecati sint repellat, ut minima omnis sit veritatis ducimus mollitia totam dolor, ipsam nemo commodi illum aliquam? Accusantium
          esse eveniet sequi minus! Fugit excepturi iste consequatur dolorum laboriosam eligendi quas nobis fugiat. Voluptates ipsam ratione
          dolorum odit dicta ex officia perferendis sed voluptas quis ea, obcaecati repudiandae earum cumque atque, iure suscipit explicabo,
          consectetur odio maiores nostrum. Sunt quaerat voluptatem natus autem sapiente consequatur eius voluptatum!
        </p>
        <hr />
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
    </>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
