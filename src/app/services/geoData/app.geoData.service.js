// dev : API is slow
import mockData from '../../mock/geoData.json!json';

export const GEO_DATA_SERVICE_NAME = '$geodata';

const GEO_SERVICE_URL = 'http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane';
const MOCK_TIMEOUT = '500';

class $geodata {
  constructor($http, $timeout) {
    this.$http = $http;
    this.$timeout = $timeout;
  }

  getAll() {
    const PARAM = {
      method: 'GET',
      url: GEO_SERVICE_URL
    };
    // ES6 promise is more readable (and standard) than $q service
    const promise = new Promise(
      (resolve, reject) => {
        this.$http(PARAM)
            .then(
              (response) => {
                if (response.status === 200) {
                  if (response.data &&  response.data.geonames) {
                    resolve(response.data.geonames);
                  } else {
                    reject({ error: '$geodata.getAll', details: 'reponse data is empty or has no geonames attr'});
                  }
                } else {
                  reject({ error: '$geodata.getAll', details: `reponse status: ${response.status}`});
                }
              },
              (error) => {
                reject({ error: '$geodata.getAll', details: error});
              }
            );
        }
    );
    return promise;
  }

  getMockData() {
    return new Promise(
      resolve => {
        this.$timeout(
          () => resolve(mockData.geonames),
          MOCK_TIMEOUT
        );
      }
    );
  }
}

$geodata.$inject = [
  '$http',
  '$timeout'
];

export default $geodata;
