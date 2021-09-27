import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
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
            <Translate contentKey="pruebaApp.medico.home.createOrEditLabel">Create or edit a Medico</Translate>
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
                  <Label for="medico-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="medico-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="dniLabel" for="medico-dni">
                  <Translate contentKey="pruebaApp.medico.dni">Dni</Translate>
                </Label>
                <AvField
                  id="medico-dni"
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
                <Label id="matriculaLabel" for="medico-matricula">
                  <Translate contentKey="pruebaApp.medico.matricula">Matricula</Translate>
                </Label>
                <AvField
                  id="medico-matricula"
                  data-cy="matricula"
                  type="text"
                  name="matricula"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    minLength: { value: 1, errorMessage: translate('entity.validation.minlength', { min: 1 }) },
                    maxLength: { value: 100, errorMessage: translate('entity.validation.maxlength', { max: 100 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="nombreLabel" for="medico-nombre">
                  <Translate contentKey="pruebaApp.medico.nombre">Nombre</Translate>
                </Label>
                <AvField
                  id="medico-nombre"
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
                <Label id="apellidoLabel" for="medico-apellido">
                  <Translate contentKey="pruebaApp.medico.apellido">Apellido</Translate>
                </Label>
                <AvField
                  id="medico-apellido"
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
                <Label id="telefonoLabel" for="medico-telefono">
                  <Translate contentKey="pruebaApp.medico.telefono">Telefono</Translate>
                </Label>
                <AvField
                  id="medico-telefono"
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
                <Label id="mailLabel" for="medico-mail">
                  <Translate contentKey="pruebaApp.medico.mail">Mail</Translate>
                </Label>
                <AvField
                  id="medico-mail"
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
              <AvGroup check>
                <Label id="atiendeDiscapacitadosLabel">
                  <AvInput
                    id="medico-atiendeDiscapacitados"
                    data-cy="atiendeDiscapacitados"
                    type="checkbox"
                    className="form-check-input"
                    name="atiendeDiscapacitados"
                  />
                  <Translate contentKey="pruebaApp.medico.atiendeDiscapacitados">Atiende Discapacitados</Translate>
                </Label>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/medico" replace color="info">
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
