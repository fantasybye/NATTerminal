import {Component} from 'react';
import api from './api';

class ReactComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.$api = api;
  }
}
export default ReactComponent;
