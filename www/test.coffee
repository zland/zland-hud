require 'map/sass/style'
require 'fontawesome/css/font-awesome.min'
require 'bootstrap/dist/css/bootstrap.min'

playground = require 'map/views/playground'

require('helpOverlay/register')()

playground.render()
