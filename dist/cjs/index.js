"use strict";
var $__injector__ = require("./injector");
var $__annotations__ = require("./annotations");
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  Injector: {
    enumerable: true,
    get: function() {
      return $__injector__.Injector;
    }
  },
  annotate: {
    enumerable: true,
    get: function() {
      return $__annotations__.annotate;
    }
  },
  Inject: {
    enumerable: true,
    get: function() {
      return $__annotations__.Inject;
    }
  },
  InjectLazy: {
    enumerable: true,
    get: function() {
      return $__annotations__.InjectLazy;
    }
  },
  InjectPromise: {
    enumerable: true,
    get: function() {
      return $__annotations__.InjectPromise;
    }
  },
  Provide: {
    enumerable: true,
    get: function() {
      return $__annotations__.Provide;
    }
  },
  ProvidePromise: {
    enumerable: true,
    get: function() {
      return $__annotations__.ProvidePromise;
    }
  },
  SuperConstructor: {
    enumerable: true,
    get: function() {
      return $__annotations__.SuperConstructor;
    }
  },
  TransientScope: {
    enumerable: true,
    get: function() {
      return $__annotations__.TransientScope;
    }
  },
  ClassProvider: {
    enumerable: true,
    get: function() {
      return $__annotations__.ClassProvider;
    }
  },
  FactoryProvider: {
    enumerable: true,
    get: function() {
      return $__annotations__.FactoryProvider;
    }
  }
});
