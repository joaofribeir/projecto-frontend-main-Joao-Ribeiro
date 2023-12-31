import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React2 = require_react();
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState2 = React2.useState, useEffect2 = React2.useEffect, useLayoutEffect2 = React2.useLayoutEffect, useDebugValue = React2.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React2.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState2({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect2(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM2 = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM2;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React2.useSyncExternalStore !== void 0 ? React2.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/wouter/react-deps.js
var React = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/wouter/use-sync-external-store.js
var import_shim = __toESM(require_shim(), 1);

// node_modules/wouter/react-deps.js
var {
  useEffect,
  useLayoutEffect,
  useRef,
  useInsertionEffect: useBuiltinInsertionEffect
} = React;
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
var useInsertionEffect = useBuiltinInsertionEffect || useIsomorphicLayoutEffect;
var useEvent = (fn) => {
  const ref = useRef([fn, (...args) => ref[0](...args)]).current;
  useInsertionEffect(() => {
    ref[0] = fn;
  });
  return ref[1];
};

// node_modules/wouter/paths.js
var relativePath = (base = "", path = location.pathname) => !path.toLowerCase().indexOf(base.toLowerCase()) ? path.slice(base.length) || "/" : "~" + path;
var absolutePath = (to, base = "") => to[0] === "~" ? to.slice(1) : base + to;

// node_modules/wouter/use-location.js
var eventPopstate = "popstate";
var eventPushState = "pushState";
var eventReplaceState = "replaceState";
var eventHashchange = "hashchange";
var events = [
  eventPopstate,
  eventPushState,
  eventReplaceState,
  eventHashchange
];
var subscribeToLocationUpdates = (callback) => {
  for (const event of events) {
    addEventListener(event, callback);
  }
  return () => {
    for (const event of events) {
      removeEventListener(event, callback);
    }
  };
};
var useLocationProperty = (fn, ssrFn) => (0, import_shim.useSyncExternalStore)(subscribeToLocationUpdates, fn, ssrFn);
var currentPathname = () => location.pathname;
var usePathname = ({ ssrPath } = {}) => useLocationProperty(
  currentPathname,
  ssrPath ? () => ssrPath : currentPathname
);
var navigate = (to, { replace = false } = {}) => history[replace ? eventReplaceState : eventPushState](null, "", to);
var useLocation = (opts = {}) => [
  relativePath(opts.base, usePathname(opts)),
  useEvent((to, navOpts) => navigate(absolutePath(to, opts.base), navOpts))
];
var use_location_default = useLocation;
if (typeof history !== "undefined") {
  for (const type of [eventPushState, eventReplaceState]) {
    const original = history[type];
    history[type] = function() {
      const result = original.apply(this, arguments);
      const event = new Event(type);
      event.arguments = arguments;
      dispatchEvent(event);
      return result;
    };
  }
}

// node_modules/wouter/matcher.js
function makeMatcher(makeRegexpFn = pathToRegexp) {
  let cache = {};
  const getRegexp = (pattern) => cache[pattern] || (cache[pattern] = makeRegexpFn(pattern));
  return (pattern, path) => {
    const { regexp, keys } = getRegexp(pattern || "");
    const out = regexp.exec(path);
    if (!out)
      return [false, null];
    const params = keys.reduce((params2, key, i) => {
      params2[key.name] = out[i + 1];
      return params2;
    }, {});
    return [true, params];
  };
}
var escapeRx = (str) => str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
var rxForSegment = (repeat, optional, prefix) => {
  let capture = repeat ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
  if (optional && prefix)
    capture = "(?:\\/" + capture + ")";
  return capture + (optional ? "?" : "");
};
var pathToRegexp = (pattern) => {
  const groupRx = /:([A-Za-z0-9_]+)([?+*]?)/g;
  let match = null, lastIndex = 0, keys = [], result = "";
  while ((match = groupRx.exec(pattern)) !== null) {
    const [_, segment, mod] = match;
    const repeat = mod === "+" || mod === "*";
    const optional = mod === "?" || mod === "*";
    const prefix = optional && pattern[match.index - 1] === "/" ? 1 : 0;
    const prev = pattern.substring(lastIndex, match.index - prefix);
    keys.push({ name: segment });
    lastIndex = groupRx.lastIndex;
    result += escapeRx(prev) + rxForSegment(repeat, optional, prefix);
  }
  result += escapeRx(pattern.substring(lastIndex));
  return { keys, regexp: new RegExp("^" + result + "(?:\\/)?$", "i") };
};

// node_modules/wouter/index.js
var defaultRouter = {
  hook: use_location_default,
  matcher: makeMatcher(),
  base: ""
  // this option is used to override the current location during SSR
  // ssrPath: undefined,
};
var RouterCtx = (0, import_react.createContext)(defaultRouter);
var useRouter = () => (0, import_react.useContext)(RouterCtx);
var useLocationFromRouter = (router) => router.hook(router);
var useLocation2 = () => useLocationFromRouter(useRouter());
var useRoute = (pattern) => {
  const router = useRouter();
  const [path] = useLocationFromRouter(router);
  return router.matcher(pattern, path);
};
var ParamsCtx = (0, import_react.createContext)({ params: {} });
var useParams = () => (0, import_react.useContext)(ParamsCtx).params;
var Router = ({
  hook,
  matcher,
  ssrPath,
  base = "",
  parent,
  children
}) => {
  const updateRouter = (router, proto = parent || defaultRouter) => {
    router.hook = hook || proto.hook;
    router.matcher = matcher || proto.matcher;
    router.ssrPath = ssrPath || proto.ssrPath;
    router.ownBase = base;
    router.parent = parent;
    return router;
  };
  const [value] = (0, import_react.useState)(
    () => updateRouter({
      // We must store base as a property accessor because effects
      // somewhat counter-intuitively run in child components *first*!
      // This means that by the time a parent's base is updated in the
      // parent effect, the child effect has already run, and saw
      // the parent's *previous* base during its own execution.
      get base() {
        return (value.parent || defaultRouter).base + value.ownBase;
      }
    })
  );
  useInsertionEffect(() => {
    updateRouter(value);
  });
  return (0, import_react.createElement)(RouterCtx.Provider, {
    value,
    children
  });
};
var ParamsWrapper = (params, children) => (0, import_react.createElement)(ParamsCtx.Provider, {
  value: { params },
  children
});
var Route = ({ path, match, component, children }) => {
  const useRouteMatch = useRoute(path);
  const [matches, params] = match || useRouteMatch;
  if (!matches)
    return null;
  if (component)
    return ParamsWrapper(params, (0, import_react.createElement)(component, { params }));
  return ParamsWrapper(
    params,
    typeof children === "function" ? children(params) : children
  );
};
var Link = (0, import_react.forwardRef)((props, ref) => {
  const router = useRouter();
  const [, navigate2] = useLocationFromRouter(router);
  const { to, href = to, children, onClick } = props;
  const handleClick = useEvent((event) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button !== 0)
      return;
    onClick && onClick(event);
    if (!event.defaultPrevented) {
      event.preventDefault();
      navigate2(to || href, props);
    }
  });
  const extraProps = {
    // handle nested routers and absolute paths
    href: href[0] === "~" ? href.slice(1) : router.base + href,
    onClick: handleClick,
    to: null,
    ref
  };
  const jsx = (0, import_react.isValidElement)(children) ? children : (0, import_react.createElement)("a", props);
  return (0, import_react.cloneElement)(jsx, extraProps);
});
var flattenChildren = (children) => {
  return Array.isArray(children) ? [].concat(
    ...children.map(
      (c) => c && c.type === import_react.Fragment ? flattenChildren(c.props.children) : flattenChildren(c)
    )
  ) : [children];
};
var Switch = ({ children, location: location2 }) => {
  const router = useRouter();
  const matcher = router.matcher;
  const [originalLocation] = useLocationFromRouter(router);
  for (const element of flattenChildren(children)) {
    let match = 0;
    if ((0, import_react.isValidElement)(element) && // we don't require an element to be of type Route,
    // but we do require it to contain a truthy `path` prop.
    // this allows to use different components that wrap Route
    // inside of a switch, for example <AnimatedRoute />.
    (match = element.props.path ? matcher(element.props.path, location2 || originalLocation) : [true, {}])[0])
      return (0, import_react.cloneElement)(element, { match });
  }
  return null;
};
var Redirect = (props) => {
  const { to, href = to } = props;
  const [, navigate2] = useLocation2();
  const redirect = useEvent(() => navigate2(to || href, props));
  useIsomorphicLayoutEffect(() => {
    redirect();
  }, []);
  return null;
};
var wouter_default = useRoute;
export {
  Link,
  Redirect,
  Route,
  Router,
  Switch,
  wouter_default as default,
  useLocation2 as useLocation,
  useParams,
  useRoute,
  useRouter
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=wouter.js.map
