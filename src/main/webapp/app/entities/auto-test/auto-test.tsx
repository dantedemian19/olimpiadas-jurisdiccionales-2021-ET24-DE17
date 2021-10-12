import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Steps, Button, message, Radio, Modal } from 'antd';

import './auto-test.scss';

export type IHomeProp = StateProps;

export const AutoTest = (props: IHomeProp) => {
  const { account } = props;
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const primerPregunta = <h2>¿Presenta o presentó pérdida del gusto y/o disminución del gusto de manera repentina?</h2>;

  const segundaPregunta = (
    <h2>
      ¿Estuvo a menos de dos metros por más de 15 minutos, con alguna persona que tenga diagnóstico confirmado/sospechoso de covid, desde
      las 48 hs. previas al inicio de los síntomas del mismo?
    </h2>
  );

  const terceraPregunta = (
    <h2>
      ¿Reside y/o trabaja en geriátrico, cárcel, hogar de niñas/os o neuropsiquiátricos? <br />
      ¿Trabaja en salud o es personal esencial? <br />
      ¿Vive en un barrio popular y/o pertenece a pueblos originarios?
    </h2>
  );

  const cuartaPregunta = (
    <>
      <h2>¿Tiene uno o más de estos síntomas?</h2>
      <ul className="lista-sintomas">
        <div className="primera-mitad">
          <li>Temperatura de 37,5°C</li>
          <li>Tos</li>
          <li>Dolor de garganta</li>
          <li>Agitación o sensación de falta de aire</li>
        </div>
        <div className="segunda-mitad">
          <li>Pérdida de olfato</li>
          <li>Disminución del gusto</li>
          <li>Diarrea</li>
          <li>Dolor de cabeza</li>
          <li>Dolores musculares</li>
        </div>
      </ul>
    </>
  );

  const quintaPregunta = <h2>¿Ha viajado al exterior en los últimos 10 días?</h2>;

  const resultado = (
    <>
      <h2>No presenta alguno de los principales síntomas de COVID-19</h2>
      <p>Continuemos cuidándonos, manteniendo la distancia física, lavándonos las manos y cumpliendo las medidas vigentes</p>
    </>
  );

  const steps = [
    {
      title: 'Gusto y olfato',
      content: primerPregunta,
    },
    {
      title: 'Distancia',
      content: segundaPregunta,
    },
    {
      title: 'Concurrencias',
      content: terceraPregunta,
    },
    {
      title: 'Síntomas',
      content: cuartaPregunta,
    },
    {
      title: 'Viajes',
      content: quintaPregunta,
    },
    {
      title: 'Resultado',
      content: resultado,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="screen-turnos">
      <section className="banner autotest">
        <div className="banner-turnos">
          <div className="titulo-turnos">
            <h1>Auto-Test</h1>
          </div>
        </div>
      </section>
      <Modal
        title="Posible caso positivo de COVID-19"
        className="modal-autotest"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <h2>Usted podría ser un caso confirmado por criterio clínico-epidemiológico.</h2>
        <p>
          Debe permanecer en su casa, en una habitación sólo para usted. La habitación debe estar con la puerta cerrada. Puede salir solo al
          baño, con el barbijo y después limpiar el baño. Reforzar la limpieza de las superficies y el lavado de manos de todos los
          convivientes, con agua y jabón es suficiente. Ventilar la casa. Si necesita que le alcancen algo, en lo posible que lo haga la
          misma persona y que sea una persona joven y sana. Si tiene Obra Social comuníquese, de lo contrario deberá contactar al&nbsp;
          <strong>Ministerio de Salud PBA</strong> para ser evaluado. Sus convivientes y las personas que estuvieron en contacto con usted
          (a menos de 2 mts por más de 15 min) las 48 hs previas al inicio de síntomas deberán <strong>aislarse durante 10 días</strong>. Si
          alguno de ellos presenta algunos de los síntomas nombrados que llame a su&nbsp;
          <strong>OOSS</strong> y sino al <strong>148</strong>. Le pido que les comunique eso. Debe activar el sistema de emergencias,&nbsp;
          <strong>llamando al 107</strong> o al número de <strong>emergencias de su OOSS</strong>: si tiene dificultad respiratoria mayor
          como por ej. Palabra entrecortada o respira rápido y fuerte en reposo, cambio de color de piel (azulada), sensación de ahogo.
        </p>
      </Modal>
      <main className="cuerpo">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ fontWeight: 600 }}>
              Si
            </Button>
          )}
          <div style={{ width: 8 }} />
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()} style={{ fontWeight: 600 }}>
              No
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Anterior
            </Button>
          )}
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

export default connect(mapStateToProps)(AutoTest);
