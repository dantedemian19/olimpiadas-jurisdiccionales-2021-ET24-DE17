import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
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
        <h2 data-cy="pacienteDetailsHeading">Paciente</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pacienteEntity.id}</dd>
          <dt>
            <span id="dni">Dni</span>
          </dt>
          <dd>{pacienteEntity.dni}</dd>
          <dt>
            <span id="historiaClinica">Historia Clinica</span>
          </dt>
          <dd>{pacienteEntity.historiaClinica}</dd>
          <dt>
            <span id="nombre">Nombre</span>
          </dt>
          <dd>{pacienteEntity.nombre}</dd>
          <dt>
            <span id="apellido">Apellido</span>
          </dt>
          <dd>{pacienteEntity.apellido}</dd>
          <dt>
            <span id="telefono">Telefono</span>
          </dt>
          <dd>{pacienteEntity.telefono}</dd>
          <dt>
            <span id="mail">Mail</span>
          </dt>
          <dd>{pacienteEntity.mail}</dd>
        </dl>
        <Button tag={Link} to="/paciente" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/paciente/${pacienteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
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
