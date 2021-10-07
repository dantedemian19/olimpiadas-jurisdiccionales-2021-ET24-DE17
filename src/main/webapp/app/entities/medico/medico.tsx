// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './medico.reducer';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { Select } from 'antd';

import './medico.scss';

export interface IMedicoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Medico = (props: IMedicoProps) => {
  const { Option } = Select;

  return (
    <div>
      <section>
        <div className="banner medicos">
          <div className="banner-turnos">
            <div className="titulo-turnos">
              <h1>MEDICO</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="cuerpo-medicos">
        <div className="div-medicos">
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
                name="matricula"
                label="Matrícula"
                placeholder="Ingrese su matrícula"
                type="text"
                required
                errorMessage="La matrícula no puede estar vacía!"
                data-cy="matricula"
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
              <div className="discapacitados">
                <label htmlFor="">¿Atiende discapacitados?</label>
                <Select labelInValue placeholder="Seleccione una opción" className="dropdown-select">
                  <Option value="si">Si</Option>
                  <Option value="no">No</Option>
                </Select>
              </div>
            </AvForm>
            <button className="btn button-medico">Registrarse</button>
          </div>
          <div className="imagen-medicos"></div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ medico }: IRootState) => ({
  medicoList: medico.entities,
  loading: medico.loading,
  totalItems: medico.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Medico);
