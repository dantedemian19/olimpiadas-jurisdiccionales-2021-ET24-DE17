// removed th id primary key
import './paciente.scss';
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getSortState, translate } from 'react-jhipster';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Upload, message, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { getEntity } from './paciente.reducer';
import { IRootState } from 'app/shared/reducers';

export type IPacienteProps = RouteComponentProps<{ url: string }>;

const props = {
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
};

const { Panel } = Collapse;

export const Paciente = () => {
  const { Dragger } = Upload;

  const [inputValue, setInputValue] = useState(null);

  function handleChange(value) {
    setInputValue(value.target.defaultValue);
  }

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log(inputValue);

  //   if (inputValue?.length >= 7) {
  //     props.getEntiy();
  //   }
  // }, [inputValue]);

  const { Option } = Select;

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

      <section className="formulario-paciente">
        <div className="div-pacientes">
          <div className="formulario-medicos">
            <AvForm className="form-medico">
              <AvField
                className="inputs-turnos"
                name="dni"
                type="text"
                label="DNI"
                placeholder="Ingrese su DNI"
                required
                errorMessage="El DNI no puede estar vacío!"
                data-cy="dni"
              />
              <AvField
                className="inputs-turnos"
                name="nombre"
                type="text"
                label="Nombre"
                placeholder="Ingrese su nombre"
                required
                errorMessage="El nombre no puede estar vacío!"
                data-cy="nombre"
              />
              <AvField
                className="inputs-turnos"
                name="apellido"
                type="text"
                label="Apellido"
                placeholder="Ingrese su apellido"
                required
                errorMessage="El apellido no puede estar vacío!"
                data-cy="apellido"
              />
              <AvField
                className="inputs-turnos"
                name="telefono"
                type="text"
                label="Teléfono"
                placeholder="Ingrese su teléfono"
                required
                errorMessage="El teléfono no puede estar vacío!"
                data-cy="telefono"
              />
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
            </AvForm>
            <button className="btn button-medico">Registrarse</button>
          </div>
          <div className="imagen-medicos pacientitos"></div>
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

// eslint-disable-next-line no-empty-pattern
const mapStateToProps = ({}: IRootState) => ({});

const mapDispatchToProps = {
  getEntity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Paciente);
