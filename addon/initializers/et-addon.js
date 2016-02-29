import EtComponent from '../components/et-component/component';

export function initialize(application) {
    console.log('Inside et-addon initializer');
    application.register('component:et-component', EtComponent);
}

export default {
    name: 'et-addon',
    initialize
};
