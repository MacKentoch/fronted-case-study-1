import aboutController, {
	ABOUT_CONTROLLER_NAME
}											from './app.about.controller';

const APP_ABOUT_MODULE_NAME = 'app.about.module';

export default angular
								.module(APP_ABOUT_MODULE_NAME, [])
								.controller(ABOUT_CONTROLLER_NAME, aboutController);
