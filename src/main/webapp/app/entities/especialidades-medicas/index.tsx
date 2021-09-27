import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EspecialidadesMedicas from './especialidades-medicas';
import EspecialidadesMedicasDetail from './especialidades-medicas-detail';
import EspecialidadesMedicasUpdate from './especialidades-medicas-update';
import EspecialidadesMedicasDeleteDialog from './especialidades-medicas-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EspecialidadesMedicasUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EspecialidadesMedicasUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EspecialidadesMedicasDetail} />
      <ErrorBoundaryRoute path={match.url} component={EspecialidadesMedicas} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EspecialidadesMedicasDeleteDialog} />
  </>
);

export default Routes;
