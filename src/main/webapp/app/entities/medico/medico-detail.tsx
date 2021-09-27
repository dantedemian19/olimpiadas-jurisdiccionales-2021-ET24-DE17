import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './medico.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMedicoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MedicoDetail = (props: IMedicoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { medicoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="medicoDetailsHeading">
          <Translate contentKey="pruebaApp.medico.detail.title">Medico</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.id}</dd>
          <dt>
            <span id="dni">
              <Translate contentKey="pruebaApp.medico.dni">Dni</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.dni}</dd>
          <dt>
            <span id="matricula">
              <Translate contentKey="pruebaApp.medico.matricula">Matricula</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.matricula}</dd>
          <dt>
            <span id="nombre">
              <Translate contentKey="pruebaApp.medico.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.nombre}</dd>
          <dt>
            <span id="apellido">
              <Translate contentKey="pruebaApp.medico.apellido">Apellido</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.apellido}</dd>
          <dt>
            <span id="telefono">
              <Translate contentKey="pruebaApp.medico.telefono">Telefono</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.telefono}</dd>
          <dt>
            <span id="mail">
              <Translate contentKey="pruebaApp.medico.mail">Mail</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.mail}</dd>
          <dt>
            <span id="atiendeDiscapacitados">
              <Translate contentKey="pruebaApp.medico.atiendeDiscapacitados">Atiende Discapacitados</Translate>
            </span>
          </dt>
          <dd>{medicoEntity.atiendeDiscapacitados ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/medico" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/medico/${medicoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ medico }: IRootState) => ({
  medicoEntity: medico.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MedicoDetail);
