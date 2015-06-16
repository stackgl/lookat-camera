# lookat-camera

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Simple "lookat" camera abstraction built on top of
[gl-matrix](http://github.com/toji/gl-matrix).

## Usage

[![NPM](https://nodei.co/npm/lookat-camera.png)](https://nodei.co/npm/lookat-camera/)

See [demo.js](./demo.js) for a usage example.

### `camera = require('lookat-camera')()`

Creates a new camera instance.

### `view = camera.view([view])`

Updates the view matrix based on the camera's current configuration and
returns the result. Optionally, you may pass in your own `view` array to
modify directly.

### `camera.position`

`[x, y, z]` vector that determines the position of the camera in world space.

### `camera.target`

`[x, y, z]` vector that determines the target of the camera in world space.

### `camera.up`

Normalized `[x, y, z]` vector that determines the up direction of the camera.
Generally you'll want this to be `[1, 0, 0]`, `[0, 1, 0]` or `[0, 0, 1]`.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/lookat-camera/blob/master/LICENSE.md) for details.
