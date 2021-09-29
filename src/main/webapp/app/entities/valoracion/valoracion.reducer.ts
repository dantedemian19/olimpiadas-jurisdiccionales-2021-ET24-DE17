import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IValoracion, defaultValue } from 'app/shared/model/valoracion.model';

export const ACTION_TYPES = {
  FETCH_VALORACION_LIST: 'valoracion/FETCH_VALORACION_LIST',
  FETCH_VALORACION: 'valoracion/FETCH_VALORACION',
  CREATE_VALORACION: 'valoracion/CREATE_VALORACION',
  UPDATE_VALORACION: 'valoracion/UPDATE_VALORACION',
  PARTIAL_UPDATE_VALORACION: 'valoracion/PARTIAL_UPDATE_VALORACION',
  DELETE_VALORACION: 'valoracion/DELETE_VALORACION',
  RESET: 'valoracion/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IValoracion>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type ValoracionState = Readonly<typeof initialState>;

// Reducer

export default (state: ValoracionState = initialState, action): ValoracionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_VALORACION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_VALORACION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_VALORACION):
    case REQUEST(ACTION_TYPES.UPDATE_VALORACION):
    case REQUEST(ACTION_TYPES.DELETE_VALORACION):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_VALORACION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_VALORACION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_VALORACION):
    case FAILURE(ACTION_TYPES.CREATE_VALORACION):
    case FAILURE(ACTION_TYPES.UPDATE_VALORACION):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_VALORACION):
    case FAILURE(ACTION_TYPES.DELETE_VALORACION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_VALORACION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_VALORACION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_VALORACION):
    case SUCCESS(ACTION_TYPES.UPDATE_VALORACION):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_VALORACION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_VALORACION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/valoracions';

// Actions

export const getEntities: ICrudGetAllAction<IValoracion> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_VALORACION_LIST,
    payload: axios.get<IValoracion>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IValoracion> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_VALORACION,
    payload: axios.get<IValoracion>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IValoracion> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_VALORACION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IValoracion> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_VALORACION,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<IValoracion> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_VALORACION,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IValoracion> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_VALORACION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
