export const HOME_CONTROLLER_NAME 		= 'homeController';
export const HOME_CONTROLLER_AS_NAME  = 'homeCtrl';

const CONTINENTS_NAMES_DEFAULT_VALUE = 'ALL';
const METRICS = ['ALL', 'areaInSqKm', 'population'];
const DEFAULT_METRIC = 'ALL';
const CHART_MAX_RESULT = [5, 10, 15, 20];
const CHART_MAX_RESULT_DEFAULT = 5;

const MOCK_FETCH_QUERY = true;


class homeController {
	constructor($geodata, NgTableParams, $filter) {
    this.$geodata = $geodata;
    this.NgTableParams = NgTableParams;
    this.$filter = $filter;

    this.init();
	}
  init() {
    this.title = 'Hydrane AngularJS Frontend Dev CS';

    this.isFetchingGeoData = false;
    this.allGeoData = [];

    this.continentsNames = [];
    this.continentsNamesDefaultValue = CONTINENTS_NAMES_DEFAULT_VALUE;
    this.selectedContinentsNames = CONTINENTS_NAMES_DEFAULT_VALUE;

    this.metrics = [...METRICS];
    this.metricDefaultValue = DEFAULT_METRIC;
    this.selectedMetrics = DEFAULT_METRIC;

    this.chartMaxResult = [...CHART_MAX_RESULT];
    this.chartMaxResultDefaultValue = CHART_MAX_RESULT_DEFAULT;
    this.selectedChartMaxResult = CHART_MAX_RESULT_DEFAULT;

    this.showResults = false;
    this.geodataList = [];
    this.tableParams = new this.NgTableParams();
  }

  getMoreData() {
    this.tableData = this.geodataList.slice(0, this.tableData.length + 20);
  }

  handlesGoClick() {
    this.fetchAllGeoData();
  }

  extractOnlyNeededDataProps() {
    return this.allGeoData.map((data) => {
      return {
        continentName: data.continentName,
        countryName: data.countryName,
        areaInSqKm: data.areaInSqKm,
        population: data.population
      };
    });
  }

  fetchAllGeoData() {
    this.isFetchingGeoData = true;

    if (MOCK_FETCH_QUERY) {
      this
        .$geodata
        .getMockData()
        .then(
          data => {
            this.isFetchingGeoData = false;
            this.allGeoData = [...data];
            this.selectedContinentsNames = CONTINENTS_NAMES_DEFAULT_VALUE;
            this.bindContinentsNames([...data]);
            this.showResults = true;
            this.geodataList = [...this.extractOnlyNeededDataProps()];
            this.tableParams.settings({ dataset: this.geodataList });
            // console.log('this.tableParams.settings: ', this.tableParams.settings);
          }
        );
    } else {
      this
        .$geodata
        .getAll()
        .then(
          data => {
            this.isFetchingGeoData = false;
            this.allGeoData = [...data];
            this.selectedContinentsNames = CONTINENTS_NAMES_DEFAULT_VALUE;
            this.bindContinentsNames([...data]);
            this.showResults = true;
            this.geodataList = [...this.extractOnlyNeededDataProps()];
            this.tableParams.settings({ dataset: this.geodataList });
            // console.log('this.tableParams.settings: ', this.tableParams.settings);
          },
          error => {
            this.isFetchingGeoData = false;
            this.showResults = false;
            this.allGeoData = [];
            this.continentsNames = [];
            this.selectedContinentsNames = CONTINENTS_NAMES_DEFAULT_VALUE;
            this.geodataList = [];
            this.tableParams.settings({ dataset: [] });
            // console.log('error: ', error);
            throw new Error('error: $geodata');
          }
        );
    }


  }

  bindContinentsNames(allData) {
    this.continentsNames = [...this.filterUniqueContinentsNameAndSortByNameASC(allData)];
  }

  filterUniqueContinentsNameAndSortByNameASC(allData) {
    const uniqueContinentsNames = [];
    allData.forEach(
      continent => {
        if(uniqueContinentsNames.indexOf(continent.continentName) === -1){
          uniqueContinentsNames.push(continent.continentName);
        }
      }
    );
    return this.sortGeoDataByContinentsNameASC(uniqueContinentsNames);
  }

  sortGeoDataByContinentsNameASC(continentsNames) {
    if (continentsNames.length === 0) {
      return continentsNames;
    }
    return continentsNames.sort(
      (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
    );
  }
}

homeController.$inject = [
  '$geodata',
  'NgTableParams',
  '$filter'
];

export default homeController;
