import {
  navbarMenuRightComponent,
	NAVBAR_MENU_RIGHT_COMPONENT_NAME
}														from './navbar.menuRight.component';

const NAVBAR_MENU_RIGHT_MODULE_NAME = 'navbar.menuRight.module';

export default angular
								.module(NAVBAR_MENU_RIGHT_MODULE_NAME, [])
								.component(NAVBAR_MENU_RIGHT_COMPONENT_NAME, navbarMenuRightComponent);
