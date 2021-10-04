import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createValoracion, reset } from './valoracion.reducer';
import { IValoracion } from 'app/shared/model/valoracion.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IValoracionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ValoracionUpdate = (props: IValoracionUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { valoracionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/valoracion' + props.location.search);
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
        ...valoracionEntity,
        ...values,
      };

      if (isNew) {
        props.createValoracion(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="pruebaApp.valoracion.home.createOrEditLabel" data-cy="ValoracionCreateUpdateHeading">
            Create or edit a Valoracion
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : valoracionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="valoracion-id">ID</Label>
                  <AvInput id="valoracion-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="estrellasLabel" for="valoracion-estrellas">
                  Estrellas
                </Label>
                <AvField
                  id="valoracion-estrellas"
                  data-cy="estrellas"
                  type="string"
                  className="form-control"
                  name="estrellas"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 5, errorMessage: 'This field cannot be longer than 5 characters.' },
                    number: { value: true, errorMessage: 'This field should be a number.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descripcionLabel" for="valoracion-descripcion">
                  Descripcion
                </Label>
                <AvField
                  id="valoracion-descripcion"
                  data-cy="descripcion"
                  type="text"
                  name="descripcion"
                  validate={{
                    minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                    maxLength: { value: 500, errorMessage: 'This field cannot be longer than 500 characters.' },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="isForAttentionLabel">
                  <AvInput
                    id="valoracion-isForAttention"
                    data-cy="isForAttention"
                    type="checkbox"
                    className="form-check-input"
                    name="isForAttention"
                  />
                  Is For Attention
                </Label>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/valoracion" replace color="info">
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
  valoracionEntity: storeState.valoracion.entity,
  loading: storeState.valoracion.loading,
  updating: storeState.valoracion.updating,
  updateSuccess: storeState.valoracion.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createValoracion,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ValoracionUpdate);
