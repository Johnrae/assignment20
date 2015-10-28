import Backbone from 'backbone';
import Person from './person';
import {URL} from '../parse_data';


export default Backbone.Collection.extend({

  url: URL,

  model: Person,

  parse(data){
    console.log(data)
    return data.results;
  }

})