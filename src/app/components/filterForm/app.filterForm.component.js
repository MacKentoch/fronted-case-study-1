export const FILTER_FORM_COMPONENT_NAME = 'filterForm';

export const filterFormComponent = {
  template      : `
  <form class="filterForm___form">
    <fieldset>
      <legend>
        Filters
      </legend>

      <span
        us-spinner="{radius:30, width:8, length: 16}"
        spinner-on="$ctrl.isfetchingData">
      </span>

      <div ng-if="!$ctrl.isfetchingData">
        <div class="form-group">
          <label
            class="col-lg-12"
            for="continentsSelect">
            continents
          </label>
          <div class="col-lg-12 pull-left">
            <ol
              id="continentsSelect"
              title="{{$ctrl.continentsNamesDefaultValue}}"
              class="nya-bs-select filterForm__list"
              ng-model="$ctrl.selectedContinentName"
              data-live-search="true"
              disabled="$ctrl.continentsNames.length === 0">
              <li nya-bs-option="continentName in $ctrl.continentsNames">
                <a>
                  {{ continentName }}
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div class="form-group">
          <label
            for="metricsSelect"
            class="col-lg-12">
            metrics
          </label>
          <div class="col-lg-12">
            <ol
              id="metricsSelect"
              class="nya-bs-select filterForm__list"
              title="{{$ctrl.metricDefaultValue}}"
              ng-model="$ctrl.selectedMetric"
              disabled="$ctrl.metrics.length === 0"
              data-live-search="true">
              <li nya-bs-option="metric in $ctrl.metrics">
                <a>
                  {{ metric }}
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div class="form-group">
          <label
            for="chartMaxResultSelect"
            class="col-lg-12">
            chart max result
          </label>
          <div class="col-lg-12">
            <ol
              id="chartMaxResultSelect"
              class="nya-bs-select filterForm__list"
              title="{{$ctrl.chartMaxResultDefaultValue}}"
              ng-model="$ctrl.selectedChartMaxResult"
              data-live-search="true"
              disabled="$ctrl.chartMaxResults.length === 0">
              <li nya-bs-option="chartMax in $ctrl.chartMaxResults">
                <a>
                  {{ chartMax }}
                </a>
              </li>
            </ol>
          </div>
        </div>

      </div>


    </fieldset>
  </form>
  `,
  bindings : {
    isfetchingData: '<',

    continentsNames: '<',
    continentsNamesDefaultValue: '<',
    selectedContinentName: '=',

    metrics: '<',
    metricDefaultValue: '<',
    selectedMetric: '=',

    chartMaxResults: '<',
    chartMaxResultDefaultValue: '<',
    selectedChartMaxResult: '='
  },
  controller:
  class filterFormController {
    constructor() {
      //
    }

    static get $inject() {
      return [
        // nothing but put inject module to inject here
      ];
    }
  }
};
