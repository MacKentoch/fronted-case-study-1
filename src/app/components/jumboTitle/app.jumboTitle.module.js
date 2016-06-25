import {
  jumboTitleComponent,
	JUMBO_TITLE_COMPONENT_NAME
}														 from './app.jumboTitle.component';

const JUMBO_TITLE_MODULE_NAME = 'app.jumboTitle.module';

export default angular
								.module(JUMBO_TITLE_MODULE_NAME, [])
								.component(JUMBO_TITLE_COMPONENT_NAME, jumboTitleComponent);
