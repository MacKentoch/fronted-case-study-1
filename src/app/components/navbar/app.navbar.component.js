import navigationModel from '../../models/navigation.json!json';

export const NAVBAR_COMPONENT_NAME = 'navbarComponent';

export const navbarComponent = {
  template      : `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">
            Toggle navigation
          </span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a
          class="navbar-brand"
          href="#">
          {{$ctrl.brand ? $ctrl.brand : 'Brand'}}
        </a>
      </div>

      <div
        class="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1">

        <menu-right
          menus="$ctrl.rightMenu">
        </menu-right>

      </div>
    </div>
  </nav>
  `,
  bindings : {},
  controller:
  class navbarController {
    constructor() {
      this.init();
    }

    init() {
      this.brand = navigationModel.brand;
      this.leftMenu = navigationModel.leftMenu.length > 0 ? [...navigationModel.leftMenu] : null;
      this.rightMenu = navigationModel.rightMenu.length > 0 ? [...navigationModel.rightMenu] : null;
    }

    static get $inject() {
      return [
        // nothing but put inject module to inject here
      ];
    }
  }
};
