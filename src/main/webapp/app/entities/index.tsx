import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Provincia from './provincia';
import Ciudad from './ciudad';
/* jhipster-needle-add-route-import - JHipster will add routes here */
import Valoracion from './valoracion';
import Paciente from './paciente';
import Turnos from './turnos';
import Medico from './medico';
import Vacunacion from './vacunacion/vacunacion';

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}paciente`} component={Paciente} />
      <ErrorBoundaryRoute path={`${match.url}vacunacion`} component={Vacunacion} />
      <ErrorBoundaryRoute path={`${match.url}turnos`} component={Turnos} />
      <ErrorBoundaryRoute path={`${match.url}provincia`} component={Provincia} />
      <ErrorBoundaryRoute path={`${match.url}ciudad`} component={Ciudad} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
