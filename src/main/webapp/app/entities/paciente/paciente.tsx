// removed th id primary key
import './paciente.scss';
import React, { useState, useEffect } from 'react';
import { AUTHORITIES } from 'app/config/constants';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { translate } from 'react-jhipster';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { message } from 'antd';
import { Collapse } from 'antd';
import { getEntity } from './paciente.reducer';
import { IRootState } from 'app/shared/reducers';

export type IPacienteProps = RouteComponentProps<{ url: string }>;

const { Panel } = Collapse;

export interface IAppProps extends StateProps, DispatchProps {}

export const Paciente = (props: IAppProps) => {
  const [inputValue, setInputValue] = useState(null);

  function handleChange(value) {
    setInputValue(value.target.defaultValue);
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(inputValue);

    if (inputValue?.length >= 7) {
      const varrr = props.getEntity(inputValue);
      // eslint-disable-next-line no-console
      console.log(varrr);
    }
  }, [inputValue]);

  // eslint-disable-next-line no-console
  console.log(AUTHORITIES);

  return (
    <div>
      <section>
        <div className="banner pacientes">
          <div className="banner-turnos">
            <div className="titulo-turnos">
              <h1>PACIENTES</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="paciente-registrado">
        <h1>Usuarios registrados</h1>
        <AvForm className="form-paciente">
          <AvField
            // style={{ width: '25%' }}
            className="inputs-contacto input-dni"
            name="dni"
            label="DNI"
            placeholder="Ingrese su DNI"
            required
            errorMessage="Debe ingresar un DNI"
            data-cy="dni"
            onChange={handleChange}
          />
          <Collapse className="collapse">
            <Panel header="Actualizar diario de paciente" key="1" className="panel" disabled={inputValue?.length >= 7 ? false : true}>
              <AvField className="inputs-contacto" name="fecha" type="date" label="Fecha" required data-cy="fecha" />
              <label htmlFor="entrada">Entrada</label>
              <AvInput type="textarea" name="entrada" style={{ resize: 'none', height: 100 }} placeholder="Entrada" />
              <button className="btn" style={{ marginTop: 15, backgroundColor: '#e63946', color: 'white' }}>
                Actualizar información
              </button>
            </Panel>
            <Panel header="Actualizar historia clínica" key="2" className="panel" disabled={inputValue?.length >= 7 ? false : true}>
              <AvField
                className="inputs-contacto"
                name="medico"
                type="text"
                label="Médico autor"
                placeholder="Médico"
                required
                data-cy="medico"
              />
              <AvField className="inputs-contacto" name="fecha" type="date" label="Fecha" required data-cy="fecha" />
              <label htmlFor="entrada">Entrada</label>
              <AvInput type="textarea" name="entrada" style={{ resize: 'none', height: 100 }} placeholder="Entrada" />
              <button className="btn" style={{ marginTop: 15, backgroundColor: '#e63946', color: 'white' }}>
                Actualizar información
              </button>
            </Panel>
          </Collapse>
        </AvForm>
      </section>
    </div>
  );
};

const mapStateToProps = () => ({
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      // eslint-disable-next-line no-console
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    // eslint-disable-next-line no-console
    console.log('Dropped files', e.dataTransfer.files);
  },
});

const mapDispatchToProps = {
  getEntity,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Paciente);
