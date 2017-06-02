export default class {
    constructor($log, firebaseAuth, firebaseAuthProvider) {
        'ngInject';

        Object.assign(this, { $log });
        this.user = firebaseAuth.currentUser;
        this.onLogin = () => {
            firebaseAuth.signInWithPopup(firebaseAuthProvider).then((result) => {
                this.user = result.user;
                this.$log.info('after logout', this.user.displayName);
            });
        };

        this.onLogout = () => {
            firebaseAuth.signOut().then(() => {
                this.user = undefined;
                this.$log.info('after logout', this.user);
            });
        };
    }

    $onInit() {
        this.$log.info('login $onInit');
    }
}
