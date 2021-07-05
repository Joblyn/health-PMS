import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import allCompaniesReducer from './allCompaniesReducer';
import superAdminAuthReducer from './superadmin/Auth';
import authReducer from './authReducer';
import allPatientsReducer from './superadmin/getAllPatients';
import createDietitianReducer from './superadmin/createDietitian';
import createPatientReducer from './patient/authAction';
import allDietitiansReducer from './superadmin/getAllDietitians';
import editPatientReducer from './superadmin/editPatient';
import dietitianReducer from './dietician/dietitianReducer';
import updateCompanyDataReducer from './superadmin/updateCompanyData';
import allAdminsReducer from './superadmin/getAllAdmins';
import updateDietitianDataReducer from './superadmin/updateDietitianData';
import deleteUserReducer from './superadmin/deleteUser';
import deletePatientReducer from './superadmin/deletePatient';

export default combineReducers({
  allCompanies: allCompaniesReducer,
  superAdminAuth: superAdminAuthReducer,
  authState: authReducer,
  allPatients: allPatientsReducer,
  createDietitian:createDietitianReducer,
  createPatient: createPatientReducer, 
  allDietitians: allDietitiansReducer,
  allAdmins: allAdminsReducer,
  dietitian: dietitianReducer,
  editPatient: editPatientReducer,
  updatedCompanyData: updateCompanyDataReducer,
  updateDietitianData: updateDietitianDataReducer,
  deleteUser: deleteUserReducer,
  deletePatient: deletePatientReducer,

  errors: errorReducer
})