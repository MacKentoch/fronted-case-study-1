import appVersion 		from './app.version.json!json';

function appConfig(){
  console.log(`${appVersion.appName} version: ${appVersion.version}`);
}


appConfig.$inject = [];

export default appConfig;
