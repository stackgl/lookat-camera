var lookAt = require('gl-mat4/lookAt')

module.exports = Camera

function Camera() {
  if (!(this instanceof Camera))
    return new Camera

  this.target   = new Float32Array([0,  0,  0])
  this.position = new Float32Array([0,  5, 10])
  this.up       = new Float32Array([0,  1,  0])
}

var scratch = new Float32Array(16)

Camera.prototype.view = function(view) {
  view = view || scratch

  lookAt(view, this.position, this.target, this.up)

  return view
}
