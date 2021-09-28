import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './paciente.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPacienteDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PacienteDetail = (props: IPacienteDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { pacienteEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pacienteDetailsHeading">
          <Translate contentKey="pruebaApp.paciente.detail.title">Paciente</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.id}</dd>
          <dt>
            <span id="dni">
              <Translate contentKey="pruebaApp.paciente.dni">Dni</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.dni}</dd>
          <dt>
            <span id="historiaClinica">
              <Translate contentKey="pruebaApp.paciente.historiaClinica">Historia Clinica</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.historiaClinica}</dd>
          <dt>
            <span id="nombre">
              <Translate contentKey="pruebaApp.paciente.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.nombre}</dd>
          <dt>
            <span id="apellido">
              <Translate contentKey="pruebaApp.paciente.apellido">Apellido</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.apellido}</dd>
          <dt>
            <span id="telefono">
              <Translate contentKey="pruebaApp.paciente.telefono">Telefono</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.telefono}</dd>
          <dt>
            <span id="mail">
              <Translate contentKey="pruebaApp.paciente.mail">Mail</Translate>
            </span>
          </dt>
          <dd>{pacienteEntity.mail}</dd>
        </dl>
        <Button tag={Link} to="/paciente" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/paciente/${pacienteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ paciente }: IRootState) => ({
  pacienteEntity: paciente.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PacienteDetail);
