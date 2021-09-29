import React from 'react';
import { connect } from 'react-redux';
import { Calendar, Badge } from 'antd';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';

import './paciente.scss';

export type IHomeProp = StateProps;

export const Paciente = (props: IHomeProp) => {
  const { account } = props;

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
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
    <div className="screen-pacientes">
      <section className="banner-pacientes">
        <div className="banner pacientes">
          <div className="titulo-pacientes">
            <h1>Turnos</h1>
          </div>
        </div>
      </section>
      <main className="cuerpo">
        <section className="turnos">
          <h1>Turnos solicitados</h1>
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
          <Button className="button-turnos" type="primary" danger icon={<BookOutlined />}>
            ¡Solicitá tú turno!
          </Button>
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

export default connect(mapStateToProps)(Paciente);
