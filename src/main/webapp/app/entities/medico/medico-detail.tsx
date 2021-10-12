import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
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
        <h2 data-cy="medicoDetailsHeading">Medico</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{medicoEntity.id}</dd>
          <dt>
            <span id="dni">Dni</span>
          </dt>
          <dd>{medicoEntity.dni}</dd>
          <dt>
            <span id="matricula">Matricula</span>
          </dt>
          <dd>{medicoEntity.matricula}</dd>
          <dt>
            <span id="nombre">Nombre</span>
          </dt>
          <dd>{medicoEntity.nombre}</dd>
          <dt>
            <span id="apellido">Apellido</span>
          </dt>
          <dd>{medicoEntity.apellido}</dd>
          <dt>
            <span id="telefono">Telefono</span>
          </dt>
          <dd>{medicoEntity.telefono}</dd>
          <dt>
            <span id="mail">Mail</span>
          </dt>
          <dd>{medicoEntity.mail}</dd>
          <dt>
            <span id="atiendeDiscapacitados">Atiende Discapacitados</span>
          </dt>
          <dd>{medicoEntity.atiendeDiscapacitados ? 'true' : 'false'}</dd>
          <dt>
            <span id="especialidad">Especialidad</span>
          </dt>
          <dd>{medicoEntity.especialidad}</dd>
          <dt>
            <span id="provinciaId">Provincia Id</span>
          </dt>
          <dd>{medicoEntity.provinciaId}</dd>
          <dt>
            <span id="ciudadId">Ciudad Id</span>
          </dt>
          <dd>{medicoEntity.ciudadId}</dd>
        </dl>
        <Button tag={Link} to="/medico" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/medico/${medicoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
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
