import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Medico from './medico';
import MedicoDetail from './medico-detail';
import MedicoUpdate from './medico-update';
import MedicoDeleteDialog from './medico-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MedicoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MedicoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MedicoDetail} />
      <ErrorBoundaryRoute path={match.url} component={Medico} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MedicoDeleteDialog} />
  </>
);

export default Routes;
