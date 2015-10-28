import Backbone from 'backbone';
import {People as PeopleCollection} from './resources';
import {People as PeopleView} from './views';

export default Backbone.Router.extend({

  routes: {
    "" : "redirectToPeople",
    "people" : "showPeople",
    "person/:id" : "showPerson"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();
  },

  start() {
    Backbone.history.start();
    return this;
  },

  redirectToPeople() {
    this.navigate('people',{
      replace: true,
      trigger: true
    });
  },

  showPeople() {
    this.collection.fetch().then(() => {
    
    });
  } 

});