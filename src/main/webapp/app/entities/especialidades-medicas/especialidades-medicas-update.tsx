import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './especialidades-medicas.reducer';
import { IEspecialidadesMedicas } from 'app/shared/model/especialidades-medicas.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEspecialidadesMedicasUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EspecialidadesMedicasUpdate = (props: IEspecialidadesMedicasUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { especialidadesMedicasEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/especialidades-medicas' + props.location.search);
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
        ...especialidadesMedicasEntity,
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
          <h2 id="pruebaApp.especialidadesMedicas.home.createOrEditLabel" data-cy="EspecialidadesMedicasCreateUpdateHeading">
            <Translate contentKey="pruebaApp.especialidadesMedicas.home.createOrEditLabel">
              Create or edit a EspecialidadesMedicas
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : especialidadesMedicasEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="especialidades-medicas-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="especialidades-medicas-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="especialidadLabel" for="especialidades-medicas-especialidad">
                  <Translate contentKey="pruebaApp.especialidadesMedicas.especialidad">Especialidad</Translate>
                </Label>
                <AvInput
                  id="especialidades-medicas-especialidad"
                  data-cy="especialidad"
                  type="select"
                  className="form-control"
                  name="especialidad"
                  value={(!isNew && especialidadesMedicasEntity.especialidad) || 'CLINICO'}
                >
                  <option value="CLINICO">{translate('pruebaApp.EspecialidadesTipo.CLINICO')}</option>
                  <option value="DERMATOLOGIA">{translate('pruebaApp.EspecialidadesTipo.DERMATOLOGIA')}</option>
                  <option value="GINECOLOGIA">{translate('pruebaApp.EspecialidadesTipo.GINECOLOGIA')}</option>
                  <option value="EMERGENCIAS">{translate('pruebaApp.EspecialidadesTipo.EMERGENCIAS')}</option>
                  <option value="OFTALMOLOGIA">{translate('pruebaApp.EspecialidadesTipo.OFTALMOLOGIA')}</option>
                  <option value="OTORRINOLARINGOLOGIA">{translate('pruebaApp.EspecialidadesTipo.OTORRINOLARINGOLOGIA')}</option>
                  <option value="TRAUMATOLOGIA">{translate('pruebaApp.EspecialidadesTipo.TRAUMATOLOGIA')}</option>
                  <option value="UROLOGIA">{translate('pruebaApp.EspecialidadesTipo.UROLOGIA')}</option>
                  <option value="ANATOMIA_PATOLOGIA">{translate('pruebaApp.EspecialidadesTipo.ANATOMIA_PATOLOGIA')}</option>
                  <option value="BIOQUIMICA">{translate('pruebaApp.EspecialidadesTipo.BIOQUIMICA')}</option>
                  <option value="FARMACOLOGIA">{translate('pruebaApp.EspecialidadesTipo.FARMACOLOGIA')}</option>
                  <option value="GENETICA_MEDICA">{translate('pruebaApp.EspecialidadesTipo.GENETICA_MEDICA')}</option>
                  <option value="INMUNOLOGIA">{translate('pruebaApp.EspecialidadesTipo.INMUNOLOGIA')}</option>
                  <option value="MEDICINA_NUCLEAR">{translate('pruebaApp.EspecialidadesTipo.MEDICINA_NUCLEAR')}</option>
                  <option value="RADIOLOGIA">{translate('pruebaApp.EspecialidadesTipo.RADIOLOGIA')}</option>
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/especialidades-medicas" replace color="info">
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
  especialidadesMedicasEntity: storeState.especialidadesMedicas.entity,
  loading: storeState.especialidadesMedicas.loading,
  updating: storeState.especialidadesMedicas.updating,
  updateSuccess: storeState.especialidadesMedicas.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EspecialidadesMedicasUpdate);
