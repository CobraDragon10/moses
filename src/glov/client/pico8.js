/* eslint no-bitwise: off */
const { vec4 } = require('glov/common/vmath.js');

export const colors = [
  vec4(0, 0, 0, 1),
  vec4(0.114, 0.169, 0.326, 1),
  vec4(0.494, 0.145, 0.326, 1),
  vec4(0.000, 0.529, 0.328, 1),
  vec4(0.671, 0.322, 0.212, 1),
  vec4(0.373, 0.341, 0.310, 1),
  vec4(0.761, 0.765, 0.780, 1),
  vec4(1.000, 0.945, 0.910, 1),
  vec4(1.000, 0.000, 0.302, 1),
  vec4(1.000, 0.639, 0.000, 1),
  vec4(1.000, 0.925, 0.153, 1),
  vec4(0.000, 0.894, 0.212, 1),
  vec4(0.161, 0.678, 1.000, 1),
  vec4(0.514, 0.463, 0.612, 1),
  vec4(1.000, 0.467, 0.659, 1),
  vec4(1.000, 0.800, 0.667, 1),
];

export const font_colors = colors.map((a) => (a[0] * 255) << 24 | (a[1] * 255) << 16 | (a[2] * 255) << 8 | 255);
