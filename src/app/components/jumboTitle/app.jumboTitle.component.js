export const JUMBO_TITLE_COMPONENT_NAME = 'jumboTitle';

export const jumboTitleComponent = {
  template      : `
  <div class="jumbotron jumboTitle">
    <h1 class="title__text">
      {{$ctrl.titleH1}}
    </h1>
    <button
      class="btn btn-warning btn-lg"
      ng-click="$ctrl.handlesGoClick()">
      GO
    </button>
  </div>
  `,
  bindings : {
    titleH1: '<',
    goClick: '&'
  },
  controller:
  class jumboTitleController {
    constructor() {
      //
    }

    handlesGoClick() {
      // makes directives / components
      // - testing easier by calling in the controller rather than in the view
      // - will be able to pass param sthrough "n" children components
      this.goClick();
    }

    static get $inject() {
      return [
        // nothing but put inject module to inject here
      ];
    }
  }
};
