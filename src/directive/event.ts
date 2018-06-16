/// <reference path="base.ts" />
/// <reference path="../component.ts" />

namespace Lebowski.Directive {
    export class EventDirective extends BaseDirective {
        constructor(expr: string, el: Element) {
            super(expr, el);
        }

        evaluate(scope: Scope) {
            const tokens = this.expr.split(':');
            const event = tokens[0];
            let listener = scope[tokens[1]];

            this.el.addEventListener(event, listener);
        }
    }
}

