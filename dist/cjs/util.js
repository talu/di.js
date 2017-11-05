"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  isUpperCase: {
    enumerable: true,
    get: function() {
      return isUpperCase;
    }
  },
  isFunction: {
    enumerable: true,
    get: function() {
      return isFunction;
    }
  },
  isObject: {
    enumerable: true,
    get: function() {
      return isObject;
    }
  },
  toString: {
    enumerable: true,
    get: function() {
      return toString;
    }
  },
  ownKeys: {
    enumerable: true,
    get: function() {
      return ownKeys;
    }
  }
});
function isUpperCase(char) {
  return char.toUpperCase() === char;
}
function isFunction(value) {
  return typeof value === 'function';
}
function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : $traceurRuntime.typeof(value)) === 'object';
}
function toString(token) {
  if (typeof token === 'string') {
    return token;
  }
  if (token === undefined || token === null) {
    return '' + token;
  }
  if (token.name) {
    return token.name;
  }
  return token.toString();
}
var ownKeys = ((void 0).Reflect && Reflect.ownKeys ? Reflect.ownKeys : function ownKeys(O) {
  var keys = Object.getOwnPropertyNames(O);
  if (Object.getOwnPropertySymbols)
    return keys.concat(Object.getOwnPropertySymbols(O));
  return keys;
});
