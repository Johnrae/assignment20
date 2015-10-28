import Backbone from 'backbone';
import Person from './person';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  urlRoot: APP_URL,

  parse(data){
    return data.results;
  }

})