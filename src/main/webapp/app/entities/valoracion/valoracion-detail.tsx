import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './valoracion.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IValoracionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ValoracionDetail = (props: IValoracionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { valoracionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="valoracionDetailsHeading">Valoracion</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{valoracionEntity.id}</dd>
          <dt>
            <span id="estrellas">Estrellas</span>
          </dt>
          <dd>{valoracionEntity.estrellas}</dd>
          <dt>
            <span id="descripcion">Descripcion</span>
          </dt>
          <dd>{valoracionEntity.descripcion}</dd>
          <dt>
            <span id="isForAttention">Is For Attention</span>
          </dt>
          <dd>{valoracionEntity.isForAttention ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/valoracion" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/valoracion/${valoracionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ valoracion }: IRootState) => ({
  valoracionEntity: valoracion.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ValoracionDetail);
