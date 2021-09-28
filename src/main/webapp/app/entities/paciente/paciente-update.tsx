import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './paciente.reducer';
import { IPaciente } from 'app/shared/model/paciente.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPacienteUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PacienteUpdate = (props: IPacienteUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { pacienteEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/paciente' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...pacienteEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="pruebaApp.paciente.home.createOrEditLabel" data-cy="PacienteCreateUpdateHeading">
            <Translate contentKey="pruebaApp.paciente.home.createOrEditLabel">Create or edit a Paciente</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : pacienteEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="paciente-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="paciente-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="dniLabel" for="paciente-dni">
                  <Translate contentKey="pruebaApp.paciente.dni">Dni</Translate>
                </Label>
                <AvField
                  id="paciente-dni"
                  data-cy="dni"
                  type="string"
                  className="form-control"
                  name="dni"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 8, errorMessage: translate('entity.validation.maxlength', { max: 8 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="historiaClinicaLabel" for="paciente-historiaClinica">
                  <Translate contentKey="pruebaApp.paciente.historiaClinica">Historia Clinica</Translate>
                </Label>
                <AvField
                  id="paciente-historiaClinica"
                  data-cy="historiaClinica"
                  type="text"
                  name="historiaClinica"
                  validate={{
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 500, errorMessage: translate('entity.validation.maxlength', { max: 500 }) },
                    pattern: {
                      value: '^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombreLabel" for="paciente-nombre">
                  <Translate contentKey="pruebaApp.paciente.nombre">Nombre</Translate>
                </Label>
                <AvField
                  id="paciente-nombre"
                  data-cy="nombre"
                  type="text"
                  name="nombre"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 100, errorMessage: translate('entity.validation.maxlength', { max: 100 }) },
                    pattern: {
                      value: '^[A-Za-z0-9 ]+$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[A-Za-z0-9 ]+$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="apellidoLabel" for="paciente-apellido">
                  <Translate contentKey="pruebaApp.paciente.apellido">Apellido</Translate>
                </Label>
                <AvField
                  id="paciente-apellido"
                  data-cy="apellido"
                  type="text"
                  name="apellido"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 100, errorMessage: translate('entity.validation.maxlength', { max: 100 }) },
                    pattern: {
                      value: '^[A-Za-z0-9 ]+$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[A-Za-z0-9 ]+$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="telefonoLabel" for="paciente-telefono">
                  <Translate contentKey="pruebaApp.paciente.telefono">Telefono</Translate>
                </Label>
                <AvField
                  id="paciente-telefono"
                  data-cy="telefono"
                  type="string"
                  className="form-control"
                  name="telefono"
                  validate={{
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 10, errorMessage: translate('entity.validation.maxlength', { max: 10 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="mailLabel" for="paciente-mail">
                  <Translate contentKey="pruebaApp.paciente.mail">Mail</Translate>
                </Label>
                <AvField
                  id="paciente-mail"
                  data-cy="mail"
                  type="text"
                  name="mail"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    pattern: {
                      value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$' }),
                    },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/paciente" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  pacienteEntity: storeState.paciente.entity,
  loading: storeState.paciente.loading,
  updating: storeState.paciente.updating,
  updateSuccess: storeState.paciente.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PacienteUpdate);
