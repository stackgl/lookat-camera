var Geometry = require('gl-geometry')
var fit      = require('canvas-fit')
var Shader   = require('gl-shader')
var mat4     = require('gl-mat4')
var normals  = require('normals')
var glslify  = require('glslify')
var bunny    = require('bunny')

var canvas = document.body.appendChild(document.createElement('canvas'))
var gl     = require('gl-context')(canvas, render)
var camera = require('./')()

window.addEventListener('resize'
  , fit(canvas)
  , false
)

var geometry = Geometry(gl)

geometry.attr('aPosition', bunny.positions)
geometry.attr('aNormal', normals.vertexNormals(
    bunny.cells
  , bunny.positions
))

geometry.faces(bunny.cells)

var projection = mat4.create()
var model      = mat4.create()
var view       = mat4.create()
var height
var width

var shader = Shader(gl
  , glslify('./demo.vert')
  , glslify('./demo.frag')
)

function update() {
  width  = gl.drawingBufferWidth
  height = gl.drawingBufferHeight

  camera.position[0] = 10 * Math.cos(Date.now() / 1000)
  camera.position[1] = 20 * Math.sin(Date.now() / 1000) + 10
  camera.view(view)

  var aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight
  var fieldOfView = Math.PI / 4
  var near = 0.01
  var far  = 100

  mat4.perspective(projection, fieldOfView, aspectRatio, near, far)
}

function render() {
  update()

  gl.viewport(0, 0, width, height)
  gl.enable(gl.DEPTH_TEST)
  gl.enable(gl.CULL_FACE)
  geometry.bind(shader)

  shader.uniforms.uProjection = projection
  shader.uniforms.uView = view
  shader.uniforms.uModel = model

  geometry.draw(gl.TRIANGLES)
}
