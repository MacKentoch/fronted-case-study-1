import './style/customBootstrap.css!';
import '../css/app.bundle.css!';
import appModule from './app.main.js';

angular.element(document).ready(()=>{
  angular.bootstrap(document, [appModule.name], { strictDi: false });
});
