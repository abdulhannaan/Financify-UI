import { Injectable } from '@angular/core';

@Injectable()
export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  // PROD URL
  // public apiUrl = 'http://api.workblix.com/api/'; 
  //public serverUrl = 'http://api.workblix.com/';
  //public apiCommmonUrl = 'http://api.workblix.com/short/';

  // LOCAL URL
  public apiUrl = 'https://localhost:44389/api/';
  public apiCommmonUrl = 'https://localhost:44389/short/';
  public serverUrl = 'https://localhost:44389/';

  public loginMode = '';

  // Whether or not to enable debug mode
  public enableDebug = true;

  //for version of the application
  public versionId = 1.0;

  //for ag-grid Enterprise Key
  public agGridKey = '';

  constructor() {
  }
}
