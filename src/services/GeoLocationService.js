export default class {
    constructor($q, $window) {
        'ngInject';

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

        this.getCurrentPosition = () => {
            const deferred = $q.defer();
            if (!$window.navigator.geolocation) {
                deferred.reject('Geolocation not supported.');
            }
            else {
                $window.navigator.geolocation.getCurrentPosition((position) => {
                    deferred.resolve(position);
                }, (err) => {
                    deferred.reject(err);
                });
            }

            return deferred.promise;
        };

        this.getDistanceBetween = (crd1, crd2) => {
            const R = 6371; // Radius of the earth in km
            const dLat = deg2rad(crd2.lat - crd1.lat); // deg2rad below
            const dLon = deg2rad(crd2.long - crd1.long);
            const a = (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
                (Math.cos(deg2rad(crd1.lat)) * Math.cos(deg2rad(crd2.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2));
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
            return d;
        };
    }
}
