module.exports = (function(e) {
	var t = {};
	function o(r) {
		if (t[r]) return t[r].exports;
		var n = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
	}
	return (
		(o.m = e),
		(o.c = t),
		(o.d = function(e, t, r) {
			o.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(o.r = function(e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module'
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(o.t = function(e, t) {
			if ((1 & t && (e = o(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(o.r(r),
				Object.defineProperty(r, 'default', {
					enumerable: !0,
					value: e
				}),
				2 & t && 'string' != typeof e)
			)
				for (var n in e)
					o.d(
						r,
						n,
						function(t) {
							return e[t];
						}.bind(null, n)
					);
			return r;
		}),
		(o.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return o.d(t, 'a', t), t;
		}),
		(o.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(o.p = ''),
		o((o.s = 1))
	);
})([
	function(e, t) {
		e.exports = require('react');
	},
	function(e, t, o) {
		'use strict';
		o.r(t);
		var r = o(0),
			n = o.n(r);
		function a(e) {
			return (a =
				'function' == typeof Symbol &&
				'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
					  }
					: function(e) {
							return e &&
								'function' == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? 'symbol'
								: typeof e;
					  })(e);
		}
		function u(e, t) {
			for (var o = 0; o < t.length; o++) {
				var r = t[o];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					'value' in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		function i(e) {
			return (i = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
				  })(e);
		}
		function c(e) {
			if (void 0 === e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return e;
		}
		function l(e, t) {
			return (l =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		function s(e, t, o) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
					  })
					: (e[t] = o),
				e
			);
		}
		var f = (function(e) {
			function t() {
				var e, o, r, n;
				!(function(e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							'Cannot call a class as a function'
						);
				})(this, t);
				for (
					var u = arguments.length, l = new Array(u), f = 0;
					f < u;
					f++
				)
					l[f] = arguments[f];
				return (
					(r = this),
					(n = (e = i(t)).call.apply(e, [this].concat(l))),
					(o =
						!n || ('object' !== a(n) && 'function' != typeof n)
							? c(r)
							: n),
					s(c(o), '_unSub', function() {}),
					s(c(o), 'grabAllFromLocalStorage', function(e) {
						var t = localStorage.getItem(e);
						return t ? JSON.parse(t) : {};
					}),
					s(c(o), 'addToLocalStorage', function(e, t) {
						var r = o.grabAllFromLocalStorage(e);
						(r = (function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var o =
										null != arguments[t]
											? arguments[t]
											: {},
									r = Object.keys(o);
								'function' ==
									typeof Object.getOwnPropertySymbols &&
									(r = r.concat(
										Object.getOwnPropertySymbols(o).filter(
											function(e) {
												return Object.getOwnPropertyDescriptor(
													o,
													e
												).enumerable;
											}
										)
									)),
									r.forEach(function(t) {
										s(e, t, o[t]);
									});
							}
							return e;
						})({}, r, { store: t, _lastModified: new Date() })),
							localStorage.setItem(e, JSON.stringify(r));
					}),
					s(c(o), 'deferred', function(e) {
						setTimeout(e, 0);
					}),
					s(c(o), 'maybeSetUnSubscribe', function(e) {
						o._unSub || (o._unSub = e);
					}),
					s(c(o), 'state', { saveName: 'MOOSE_FILE' }),
					s(c(o), 'store', {}),
					s(c(o), 'comparisonFunction', function(e) {
						var t = o.grabAllFromLocalStorage(o.state.saveName);
						return (
							void 0 === t._lastModified ||
							!(
								t._lastModified ===
								o.store.getState()._lastModified
							)
						);
					}),
					s(c(o), 'componentDidMount', function() {
						if (!o.props.store)
							throw new Error('Need to pass in a redux store');
						(o.store = o.props.store),
							o.props.saveName &&
								o.setState({ saveName: o.props.saveName }),
							o.props.comparisonFunction
								? (o.comparisonFunction =
										o.props.comparisonFunction)
								: console.log(
										'no comparison function provided, using default'
								  ),
							o.maybeSetUnSubscribe(
								o.props.store.subscribe(o.shouldSave)
							),
							o.loadIfEmpty();
					}),
					s(c(o), 'shouldSave', function() {
						o.comparisonFunction() &&
							o.addToLocalStorage(
								o.state.saveName,
								o.store.getState()
							);
					}),
					s(c(o), 'loadIfEmpty', function() {
						var e = o.store.getState();
						Object.keys(e).every(function(t) {
							return !!e[t];
						}) &&
							(o.grabAllFromLocalStorage(o.state.saveName) &&
								o.deferred(function() {
									console.log(
										'Loading '.concat(
											o.state.saveName,
											' from local storage'
										)
									);
									var e = {
										type: 'LOAD_FROM_LOCAL_STORAGE',
										payload:
											'string' ==
											typeof localStorage[
												o.state.saveName
											]
												? JSON.parse(
														localStorage[
															o.state.saveName
														]
												  )
												: localStorage[o.state.saveName]
									};
									o.store.dispatch(e);
								}));
					}),
					s(c(o), 'componentWillUnmount', function() {
						o._unSub();
					}),
					o
				);
			}
			var o, r, f;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError(
							'Super expression must either be null or a function'
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					})),
						t && l(e, t);
				})(t, n.a.PureComponent),
				(o = t),
				(r = [
					{
						key: 'render',
						value: function() {
							return null;
						}
					}
				]) && u(o.prototype, r),
				f && u(o, f),
				t
			);
		})();
		t.default = f;
	}
]);
