import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Valoracion from './valoracion';
import ValoracionDetail from './valoracion-detail';
import ValoracionUpdate from './valoracion-update';
import ValoracionDeleteDialog from './valoracion-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ValoracionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ValoracionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ValoracionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Valoracion} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ValoracionDeleteDialog} />
  </>
);

export default Routes;
