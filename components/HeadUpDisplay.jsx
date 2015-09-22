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
var HudActionCreators = require('hud/actions/HudActionCreators');
var HudPicker = require('./HudPicker');
var HudButton = require('./HudButton');
var PlayerStore = require('player/stores/PlayerStore');

function getStoreValues() {
  return {
    weapon: PlayerStore.getWeapon(),
    weaponPickerItems: PlayerStore.getWeaponPickerItems(),
    itemPickerItems: PlayerStore.getItemPickerItems(),
    showWeaponPicker: PlayerStore.showWeaponPicker()
  }
}

module.exports = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState: function() {
    return getStoreValues();
  },

  componentDidMount: function() {
    PlayerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PlayerStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStoreValues());
  },


  render: function() {
    return (
      <div className="head-up-display container">
        <div className="row">
          {this.state.showWeaponPicker ? <HudPicker items={this.state.weaponPickerItems} type="weapon"/> : null}
          <div className="col-xs-6">
            <HudButton type="item"/>
          </div>
          <div className="col-xs-6">
            <HudButton id="weapon" image={this.state.weapon.get('hudImage')} buttonClick={(function() { HudActionCreators.toggleWeaponPicker(!this.state.showWeaponPicker); }).bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
});
