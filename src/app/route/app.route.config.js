import {
	HOME_CONTROLLER_NAME,
	HOME_CONTROLLER_AS_NAME
} 									from '../views/home/app.home.controller';
import homeTemplate from '../views/home/app.home.template.html!text';
import {
	ABOUT_CONTROLLER_NAME,
	ABOUT_CONTROLLER_AS_NAME
} 									from '../views/about/app.about.controller';
import aboutTemplate from '../views/about/app.about.template.html!text';

const BASE_URL = '/';

/* eslint no-console:0 */
function routeConfig(
	$stateProvider,
	$urlRouterProvider,
	$locationProvider){

	$stateProvider
		.state('home', {
			url						: '/',
			template			:	homeTemplate,
			controller		: HOME_CONTROLLER_NAME,
			controllerAs	: HOME_CONTROLLER_AS_NAME,
			resolve : {
				log : () => console.info('route to home')
			}
		})
    .state('about', {
			url						: '/about',
			template			:	aboutTemplate,
			controller		: ABOUT_CONTROLLER_NAME,
			controllerAs	: ABOUT_CONTROLLER_AS_NAME,
			resolve : {
				log : () => console.info('route to about')
			}
		})
	;
	$urlRouterProvider.otherwise(BASE_URL);
	$locationProvider.html5Mode(true);
}

routeConfig.$inject = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider'
];
export default routeConfig;
