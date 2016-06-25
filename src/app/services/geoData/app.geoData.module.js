import $geodata, {
  GEO_DATA_SERVICE_NAME
}												from './app.geoData.service';

const APP_GEO_DATA_SERVICE_MODULE_NAME = 'app.geoData.module';

export default angular
								.module(APP_GEO_DATA_SERVICE_MODULE_NAME, [])
								.service(GEO_DATA_SERVICE_NAME, $geodata);
