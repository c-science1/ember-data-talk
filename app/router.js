import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customer', {path: '/:customer_id'}, function() {
    this.route('premises');
  });
  this.route('customer-new');
});

export default Router;
