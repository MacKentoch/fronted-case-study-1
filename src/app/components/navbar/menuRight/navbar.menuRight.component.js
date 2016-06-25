export const NAVBAR_MENU_RIGHT_COMPONENT_NAME = 'menuRight';

export const navbarMenuRightComponent = {
  template      : `
  <ul class="nav navbar-nav navbar-right">
    <li ng-repeat="menu in $ctrl.menus track by $index">
      <a
        href="{{ menu.href }}">
        {{ menu.label }}
      </a>
    </li>
  </ul>
  `,
  bindings : {
    menus  : '<'
  },
  controller:
  class navbarMenuRightController {
    constructor() {
      // console.log('navMenuRight model: ', this.menus);
    }

    static get $inject() {
      return [
        // nothing but put inject module to inject here
      ];
    }
  }
};
