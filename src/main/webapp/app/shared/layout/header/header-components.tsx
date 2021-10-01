import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';
import { faBacterium } from '@fortawesome/free-solid-svg-icons';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title">C-CARE</span>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem style={{ display: 'flex', flexDirection: 'row', marginRight: '-2px' }}>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" style={{ marginRight: 2 }} />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
    <NavLink tag={Link} to="/covid-19" className="align-items-center">
      <FontAwesomeIcon icon={faBacterium} style={{ marginRight: 2 }} />
      <span>
        <Translate contentKey="global.menu.covid">COVID-19</Translate>
      </span>
    </NavLink>
  </NavItem>
);
