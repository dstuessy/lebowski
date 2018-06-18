var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lebowski;
(function (Lebowski) {
    var Util;
    (function (Util) {
        var El = (function () {
            function El() {
            }
            El.Traverse = function (el, cb) {
                cb(el);
                Array.from(el.children).forEach(function (e) { return El.Traverse(e, cb); });
            };
            El.Find = function (el, cb) {
                var found = cb(el);
                if (found) {
                    return el;
                }
                return null;
            };
            return El;
        }());
        Util.El = El;
    })(Util = Lebowski.Util || (Lebowski.Util = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Util;
    (function (Util) {
        ;
        var EventEmitter = (function () {
            function EventEmitter() {
                this.listeners = [];
            }
            EventEmitter.prototype.on = function (event, cb) {
                this.listeners.push({ event: event, cb: cb });
            };
            EventEmitter.prototype.emit = function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.listeners.forEach(function (l) {
                    if (event === l.event) {
                        l.cb.apply(l, __spread([new Event(event)], args));
                    }
                });
            };
            return EventEmitter;
        }());
        Util.EventEmitter = EventEmitter;
    })(Util = Lebowski.Util || (Lebowski.Util = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var ScopeProps = (function () {
        function ScopeProps() {
        }
        return ScopeProps;
    }());
    Lebowski.ScopeProps = ScopeProps;
    var Scope = (function (_super) {
        __extends(Scope, _super);
        function Scope(props) {
            var _this = _super.call(this) || this;
            Object.assign(_this, props);
            return _this;
        }
        Scope.prototype.watch = function (propName, cb) {
            var _this = this;
            this.on("change:" + propName, function (event, newVal) {
                cb(newVal, _this[propName]);
            });
        };
        Scope.prototype.set = function (propName, newVal) {
            this.emit("change:" + propName, newVal, this[propName]);
            this[propName] = newVal;
        };
        return Scope;
    }(Lebowski.Util.EventEmitter));
    Lebowski.Scope = Scope;
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var BaseDirective = (function () {
            function BaseDirective(expr, el) {
                this.el = el;
                this.expr = expr;
            }
            BaseDirective.prototype.evaluate = function (scope) { };
            return BaseDirective;
        }());
        Directive.BaseDirective = BaseDirective;
        function DirectiveAttribute() {
        }
        Directive.DirectiveAttribute = DirectiveAttribute;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var EventDirective = (function (_super) {
            __extends(EventDirective, _super);
            function EventDirective(expr, el) {
                return _super.call(this, expr, el) || this;
            }
            EventDirective.prototype.evaluate = function (scope) {
                var tokens = this.expr.split(':');
                var event = tokens[0];
                var listener = scope[tokens[1]];
                this.el.addEventListener(event, listener);
            };
            return EventDirective;
        }(Directive.BaseDirective));
        Directive.EventDirective = EventDirective;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var SubmitDirective = (function (_super) {
            __extends(SubmitDirective, _super);
            function SubmitDirective(expr, el) {
                return _super.call(this, expr, el) || this;
            }
            SubmitDirective.prototype.evaluate = function (scope) {
                var listener = scope[this.expr].bind(scope);
                this.el.addEventListener('submit', listener);
            };
            return SubmitDirective;
        }(Directive.EventDirective));
        Directive.SubmitDirective = SubmitDirective;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var VarDirective = (function (_super) {
            __extends(VarDirective, _super);
            function VarDirective(expr, el) {
                return _super.call(this, expr, el) || this;
            }
            VarDirective.prototype.evaluate = function (scope) {
                var _this = this;
                scope.set(this.el.name, this.el.value);
                this.el.addEventListener('change', function (e) {
                    scope.set(_this.el.name, _this.el.value);
                });
            };
            return VarDirective;
        }(Directive.BaseDirective));
        Directive.VarDirective = VarDirective;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var TextDirective = (function (_super) {
            __extends(TextDirective, _super);
            function TextDirective(expr, el) {
                return _super.call(this, expr, el) || this;
            }
            TextDirective.prototype.evaluate = function (scope) {
                var _this = this;
                this.el.innerHTML = scope[this.expr];
                scope.watch(this.expr, function (newVal) {
                    _this.el.innerHTML = newVal;
                });
            };
            return TextDirective;
        }(Directive.BaseDirective));
        Directive.TextDirective = TextDirective;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var Directive;
    (function (Directive) {
        var Factory = (function () {
            function Factory(el) {
                this.el = el;
            }
            Factory.prototype.Create = function () {
                var expr;
                if (expr = this.el.getAttribute('data-event')) {
                    return new Directive.EventDirective(expr, this.el);
                }
                if (expr = this.el.getAttribute('data-submit')) {
                    return new Directive.SubmitDirective(expr, this.el);
                }
                if (expr = this.el.getAttribute('data-var')) {
                    return new Directive.VarDirective(expr, this.el);
                }
                if (expr = this.el.getAttribute('data-text')) {
                    return new Directive.TextDirective(expr, this.el);
                }
            };
            return Factory;
        }());
        Directive.Factory = Factory;
    })(Directive = Lebowski.Directive || (Lebowski.Directive = {}));
})(Lebowski || (Lebowski = {}));
var Lebowski;
(function (Lebowski) {
    var ComponentClass = (function () {
        function ComponentClass(el, props) {
            this.directives = new Map();
            this.el = el;
            this.scope = new Lebowski.Scope(props);
            this.compile();
        }
        ComponentClass.prototype.compile = function () {
            var _this = this;
            Lebowski.Util.El.Traverse(this.el, function (el) {
                var factory = new Lebowski.Directive.Factory(el);
                var directive = factory.Create();
                if (directive) {
                    _this.directives.set(el, directive);
                }
            });
            this.directives.forEach(function (d) { return d.evaluate(_this.scope); });
        };
        return ComponentClass;
    }());
    Lebowski.Component = function (selector, scope) {
        var els = document.querySelectorAll(selector);
        Array.from(els).forEach(function (el) { return new ComponentClass(el, scope); });
    };
})(Lebowski || (Lebowski = {}));
//# sourceMappingURL=lebowski.js.map