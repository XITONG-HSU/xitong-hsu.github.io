var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heart = function (_mojs$CustomShape) {
  _inherits(Heart, _mojs$CustomShape);

  function Heart() {
    _classCallCheck(this, Heart);

    return _possibleConstructorReturn(this, (Heart.__proto__ || Object.getPrototypeOf(Heart)).apply(this, arguments));
  }

  _createClass(Heart, [{
    key: 'getShape',
    value: function getShape() {
      return '<path d="M73.6170213,0 C64.4680851,0 56.5957447,5.53191489 51.7021277,13.8297872 C50.8510638,15.3191489 48.9361702,15.3191489 48.0851064,13.8297872 C43.4042553,5.53191489 35.3191489,0 26.1702128,0 C11.9148936,0 0,14.0425532 0,31.2765957 C0,48.0851064 14.893617,77.8723404 47.6595745,99.3617021 C49.1489362,100.212766 50.8510638,100.212766 52.1276596,99.3617021 C83.8297872,78.5106383 99.787234,48.2978723 99.787234,31.2765957 C100,14.0425532 88.0851064,0 73.6170213,0 L73.6170213,0 Z"></path>';
    }
  }]);

  return Heart;
}(mojs.CustomShape);

mojs.addShape('heart', Heart);

var CIRCLE_RADIUS = 20;
var RADIUS = 32;
var circle = new mojs.Shape({
  left: 0, top: 0,
  stroke: '#FF9C00',
  strokeWidth: _defineProperty({}, 2 * CIRCLE_RADIUS, 0),
  fill: 'none',
  scale: { 0: 1 },
  radius: CIRCLE_RADIUS,
  duration: 400,
  easing: 'cubic.out'
});

var burst = new mojs.Burst({
  left: 0, top: 0,
  radius: { 4: RADIUS },
  angle: 45,
  count: 14,
  timeline: { delay: 300 },
  children: {
    radius: 2.5,
    fill: '#FD7932',
    scale: { 1: 0, easing: 'quad.in' },
    pathScale: [.8, null],
    degreeShift: [13, null],
    duration: [500, 700],
    easing: 'quint.out'
  }
});

var heart = new mojs.Shape({
  left: 0, top: 2,
  shape: 'heart',
  fill: '#E5214A',
  scale: { 0: 1 },
  easing: 'elastic.out',
  duration: 1600,
  delay: 300,
  radius: 11
});

document.addEventListener('click', function (e) {
  var coords = { x: e.pageX, y: e.pageY };
  burst.tune(coords).replay();

  circle.tune(coords).replay();

  heart.tune(coords).replay();
});