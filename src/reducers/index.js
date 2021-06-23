import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import allCompaniesReducer from './allCompaniesReducer';
import superAdminAuthReducer from './superadmin/Auth';
import authReducer from './authReducer';

export default combineReducers({
  allCompanies: allCompaniesReducer,
  superAdminAuth: superAdminAuthReducer,
  authState: authReducer, 
  
  errors: errorReducer
})