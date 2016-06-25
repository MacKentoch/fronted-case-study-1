import {
  filterFormComponent,
	FILTER_FORM_COMPONENT_NAME
}														 from './app.filterForm.component';

const FILTER_FORM_MODULE_NAME = 'app.filterForm.module';

export default angular
								.module(FILTER_FORM_MODULE_NAME, [])
								.component(FILTER_FORM_COMPONENT_NAME, filterFormComponent);
