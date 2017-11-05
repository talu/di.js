"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  use: {
    enumerable: true,
    get: function() {
      return use;
    }
  },
  inject: {
    enumerable: true,
    get: function() {
      return inject;
    }
  }
});
var Injector = require("./injector").Injector;
var $__3 = require("./annotations"),
    Inject = $__3.Inject,
    annotate = $__3.annotate,
    readAnnotations = $__3.readAnnotations;
var isFunction = require("./util").isFunction;
var createProviderFromFnOrClass = require("./providers").createProviderFromFnOrClass;
var currentSpec = null;
beforeEach(function() {
  currentSpec = this;
  currentSpec.$$providers = [];
});
afterEach(function() {
  currentSpec.$$providers = null;
  currentSpec.$$injector = null;
  currentSpec = null;
});
function isRunning() {
  return !!currentSpec;
}
function use(mock) {
  if (currentSpec && currentSpec.$$injector) {
    throw new Error('Cannot call use() after inject() has already been called.');
  }
  var providerWrapper = {provider: mock};
  var fn = function() {
    currentSpec.$$providers.push(providerWrapper);
  };
  fn.as = function(token) {
    if (currentSpec && currentSpec.$$injector) {
      throw new Error('Cannot call as() after inject() has already been called.');
    }
    providerWrapper.as = token;
    if (isRunning()) {
      return undefined;
    }
    return fn;
  };
  if (isRunning()) {
    fn();
  }
  return fn;
}
function inject() {
  for (var params = [],
      $__1 = 0; $__1 < arguments.length; $__1++)
    params[$__1] = arguments[$__1];
  var behavior = params.pop();
  annotate(behavior, new (Function.prototype.bind.apply(Inject, $traceurRuntime.spread([null], params)))());
  var run = function() {
    if (!currentSpec.$$injector) {
      var providers = new Map();
      var modules = [];
      var annotations;
      currentSpec.$$providers.forEach(function(providerWrapper) {
        if (!providerWrapper.as) {
          modules.push(providerWrapper.provider);
        } else {
          if (!isFunction(providerWrapper.provider)) {
            providers.set(providerWrapper.as, createProviderFromFnOrClass(function() {
              return providerWrapper.provider;
            }, {
              provide: {
                token: null,
                isPromise: false
              },
              params: []
            }));
          } else {
            annotations = readAnnotations(providerWrapper.provider);
            providers.set(providerWrapper.as, createProviderFromFnOrClass(providerWrapper.provider, annotations));
          }
        }
      });
      currentSpec.$$injector = new Injector(modules, null, providers);
    }
    currentSpec.$$injector.get(behavior);
  };
  return isRunning() ? run() : run;
}
