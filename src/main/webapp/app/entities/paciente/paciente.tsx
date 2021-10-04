// removed th id primary key
import './paciente.scss';
import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getSortState, translate } from 'react-jhipster';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

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

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(inputValue);
  }, [inputValue]);

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
        <h1>Diario e Historia clínica</h1>
        <AvForm className="form-paciente">
          <AvField
            style={{ width: '25%' }}
            className="inputs-contacto"
            name="dni"
            label="DNI"
            placeholder="Ingrese su DNI"
            required
            errorMessage="Debe ingresar un DNI"
            data-cy="dni"
            onChange={handleChange}
          />
          <Collapse className="collapse">
            <Panel header="Ver diario de paciente" key="1" className="panel" disabled={inputValue?.length >= 7 ? false : true}>
              <AvField className="inputs-contacto" name="fecha" type="date" label="Fecha" required data-cy="fecha" />
              <label htmlFor="entrada">Entrada</label>
              <AvInput type="textarea" name="entrada" style={{ resize: 'none', height: 100 }} placeholder="Entrada" />
              <button className="btn btn-primary actualizar" style={{ marginTop: 15 }}>
                Actualizar información
              </button>
            </Panel>
            <Panel header="Ver historia clínica" key="2" className="panel" disabled={inputValue?.length >= 7 ? false : true}>
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
              <button className="btn btn-primary actualizar" style={{ marginTop: 15 }}>
                Actualizar información
              </button>
            </Panel>
          </Collapse>
        </AvForm>
      </section>
      <section className="recetas">
        <div className="contenido">
          <h1>Recetas</h1>
          <Dragger
            {...props}
            beforeUpload={file => {
              const isJPG = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'pdf';
              if (!isJPG) {
                message.error('You can only upload JPG or PNG file!');
                return false;
              } else {
                return true;
              }
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Clickea o arrastrá tus recetas</p>
            <p className="ant-upload-hint">Mantené tus recetas al alcance de tu mano para simepre estar al día.</p>
          </Dragger>
        </div>
      </section>
    </div>
  );
};

export default Paciente;
