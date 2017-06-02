export default class {
    constructor($log, $firebaseArray, FirebaseService, GeoLocationService, $scope) {
        'ngInject';

        Object.assign(this, { $log, FirebaseService, GeoLocationService, $scope });

        this.floats = $firebaseArray(FirebaseService.floats);

        GeoLocationService.getCurrentPosition().then((data) => {
            this.coords = {
                lat: data.coords.latitude,
                long: data.coords.longitude,
            };

            this.distance = GeoLocationService.getDistanceBetween(this.floats[$scope.active].position, this.coords);
        });

        this.findNearest = () => {
            let closest = GeoLocationService.getDistanceBetween(this.floats[0].position, this.coords);
            let closestIdx = 0;

            for (let i = 1; i < this.floats.length; i++) {
                const dist = GeoLocationService.getDistanceBetween(this.floats[i].position, this.coords);
                if (dist < closest) {
                    closest = dist;
                    closestIdx = i;
                }
            }

            $scope.active = closestIdx;
        };
    }

    $onInit() {
        this.$scope.$watch('active', (newIdx) => {
            if (!angular.isDefined(newIdx) || !angular.isDefined(this.coords)) {
                return;
            }

            this.distance = this.GeoLocationService.getDistanceBetween(this.floats[newIdx].position, this.coords);
        });
    }
}
