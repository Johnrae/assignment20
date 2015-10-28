import Backbone from 'backbone';
import {URL} from '../parse_data'

export default Backbone.Model.extend({

  urlRoot:  URL,

  idAttribute: 'objectId',

  templateData() {
    let data = this.toJSON();
    return data;
  }


});