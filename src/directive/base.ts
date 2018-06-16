/// <reference path="../scope.ts" />

namespace Lebowski.Directive {
    export interface IDirective {
        evaluate(scope: Scope): void;
    }

    export abstract class BaseDirective implements IDirective {
        protected el: Element;
        protected expr: string;

        constructor(expr: string, el: Element) {
            this.el = el;
            this.expr = expr;
        }

        evaluate(scope: Scope) {}
    }

    export function DirectiveAttribute() {
    }
}

