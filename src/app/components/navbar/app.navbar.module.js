import {
  navbarComponent,
	NAVBAR_COMPONENT_NAME
}														 from './app.navbar.component';
import navbarRightMenuModule from './menuRight/navbar.menuRight.module';


const TO_INJECT = [
  navbarRightMenuModule.name
];

const APP_NAVBAR_MODULE_NAME = 'app.navbar.module';

export default angular
								.module(APP_NAVBAR_MODULE_NAME, TO_INJECT)
								.component(NAVBAR_COMPONENT_NAME, navbarComponent);
