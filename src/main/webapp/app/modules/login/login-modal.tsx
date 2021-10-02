import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import './modal.scss';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

class LoginModal extends React.Component<ILoginModalProps> {
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
    handleLogin(username, password, rememberMe);
  };

  render() {
    const { loginError, handleClose } = this.props;

    return (
      <Modal isOpen={this.props.showModal} style={{ zoom: '85%' }} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
            <Translate contentKey="login.title">Sign in</Translate>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12" className="col-login">
                {loginError ? (
                  <Alert color="danger" data-cy="loginError">
                    <Translate contentKey="login.messages.error.authentication">
                      <strong>Failed to sign in!</strong> Please check your credentials and try again.
                    </Translate>
                  </Alert>
                ) : null}
              </Col>
              <Col md="12" className="col-login">
                <AvField
                  name="username"
                  label={translate('global.form.username.label')}
                  placeholder={translate('global.form.username.placeholder')}
                  required
                  errorMessage="El usuario no puede estar vacío!"
                  autoFocus
                  data-cy="username"
                />
                <AvField
                  name="password"
                  type="password"
                  label={translate('login.form.password')}
                  placeholder={translate('login.form.password.placeholder')}
                  required
                  errorMessage="La contraseña no puede estar vacía!"
                  data-cy="password"
                />
                <AvGroup check inline>
                  <Label className="form-check-label" style={{ display: 'flex', flexDirection: 'row' }}>
                    <AvInput type="checkbox" name="rememberMe" />{' '}
                    <div style={{ fontSize: 16, marginTop: '-6px' }}>
                      <Translate contentKey="login.form.rememberme">Remember me</Translate>
                    </div>
                  </Label>
                </AvGroup>
              </Col>
            </Row>
            <br />
            <Alert color="dark" className="alerta-login">
              <Link to="/account/reset/request" data-cy="forgetYourPasswordSelector" className="link">
                <Translate contentKey="login.password.forgot">Did you forget your password?</Translate>
              </Link>
            </Alert>
            <Alert color="dark" className="alerta-login">
              <span>
                <Translate contentKey="global.messages.info.register.noaccount">You don&apos;t have an account yet?</Translate>
              </span>{' '}
              <Link to="/account/register" className="link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button className="cancelar" onClick={handleClose} tabIndex={1}>
              <Translate contentKey="entity.action.cancel">Cancel</Translate>
            </Button>{' '}
            <Button className="iniciar-sesion" type="submit" data-cy="submit">
              <Translate contentKey="login.form.button">Sign in</Translate>
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default LoginModal;
