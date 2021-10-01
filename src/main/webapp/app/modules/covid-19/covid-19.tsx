import './covid-19.scss';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';

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
        <section className="datos-covid">
          <div className="titulo-dropdown">
            <div className="dropdown">
              <Select
                labelInValue
                // defaultValue={'Casos por millón de personas'}
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
