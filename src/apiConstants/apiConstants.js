let localUrl = 'https://dev-workcradle.herokuapp.com/api/';
let prodUrl = 'https://dev-workcradle.herokuapp.com/api/';

export let baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : localUrl;

// get all companies
export let allCompanies = 'Company/GetAllCompany';

// Authentication
export let createCompany = 'Company/CreateCompany';
export let loginEndpoint = 'Auth/login';
export let createCompanyAdmin = "Users/CreateUser";


// export let getAdminByCompanyCode = "GetUserByCompanyCode/#COMPANYCOD2E";
export let createPatient = "Patient/CreatePatient";
export let getPatients = "Patient/GetPatients";