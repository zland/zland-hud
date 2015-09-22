/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('hud/sass/style');

var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;

module.exports = React.createClass({

  mixins: [PureRenderMixin],

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  _onChange: function() {
  },

  render: function() {
    return (
      <button className={"hud-button " + this.props.id} onClick={(function() {this.props.buttonClick(this.props.id);}).bind(this)}>
        <img src="assets/zland-hud/img/hud_item_box.png"/>
        <img src={this.props.image} className="hudimg"/>
      </button>
    );
  }
});
