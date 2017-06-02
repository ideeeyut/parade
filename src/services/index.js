import StorageService from './StorageService';
import TodoDataService from './TodoDataService';
import GeoLocationService from './GeoLocationService';
import FirebaseService from './FirebaseService';

export default angular.module('app.services', [])
    .service('StorageService', StorageService)
    .service('TodoDataService', TodoDataService)
    .service('GeoLocationService', GeoLocationService)
    .service('FirebaseService', FirebaseService)
;
