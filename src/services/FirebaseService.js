export default class {
    constructor(firebaseDb) {
        'ngInject';

        this.rootRef = firebaseDb.ref();
        this.floats = firebaseDb.ref('floats');
    }
}
