import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
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
            Create or edit a Paciente
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
                  <Label for="paciente-id">ID</Label>
                  <AvInput id="paciente-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="dniLabel" for="paciente-dni">
                  Dni
                </Label>
                <AvField
                  id="paciente-dni"
                  data-cy="dni"
                  type="string"
                  className="form-control"
                  name="dni"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 8, errorMessage: 'This field cannot be longer than 8 characters.' },
                    number: { value: true, errorMessage: 'This field should be a number.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="historiaClinicaLabel" for="paciente-historiaClinica">
                  Historia Clinica
                </Label>
                <AvField
                  id="paciente-historiaClinica"
                  data-cy="historiaClinica"
                  type="text"
                  name="historiaClinica"
                  validate={{
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 500, errorMessage: 'This field cannot be longer than 500 characters.' },
                    pattern: {
                      value: '^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+$',
                      errorMessage: "This field should follow pattern for '^([A-Za-z0-9á-ü,.;?¡!¿Á-Ü-_ ])+..",
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombreLabel" for="paciente-nombre">
                  Nombre
                </Label>
                <AvField
                  id="paciente-nombre"
                  data-cy="nombre"
                  type="text"
                  name="nombre"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 100, errorMessage: 'This field cannot be longer than 100 characters.' },
                    pattern: { value: '^[A-Za-z0-9 ]+$', errorMessage: "This field should follow pattern for '^[A-Za-z0-9 ]+.." },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="apellidoLabel" for="paciente-apellido">
                  Apellido
                </Label>
                <AvField
                  id="paciente-apellido"
                  data-cy="apellido"
                  type="text"
                  name="apellido"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 100, errorMessage: 'This field cannot be longer than 100 characters.' },
                    pattern: { value: '^[A-Za-z0-9 ]+$', errorMessage: "This field should follow pattern for '^[A-Za-z0-9 ]+.." },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="telefonoLabel" for="paciente-telefono">
                  Telefono
                </Label>
                <AvField
                  id="paciente-telefono"
                  data-cy="telefono"
                  type="string"
                  className="form-control"
                  name="telefono"
                  validate={{
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 10, errorMessage: 'This field cannot be longer than 10 characters.' },
                    number: { value: true, errorMessage: 'This field should be a number.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="mailLabel" for="paciente-mail">
                  Mail
                </Label>
                <AvField
                  id="paciente-mail"
                  data-cy="mail"
                  type="text"
                  name="mail"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    pattern: {
                      value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
                      errorMessage: "This field should follow pattern for '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}..",
                    },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/paciente" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
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
