import React from 'react';
import { connect } from 'react-redux';
import { Calendar, Badge } from 'antd';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

import './turnos.scss';
import { translate } from 'react-jhipster';

export type IHomeProp = StateProps;

export const Turnos = (props: IHomeProp) => {
  const { account } = props;

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'error', content: 'Ocupado' },
        ];
        break;
      case 10:
        listData = [
          { type: 'error', content: 'Ocupado' },
        ];
        break;
      case 15:
        listData = [
          { type: 'error', content: 'Ocupado' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <div className="screen-turnos">
      <section className="banner super-turnos">
        <div className="banner-turnos">
          <div className="titulo-turnos">
            <h1>Turnos</h1>
          </div>
        </div>
      </section>
      <main className="cuerpo">
        <section className="turnos">
          <div className="columna1">
            <h1>Turnos solicitados</h1>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} style={{padding: 15}} />
          </div>
          <div className="columna2">
            <AvForm className="form-turnos">
              <AvField
                className="inputs-turnos"
                name="email"
                type="email"
                label={translate('global.form.email.label')}
                placeholder={translate('global.form.email.placeholder')}
                required
                errorMessage="El email no puede estar vacío!"
                data-cy="email"
              />
              <AvField
                className="inputs-turnos"
                name="asunto"
                label={translate('global.form.asunto.label')}
                placeholder={translate('global.form.asunto.placeholder')}
                required
                errorMessage="El asunto no puede estar vacío!"
                data-cy="asunto"
              />
              <div>
              <label htmlFor="fecha">Fecha de consulta</label>
              <AvInput
                type="date"
                name="fecha"
              />
              </div>
              <div>
              <label htmlFor="mensaje">Mensaje</label>
              <AvInput
                type="textarea"
                name="mensaje"
                style={{ resize: 'none', height: 100 }}
                placeholder={translate('global.form.cuerpo.placeholder')}
              />
              </div>
              <Button className="button-turnos" type="primary" danger icon={<BookOutlined style={{ position: 'relative', bottom: 3 }} />}>
                ¡Solicitá tú turno!
              </Button>
            </AvForm>
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

export default connect(mapStateToProps)(Turnos);
