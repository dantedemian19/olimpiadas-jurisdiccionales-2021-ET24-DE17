import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Paciente from './paciente';

const Routes = ({ match }) => (
  <>
    <Switch>
      {/* <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PacienteUpdate} /> */}
      {/* <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PacienteUpdate} /> */}
      <ErrorBoundaryRoute path={match.url} component={Paciente} />
    </Switch>
  </>
);

export default Routes;
