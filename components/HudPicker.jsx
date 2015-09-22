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
require('jquery');

var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var HudActionCreators = require('hud/actions/HudActionCreators');
var HudButton = require('./HudButton');

module.exports = React.createClass({

  mixins: [PureRenderMixin],

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  _onChange: function() {
  },

  propagateAction: function(id) {
    HudActionCreators.hudChange(this.props.type, id);
  },

  render: function() {
    return (
      <ul className="hud-picker">
        {this.props.items.map((function(item) {
          return <li key={item.id}><HudButton image={item.image} id={item.id} buttonClick={this.propagateAction}/></li>;
        }).bind(this))}
      </ul>
    );
  }
});
