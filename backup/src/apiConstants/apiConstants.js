let localUrl = 'https://dev-workcradle.herokuapp.com/api/';
let prodUrl = 'https://dev-workcradle.herokuapp.com/api/';

export let baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : localUrl;

// get all companies
export let allCompanies = 'Company/GetAllCompany';

// Authentication
export let createCompany = 'Company/CreateCompany';
export let loginEndpoint = 'Auth/login';
export let createDietitianEndpoint = "Users/CreateUser";
export let getDietitians = 'Users/GetDietitianByCompanyCode/';
export let updateCompanyDataEndpoint = 'Users/UpdateUser/';
export let deleteUserEndpoint = 'Users/DeleteUser/';

export let getDietitianEndpoint = 'GetDietitianByCompanyCode/';
export let getAdmins = 'Users/GetUserAdminByCompanyCode/';

export let createPatientEndpoint = "Patient/CreatePatient";
export let getPatients = "Patient/GetPatients";
export let editPatientEndpoint = "Patient/UpdatePatient/";
export let editDietitianOrAdmin ="Users/UpdateUser/";
export let createDocument = 'Document/CreateDocument';
export let deletePatientEndpoint = 'Patient/DeletePatient/'
// https://dev-workcradle.herokuapp.com/api/Patient/DeletePatient/##PATIENTID
