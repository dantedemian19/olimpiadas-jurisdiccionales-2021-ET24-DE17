import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Row, Col, Alert, Button } from 'reactstrap';

import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { IRootState } from 'app/shared/reducers';
import { handleRegister, reset } from './register-medico.reducer';
import { Select } from 'antd';

import './register-medico.scss';

export interface IRegisterProps extends StateProps, DispatchProps {}

export const RegisterMedico = (props: IRegisterProps) => {
  const [password, setPassword] = useState('');
  const [discapacitadosValue, setDiscapacitadosValue] = useState(false);

  const { Option } = Select;

  useEffect(
    () => () => {
      props.reset();
    },
    []
  );

  const changeSelectValue = value => {
    // eslint-disable-next-line no-console
    console.log(value.value);
    setDiscapacitadosValue(value.value);
  };

  const handleValidSubmit = (event, values) => {
    // props.handleRegister(values.username, values.email, values.firstPassword, props.currentLocale);
    // event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const updatePassword = event => setPassword(event.target.value);

  return (
    <div style={{ margin: '50px 0' }}>
      <Row className="justify-content-center">
        <Col md="9">
          <h1 id="register-title" data-cy="registerTitle">
            <Translate contentKey="register.titleMedico">Registro médico</Translate>
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="9">
          <AvForm id="register-form" onValidSubmit={handleValidSubmit}>
            <div className="mitad-izq">
              <AvField
                name="username"
                label={translate('global.form.username.label')}
                placeholder={translate('global.form.username.placeholder')}
                validate={{
                  required: { value: true, errorMessage: translate('register.messages.validate.login.required') },
                  pattern: {
                    value: '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$',
                    errorMessage: translate('register.messages.validate.login.pattern'),
                  },
                  minLength: { value: 1, errorMessage: translate('register.messages.validate.login.minlength') },
                  maxLength: { value: 50, errorMessage: translate('register.messages.validate.login.maxlength') },
                }}
                data-cy="username"
              />
              <AvField
                name="email"
                label={translate('global.form.email.label')}
                placeholder={translate('global.form.email.placeholder')}
                type="email"
                validate={{
                  required: { value: true, errorMessage: translate('global.messages.validate.email.required') },
                  minLength: { value: 5, errorMessage: translate('global.messages.validate.email.minlength') },
                  maxLength: { value: 254, errorMessage: translate('global.messages.validate.email.maxlength') },
                }}
                data-cy="email"
              />
              <AvField
                name="firstPassword"
                label={translate('global.form.newpassword.label')}
                placeholder={translate('global.form.newpassword.placeholder')}
                type="password"
                onChange={updatePassword}
                validate={{
                  required: { value: true, errorMessage: translate('global.messages.validate.newpassword.required') },
                  minLength: { value: 4, errorMessage: translate('global.messages.validate.newpassword.minlength') },
                  maxLength: { value: 50, errorMessage: translate('global.messages.validate.newpassword.maxlength') },
                }}
                data-cy="firstPassword"
              />
              <div className="fuerza-passsword">
                <PasswordStrengthBar password={password} />
              </div>
              <AvField
                name="secondPassword"
                label={translate('global.form.confirmpassword.label')}
                placeholder={translate('global.form.confirmpassword.placeholder')}
                type="password"
                validate={{
                  required: { value: true, errorMessage: translate('global.messages.validate.confirmpassword.required') },
                  minLength: { value: 4, errorMessage: translate('global.messages.validate.confirmpassword.minlength') },
                  maxLength: { value: 50, errorMessage: translate('global.messages.validate.confirmpassword.maxlength') },
                  match: { value: 'firstPassword', errorMessage: translate('global.messages.error.dontmatch') },
                }}
                data-cy="secondPassword"
              />
              <AvField
                name="matricula"
                label="Matrícula"
                placeholder="Ingrese su matrícula"
                type="text"
                validate={{
                  required: { value: true, errorMessage: 'Debe ingresar una matrícula' },
                  minLength: { value: 4, errorMessage: 'LA matrícula no puede ser menor a 4 carácteres' },
                  maxLength: { value: 50, errorMessage: 'LA matrícula no puede ser mayor a 50 carácteres' },
                }}
                data-cy="matricula"
              />
            </div>
            <div className="mitad-der">
              <AvField
                name="nombre"
                label="Nombre"
                placeholder="Ingrese su nombre"
                validate={{
                  required: { value: true, errorMessage: 'Debe ingresar un nombre' },
                  pattern: {
                    value: '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$',
                    errorMessage: translate('register.messages.validate.login.pattern'),
                  },
                  minLength: { value: 1, errorMessage: translate('register.messages.validate.login.minlength') },
                  maxLength: { value: 50, errorMessage: translate('register.messages.validate.login.maxlength') },
                }}
                data-cy="nombre"
              />
              <AvField
                name="apellido"
                label="Apellido"
                placeholder="Ingrese su apellido"
                validate={{
                  required: { value: true, errorMessage: 'Debe ingresar un apellido' },
                  pattern: {
                    value: '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$',
                    errorMessage: translate('register.messages.validate.login.pattern'),
                  },
                  minLength: { value: 1, errorMessage: translate('register.messages.validate.login.minlength') },
                  maxLength: { value: 50, errorMessage: translate('register.messages.validate.login.maxlength') },
                }}
                data-cy="apellido"
              />
              <AvField
                name="dni"
                label="DNI"
                placeholder="Ingrese su DNI"
                type="number"
                validate={{
                  required: { value: true, errorMessage: 'Debe ingresar un DNI' },
                  minLength: { value: 7, errorMessage: 'El DNI no puede ser menor a 7 carácteres' },
                  maxLength: { value: 10, errorMessage: 'El DNI no puede ser mayor a 10 carácteres' },
                }}
                data-cy="dni"
              />
              <AvField
                name="telefono"
                label="Teléfono"
                placeholder="Ingrese su teléfono"
                type="number"
                validate={{
                  required: { value: true, errorMessage: 'Debe ingresar un teléfono' },
                  minLength: { value: 7, errorMessage: 'El teléfono no puede ser menor a 7 carácteres' },
                  maxLength: { value: 10, errorMessage: 'El teléfono no puede ser mayor a 10 carácteres' },
                }}
                data-cy="telefono"
              />
              <div className="discapacitados">
                <label htmlFor="">¿Atiende discapacitados?</label>
                <Select labelInValue placeholder="Seleccione una opción" className="dropdown-select" onChange={changeSelectValue}>
                  <Option value="true">Si</Option>
                  <Option value="false">No</Option>
                </Select>
              </div>
            </div>
            <Button id="register-submit" className="iniciar-sesion" type="submit" data-cy="submit">
              <Translate contentKey="register.form.button">Register</Translate>
            </Button>
          </AvForm>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ locale }: IRootState) => ({
  currentLocale: locale.currentLocale,
});

const mapDispatchToProps = { handleRegister, reset };
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMedico);
