import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEspecialidadesMedicas, defaultValue } from 'app/shared/model/especialidades-medicas.model';

export const ACTION_TYPES = {
  FETCH_ESPECIALIDADESMEDICAS_LIST: 'especialidadesMedicas/FETCH_ESPECIALIDADESMEDICAS_LIST',
  FETCH_ESPECIALIDADESMEDICAS: 'especialidadesMedicas/FETCH_ESPECIALIDADESMEDICAS',
  CREATE_ESPECIALIDADESMEDICAS: 'especialidadesMedicas/CREATE_ESPECIALIDADESMEDICAS',
  UPDATE_ESPECIALIDADESMEDICAS: 'especialidadesMedicas/UPDATE_ESPECIALIDADESMEDICAS',
  PARTIAL_UPDATE_ESPECIALIDADESMEDICAS: 'especialidadesMedicas/PARTIAL_UPDATE_ESPECIALIDADESMEDICAS',
  DELETE_ESPECIALIDADESMEDICAS: 'especialidadesMedicas/DELETE_ESPECIALIDADESMEDICAS',
  RESET: 'especialidadesMedicas/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEspecialidadesMedicas>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EspecialidadesMedicasState = Readonly<typeof initialState>;

// Reducer

export default (state: EspecialidadesMedicasState = initialState, action): EspecialidadesMedicasState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ESPECIALIDADESMEDICAS):
    case REQUEST(ACTION_TYPES.UPDATE_ESPECIALIDADESMEDICAS):
    case REQUEST(ACTION_TYPES.DELETE_ESPECIALIDADESMEDICAS):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_ESPECIALIDADESMEDICAS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS):
    case FAILURE(ACTION_TYPES.CREATE_ESPECIALIDADESMEDICAS):
    case FAILURE(ACTION_TYPES.UPDATE_ESPECIALIDADESMEDICAS):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_ESPECIALIDADESMEDICAS):
    case FAILURE(ACTION_TYPES.DELETE_ESPECIALIDADESMEDICAS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ESPECIALIDADESMEDICAS):
    case SUCCESS(ACTION_TYPES.UPDATE_ESPECIALIDADESMEDICAS):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_ESPECIALIDADESMEDICAS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ESPECIALIDADESMEDICAS):
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

const apiUrl = 'api/especialidades-medicas';

// Actions

export const getEntities: ICrudGetAllAction<IEspecialidadesMedicas> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS_LIST,
    payload: axios.get<IEspecialidadesMedicas>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEspecialidadesMedicas> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ESPECIALIDADESMEDICAS,
    payload: axios.get<IEspecialidadesMedicas>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEspecialidadesMedicas> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ESPECIALIDADESMEDICAS,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEspecialidadesMedicas> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ESPECIALIDADESMEDICAS,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<IEspecialidadesMedicas> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_ESPECIALIDADESMEDICAS,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEspecialidadesMedicas> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ESPECIALIDADESMEDICAS,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
