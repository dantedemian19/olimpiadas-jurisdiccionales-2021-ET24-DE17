import './covid-19.scss';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { FileDoneOutlined, IdcardOutlined, UnlockOutlined } from '@ant-design/icons';

export type IHomeProp = StateProps;

export const Covid = (props: IHomeProp) => {
  const { account } = props;
  const { Option } = Select;

  const [valorSelect, setValorSelect] = useState('');

  function handleChange(value) {
    // eslint-disable-next-line no-console
    console.log(value.value);
    setValorSelect(value.value);
  }

  const grafico = () => {
    switch (valorSelect) {
      case 'casos':
        return (
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=desc&pickerMetric=new_cases_smoothed_per_million&hideControls=true&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=ARG~USA~GBR~ITA~ESP"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      case 'muertes':
        return (
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-01..latest&facet=none&pickerSort=desc&pickerMetric=new_deaths_per_million&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=ARG~USA~GBR~ITA~ESP&hideControls=true"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      case 'hospitalizaciones':
        return (
          <iframe
            src="https://ourworldindata.org/grapher/current-covid-patients-hospital"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      case 'tests':
        return (
          <iframe
            src="https://ourworldindata.org/grapher/positive-rate-daily-smoothed?tab=chart"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      case 'vacunaciones':
        return (
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated+%28by+dose%29&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=PRT~ESP~URY~CHN~USA~BRA~RUS~MEX~DEU~FRA~ITA~OWID_WRL~ARG&hideControls=true"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      case 'riesgo':
        return (
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-14..latest&facet=none&pickerSort=asc&pickerMetric=location&hideControls=true&Metric=Case+fatality+rate&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=true&country=ARG~USA~GBR~ITA~ESP"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );

      default:
        return (
          <iframe
            src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=desc&pickerMetric=new_cases_smoothed_per_million&hideControls=true&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=ARG~USA~GBR~ITA~ESP"
            loading="lazy"
            style={{ border: '0px none' }}
            className="grafico-covid"
          ></iframe>
        );
    }
  };

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
        <section className="informacion-util">
          <h1 style={{ color: '#38485c' }}>Información útil</h1>
          <ul>
            <li>
              <div className="icono-informacion">
                <FileDoneOutlined className="icono" />
              </div>
              <a href="https://www.buenosaires.gob.ar/coronavirus/medidas-de-gobierno" target="_blank" className="link" rel="noreferrer">
                <h3 style={{ color: '#007bd2' }}>Servicio y trámites</h3>
              </a>
              <p>Programas para la salud y modalidades para realizar trámites.</p>
            </li>
            <li>
              <div className="icono-informacion">
                <UnlockOutlined className="icono" />
              </div>
              <a href="https://www.buenosaires.gob.ar/coronavirus/protocolos" target="_blank" className="link" rel="noreferrer">
                <h3 style={{ color: '#007bd2' }}>Protocolos de apertura</h3>
              </a>
              <p>Medidas de prevención para la apertura de rubros y actividades.</p>
            </li>
            <li>
              <div className="icono-informacion">
                <IdcardOutlined className="icono" />
              </div>
              <a href="https://www.buenosaires.gob.ar/coronavirus/equipos-salud" target="_blank" className="link" rel="noreferrer">
                <h3 style={{ color: '#007bd2' }}>Equipos de salud</h3>
              </a>
              <p>Instructivos, novedades y protocolos para el equipo de salud.</p>
            </li>
          </ul>
        </section>
        <section className="escuelas">
          <h1 style={{ color: '#38485c' }}>Escuelas</h1>
          <ul>
            <li style={{ marginRight: 15 }}>
              <a
                href="https://www.buenosaires.gob.ar/coronavirus/vacunacion-covid-19/personal-docente-y-no-docente"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                <h3 style={{ color: '#38485c' }}>Vacunación docente</h3>
                <p style={{ color: '#4b596a' }}>Empadronamiento para personal docente y no docente de escuelas de la Ciudad.</p>
              </a>
            </li>
            <li style={{ marginRight: 15 }}>
              <a
                href="https://www.buenosaires.gob.ar/educacion/estrategia-de-testeo-para-la-comunidad-educativa"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                <h3 style={{ color: '#38485c' }}>Testeos docentes</h3>
                <p style={{ color: '#4b596a' }}>Lugares y horarios de testeo para la comunidad educativa estatal o privada.</p>
              </a>
            </li>
            <li>
              <a href="https://www.buenosaires.gob.ar/educacion/cuidarnos-es-cuidarlos" target="_blank" className="link" rel="noreferrer">
                <h3 style={{ color: '#38485c' }}>La escuela hoy</h3>
                <p style={{ color: '#4b596a' }}>Recomendaciones para evitar las posibilidades de contagio en la escuela.</p>
              </a>
            </li>
          </ul>
        </section>
        <section className="datos-covid">
          <h1>Información en datos</h1>
          <p>Datos sobre la evolución del COVID-19 y todo lo que estamos haciendo en la Ciudad para afrontar la emergencia sanitaria.</p>
          <div className="titulo-dropdown">
            <div className="dropdown">
              <Select
                labelInValue
                defaultValue={{ value: 'casos' }}
                placeholder="Seleccione una opción"
                className="dropdown-select"
                onChange={handleChange}
              >
                <Option value="casos">Casos por millón de personas</Option>
                <Option value="muertes">Muertes registradas</Option>
                <Option value="hospitalizaciones">Hospitalizaciones</Option>
                <Option value="tests">Tests hechos</Option>
                <Option value="vacunaciones">Vacunaciones concluidas</Option>
                <Option value="riesgo">Riesgo de mortalidad</Option>
              </Select>
            </div>
          </div>
          <div className="grafico">{grafico()}</div>
          <div className="botonera">
            <a href="https://www.buenosaires.gob.ar/coronavirus/datos" target="_blank" rel="noreferrer">
              <button className="btn ver-datos">Ver datos oficiales de COVID-19</button>
            </a>
            <a href="http://localhost:9000/" target="_blank" rel="noreferrer">
              <button className="btn ver-informes">Ver informes diarios del gobierno</button>
            </a>
          </div>
        </section>
        <section className="prevencion-sintomas">
          <div className="prevencion">
            <h1>Prevención</h1>
            <p>Conocé los consejos para cuidarte.</p>
            <a href="https://www.buenosaires.gob.ar/coronavirus/aprende-cuidarte" target="_blank" rel="noreferrer">
              <button className="btn button-consejos">Ver consejos</button>
            </a>
            <ul>
              <li>
                <img src="../../../content/images/covid/barbijo.png" />
                <p>El uso de tapabocas es obligatorio.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/toser.png" />
                <p>Al toser o estornudar, cubrirse la boca y nariz con el codo.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/limpiar.png" style={{ marginLeft: 20 }} />
                <p style={{ marginLeft: 20 }}>Limpiar superficies con agua y lavandina.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/jabon.png" />
                <p>Lavarse las manos con agua y jabón o usar alcohol en gel.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/tocarse.png" />
                <p>Evitar tocarse la cara con las manos.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/metros.png" />
                <p>Mantener al menos 2 metros de distanciamiento social.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/ventanas.png" style={{ width: 85 }} />
                <p>Ventilemos los lugares cerrados.</p>
              </li>
            </ul>
          </div>
          <div className="sintomas">
            <h1>Síntomas</h1>
            <p>Si tenés síntomas, acercate a una UFU.</p>
            <a href="https://www.buenosaires.gob.ar/coronavirus/unidades-febriles-de-urgencia" target="_blank" rel="noreferrer">
              <button className="btn button-consejos">Ver lugares</button>
            </a>
            <ul>
              <li>
                <img src="../../../content/images/covid/termometro.png" />
                <p>Temperatura mayor a 37.0°.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/garganta.png" />
                <p>Dolor de garganta.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/tos.png" />
                <p>Tos seca continua.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/respirar.png" />
                <p>Dificultad para respirar.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/olfato-gusto.png" />
                <p>Pérdida de olfato o del gusto.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/cabeza.png" />
                <p>Cefalea.</p>
              </li>
              <li>
                <img src="../../../content/images/covid/estomago.png" />
                <p>Diarrea y/o vómitos.</p>
              </li>
            </ul>
          </div>
        </section>
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
