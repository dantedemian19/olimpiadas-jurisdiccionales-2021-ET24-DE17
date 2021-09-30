import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="user" to="/paciente">
      <Translate contentKey="global.menu.entities.paciente" />
    </MenuItem>
    <MenuItem icon="user-plus" to="/medico">
      <Translate contentKey="global.menu.entities.medico" />
    </MenuItem>
    <MenuItem icon="book" to="/turnos">
      <Translate contentKey="global.menu.entities.turno" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/valoracion">
      <Translate contentKey="global.menu.entities.valoracion" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
