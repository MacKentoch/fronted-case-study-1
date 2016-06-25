import rootController, {
	ROOT_CONTROLLER_NAME
}														from './app.root.controller';

const APP_ROOT_MODULE_NAME = 'app.root.module';

export default angular
								.module(APP_ROOT_MODULE_NAME, [])
								.controller(ROOT_CONTROLLER_NAME, rootController);
