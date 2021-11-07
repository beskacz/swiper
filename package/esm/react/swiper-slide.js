var _excluded = ["tag", "children", "swiper", "zoom", "virtualIndex"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef } from 'react';

var SwiperSlide = function SwiperSlide(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      children = _ref.children,
      swiper = _ref.swiper,
      zoom = _ref.zoom,
      virtualIndex = _ref.virtualIndex,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var slideElRef = useRef(null);

  var renderChildren = function renderChildren() {
    return typeof children === 'function' ? children() : children;
  };

  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: slideElRef,
    "data-swiper-slide-index": virtualIndex
  }, rest), zoom ? /*#__PURE__*/React.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren()) : renderChildren());
};

SwiperSlide.displayName = 'SwiperSlide';
export { SwiperSlide };