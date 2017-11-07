"use strict";
var $__util__;
var isFunction = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}).isFunction;
var SuperConstructor = function() {
  function SuperConstructor() {}
  return ($traceurRuntime.createClass)(SuperConstructor, {}, {});
}();
var TransientScope = function() {
  function TransientScope() {}
  return ($traceurRuntime.createClass)(TransientScope, {}, {});
}();
var Inject = function() {
  function Inject() {
    for (var tokens = [],
        $__25 = 0; $__25 < arguments.length; $__25++)
      tokens[$__25] = arguments[$__25];
    this.tokens = tokens;
    this.isPromise = false;
    this.isLazy = false;
  }
  return ($traceurRuntime.createClass)(Inject, {}, {});
}();
var InjectPromise = function($__super) {
  function InjectPromise() {
    for (var tokens = [],
        $__25 = 0; $__25 < arguments.length; $__25++)
      tokens[$__25] = arguments[$__25];
    $traceurRuntime.superConstructor(InjectPromise).call(this);
    this.tokens = tokens;
    this.isPromise = true;
    this.isLazy = false;
  }
  return ($traceurRuntime.createClass)(InjectPromise, {}, {}, $__super);
}(Inject);
var InjectLazy = function($__super) {
  function InjectLazy() {
    for (var tokens = [],
        $__25 = 0; $__25 < arguments.length; $__25++)
      tokens[$__25] = arguments[$__25];
    $traceurRuntime.superConstructor(InjectLazy).call(this);
    this.tokens = tokens;
    this.isPromise = false;
    this.isLazy = true;
  }
  return ($traceurRuntime.createClass)(InjectLazy, {}, {}, $__super);
}(Inject);
var Provide = function() {
  function Provide(token) {
    this.token = token;
    this.isPromise = false;
  }
  return ($traceurRuntime.createClass)(Provide, {}, {});
}();
var ProvidePromise = function($__super) {
  function ProvidePromise(token) {
    $traceurRuntime.superConstructor(ProvidePromise).call(this);
    this.token = token;
    this.isPromise = true;
  }
  return ($traceurRuntime.createClass)(ProvidePromise, {}, {}, $__super);
}(Provide);
var ClassProvider = function() {
  function ClassProvider() {}
  return ($traceurRuntime.createClass)(ClassProvider, {}, {});
}();
var FactoryProvider = function() {
  function FactoryProvider() {}
  return ($traceurRuntime.createClass)(FactoryProvider, {}, {});
}();
function annotate(fn, annotation) {
  fn.annotations = fn.annotations || [];
  fn.annotations.push(annotation);
}
function hasAnnotation(fn, annotationClass) {
  if (!fn.annotations || fn.annotations.length === 0) {
    return false;
  }
  var $__14 = true;
  var $__15 = false;
  var $__16 = undefined;
  try {
    for (var $__12 = void 0,
        $__11 = (fn.annotations)[Symbol.iterator](); !($__14 = ($__12 = $__11.next()).done); $__14 = true) {
      var annotation = $__12.value;
      {
        if (annotation instanceof annotationClass) {
          return true;
        }
      }
    }
  } catch ($__17) {
    $__15 = true;
    $__16 = $__17;
  } finally {
    try {
      if (!$__14 && $__11.return != null) {
        $__11.return();
      }
    } finally {
      if ($__15) {
        throw $__16;
      }
    }
  }
  return false;
}
function readAnnotations(fn) {
  var collectedAnnotations = {
    provide: {
      token: null,
      isPromise: false
    },
    params: []
  };
  if (fn.annotations && fn.annotations.length) {
    var $__14 = true;
    var $__15 = false;
    var $__16 = undefined;
    try {
      for (var $__12 = void 0,
          $__11 = (fn.annotations)[Symbol.iterator](); !($__14 = ($__12 = $__11.next()).done); $__14 = true) {
        var annotation = $__12.value;
        {
          if (annotation instanceof Inject) {
            annotation.tokens.forEach(function(token) {
              collectedAnnotations.params.push({
                token: token,
                isPromise: annotation.isPromise,
                isLazy: annotation.isLazy
              });
            });
          }
          if (annotation instanceof Provide) {
            collectedAnnotations.provide.token = annotation.token;
            collectedAnnotations.provide.isPromise = annotation.isPromise;
          }
        }
      }
    } catch ($__17) {
      $__15 = true;
      $__16 = $__17;
    } finally {
      try {
        if (!$__14 && $__11.return != null) {
          $__11.return();
        }
      } finally {
        if ($__15) {
          throw $__16;
        }
      }
    }
  }
  if (fn.parameters) {
    fn.parameters.forEach(function(param, idx) {
      var $__21 = true;
      var $__22 = false;
      var $__23 = undefined;
      try {
        for (var $__19 = void 0,
            $__18 = (param)[Symbol.iterator](); !($__21 = ($__19 = $__18.next()).done); $__21 = true) {
          var paramAnnotation = $__19.value;
          {
            if (isFunction(paramAnnotation) && !collectedAnnotations.params[idx]) {
              collectedAnnotations.params[idx] = {
                token: paramAnnotation,
                isPromise: false,
                isLazy: false
              };
            } else if (paramAnnotation instanceof Inject) {
              collectedAnnotations.params[idx] = {
                token: paramAnnotation.tokens[0],
                isPromise: paramAnnotation.isPromise,
                isLazy: paramAnnotation.isLazy
              };
            }
          }
        }
      } catch ($__24) {
        $__22 = true;
        $__23 = $__24;
      } finally {
        try {
          if (!$__21 && $__18.return != null) {
            $__18.return();
          }
        } finally {
          if ($__22) {
            throw $__23;
          }
        }
      }
    });
  }
  return collectedAnnotations;
}
Object.defineProperties(module.exports, {
  annotate: {get: function() {
      return annotate;
    }},
  hasAnnotation: {get: function() {
      return hasAnnotation;
    }},
  readAnnotations: {get: function() {
      return readAnnotations;
    }},
  SuperConstructor: {get: function() {
      return SuperConstructor;
    }},
  TransientScope: {get: function() {
      return TransientScope;
    }},
  Inject: {get: function() {
      return Inject;
    }},
  InjectPromise: {get: function() {
      return InjectPromise;
    }},
  InjectLazy: {get: function() {
      return InjectLazy;
    }},
  Provide: {get: function() {
      return Provide;
    }},
  ProvidePromise: {get: function() {
      return ProvidePromise;
    }},
  ClassProvider: {get: function() {
      return ClassProvider;
    }},
  FactoryProvider: {get: function() {
      return FactoryProvider;
    }},
  __esModule: {value: true}
});
