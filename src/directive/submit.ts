/// <reference path="base.ts" />
/// <reference path="../component.ts" />

namespace Lebowski.Directive {
    export class SubmitDirective extends EventDirective {
        constructor(expr: string, el: Element) {
            super(expr, el);
        }

        evaluate(scope: Scope) {
            let listener = scope[this.expr].bind(scope);

            this.el.addEventListener('submit', listener);
        }
    }
}

