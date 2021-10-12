import React from 'react';
import { connect } from 'react-redux';
import { Calendar, Badge } from 'antd';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

import './vacunacion.scss';
import { translate } from 'react-jhipster';

export type IHomeProp = StateProps;

export const Vacunacion = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div className="screen-turnos">
      <section className="banner vacunacion">
        <div className="banner-turnos">
          <div className="titulo-turnos">
            <h1>Vacunacion</h1>
          </div>
        </div>
      </section>
      <main className="cuerpo">
        <section className="saber">
          <h1>Lo que necesitas saber sobre las vacunas contra el COVID-19</h1>
          <p>
            Las vacunas salvan millones de vidas cada año. El desarrollo de vacunas seguras y eficaces contra la COVID-19 supone un enorme
            paso adelante en nuestro esfuerzo mundial para acabar con la pandemia y volver a hacer las cosas que disfrutamos junto a las
            personas que queremos. Hemos compilado la información especializada más reciente a fin de responder a algunas de las preguntas
            más comunes sobre las vacunas contra la COVID-19. Seguiremos actualizando este artículo conforme aparezca más información.
          </p>
        </section>
        <hr />
        <section className="preguntas">
          <div className="funcionalidad">
            <h2>¿Cómo funcionan?</h2>
            <p>
              Las vacunas actúan mediante la simulación de los agentes infecciosos –virus, bacterias u otros microorganismos– que pueden
              causar una enfermedad. Esto “enseña” a nuestro sistema inmunitario a dar una respuesta rápida y eficaz frente al patógeno. Las
              vacunas tradicionales hacían esto introduciendo una forma atenuada de un agente infeccioso para que nuestro sistema
              inmunitario genere una memoria del mismo. De este modo, nuestro sistema inmunitario puede detectar y combatir el patógeno
              rápidamente antes de que nos enferme. Algunas de las vacunas para la COVID-19 se han diseñado así. Otras vacunas contra la
              COVID-19 se han preparado aplicando nuevos métodos; son las que se conocen como vacunas de ARN mensajero o ARNm. Estas vacunas
              de ARNm, en lugar de introducir antígenos (una sustancia que hace que el sistema inmunitario produzca anticuerpos), introducen
              en nuestro cuerpo el código genético necesario para que el sistema inmunitario produzca el antígeno por sí mismo. La
              tecnología de las vacunas de ARNm se ha estudiado durante varias décadas. No contienen ningún virus vivo y no interfieren con
              el ADN humano.
            </p>
          </div>
          <div className="columnas columnas-vacunacion">
            <ul className="mini-lista lista-vacunacion">
              <li>
                <div className="subtitulo">
                  <h2>¿Son seguras?</h2>
                  <div className="guion guion-vacuna"></div>
                  <p>
                    Sí. Aunque las vacunas contra la COVID-19 se están produciendo con la mayor rapidez posible, deben pasar por pruebas
                    rigurosas en los ensayos clínicos para demostrar que cumplen los criterios internacionales de referencia sobre seguridad
                    y eficacia. Las vacunas solo pueden recibir la validación de la OMS y de los organismos normativos del país si
                    satisfacen estos estándares.
                  </p>
                </div>
              </li>
              <div className="vertical-divisor"></div>
              <li>
                <div className="subtitulo">
                  <h2>¿Cuál de las vacunas es mejor para mí?</h2>
                  <div className="guion guion-vacuna"></div>
                  <p>
                    Todas las vacunas aprobadas por la OMS han demostrado ser muy eficaces para protegerte contra la forma más grave de la
                    COVID-19. ¡Así que la mejor vacuna que puedes ponerte es la que tengas a tu alcance!
                  </p>
                </div>
              </li>
              <div className="vertical-divisor"></div>
              <li>
                <div className="subtitulo">
                  <h2>¿Debería vacunarme si ya he tenido COVID-19?</h2>
                  <div className="guion guion-vacuna"></div>
                  <p>
                    Sí. Incluso si ya has tenido la COVID-19, deberías vacunarte. Aunque es posible que las personas que se han recuperado
                    de la COVID-19 generen algún tipo de inmunidad natural al virus, aún no sabemos cuánto dura esta inmunidad, ni cuánto te
                    protege. La protección que confieren las vacunas es más fiable.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="inmunidad-colectiva">
          <h2>Inmunidad colectiva</h2>
          <p>
            Cuando una persona está vacunada contra una enfermedad, es muy probable que esté protegida contra esa enfermedad. Ahora bien, no
            todas las personas se pueden vacunar. Algunas, con enfermedades preexistentes que debilitan sus sistemas inmunitarios (por
            ejemplo, cáncer o VIH) o las que tienen alergias graves a algunos componentes de las vacunas, tal vez no puedan recibir
            determinadas vacunas. Esas personas pueden estar protegidas si viven entre otras personas que sí estén vacunadas. Cuando muchas
            personas de una comunidad están vacunadas, la circulación del patógeno es difícil porque la mayoría de las personas están
            inmunizadas. Por lo tanto, cuanto más personas estén vacunadas, menos probable será que una persona que no puede protegerse con
            vacunas corra el riesgo de verse expuesta a patógenos. Esto se denomina inmunidad colectiva.
          </p>
          <div className="imagenes">
            <div className="inmunidad-solo"></div>
            <div className="inmunidad-muchos"></div>
          </div>
        </section>
        <div style={{ marginTop: 20, padding: 15 }}>
          <p>
            Para más información podes visitar las&nbsp;
            <a href="https://www.argentina.gob.ar/coronavirus/vacuna/preguntas-frecuentes" target="_blank" rel="noreferrer">
              preguntas frecuentes sobre la vacuna
            </a>
            ,&nbsp; si desea puede hacerse un <a href="/autotest">autotest de COVID-19</a>
          </p>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Vacunacion);
