import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './medico.reducer';
import { IMedico } from 'app/shared/model/medico.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMedicoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MedicoUpdate = (props: IMedicoUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { medicoEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/medico' + props.location.search);
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
        ...medicoEntity,
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
          <h2 id="pruebaApp.medico.home.createOrEditLabel" data-cy="MedicoCreateUpdateHeading">
            Create or edit a Medico
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : medicoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="medico-id">ID</Label>
                  <AvInput id="medico-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="dniLabel" for="medico-dni">
                  Dni
                </Label>
                <AvField
                  id="medico-dni"
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
                <Label id="matriculaLabel" for="medico-matricula">
                  Matricula
                </Label>
                <AvField
                  id="medico-matricula"
                  data-cy="matricula"
                  type="text"
                  name="matricula"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 100, errorMessage: 'This field cannot be longer than 100 characters.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombreLabel" for="medico-nombre">
                  Nombre
                </Label>
                <AvField
                  id="medico-nombre"
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
                <Label id="apellidoLabel" for="medico-apellido">
                  Apellido
                </Label>
                <AvField
                  id="medico-apellido"
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
                <Label id="telefonoLabel" for="medico-telefono">
                  Telefono
                </Label>
                <AvField
                  id="medico-telefono"
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
                <Label id="mailLabel" for="medico-mail">
                  Mail
                </Label>
                <AvField
                  id="medico-mail"
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
              <AvGroup check>
                <Label id="atiendeDiscapacitadosLabel">
                  <AvInput
                    id="medico-atiendeDiscapacitados"
                    data-cy="atiendeDiscapacitados"
                    type="checkbox"
                    className="form-check-input"
                    name="atiendeDiscapacitados"
                  />
                  Atiende Discapacitados
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="especialidadLabel" for="medico-especialidad">
                  Especialidad
                </Label>
                <AvInput
                  id="medico-especialidad"
                  data-cy="especialidad"
                  type="select"
                  className="form-control"
                  name="especialidad"
                  value={(!isNew && medicoEntity.especialidad) || 'CLINICO'}
                >
                  <option value="CLINICO">CLINICO</option>
                  <option value="DERMATOLOGIA">DERMATOLOGIA</option>
                  <option value="GINECOLOGIA">GINECOLOGIA</option>
                  <option value="EMERGENCIAS">EMERGENCIAS</option>
                  <option value="OFTALMOLOGIA">OFTALMOLOGIA</option>
                  <option value="OTORRINOLARINGOLOGIA">OTORRINOLARINGOLOGIA</option>
                  <option value="TRAUMATOLOGIA">TRAUMATOLOGIA</option>
                  <option value="UROLOGIA">UROLOGIA</option>
                  <option value="ANATOMIA_PATOLOGIA">ANATOMIA_PATOLOGIA</option>
                  <option value="BIOQUIMICA">BIOQUIMICA</option>
                  <option value="FARMACOLOGIA">FARMACOLOGIA</option>
                  <option value="GENETICA_MEDICA">GENETICA_MEDICA</option>
                  <option value="INMUNOLOGIA">INMUNOLOGIA</option>
                  <option value="MEDICINA_NUCLEAR">MEDICINA_NUCLEAR</option>
                  <option value="RADIOLOGIA">RADIOLOGIA</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="provinciaIdLabel" for="medico-provinciaId">
                  Provincia Id
                </Label>
                <AvField
                  id="medico-provinciaId"
                  data-cy="provinciaId"
                  type="text"
                  name="provinciaId"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="ciudadIdLabel" for="medico-ciudadId">
                  Ciudad Id
                </Label>
                <AvField id="medico-ciudadId" data-cy="ciudadId" type="text" name="ciudadId" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/medico" replace color="info">
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
  medicoEntity: storeState.medico.entity,
  loading: storeState.medico.loading,
  updating: storeState.medico.updating,
  updateSuccess: storeState.medico.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MedicoUpdate);
