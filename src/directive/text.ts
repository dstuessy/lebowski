/// <reference path="base.ts" />

namespace Lebowski.Directive {
    export class TextDirective extends BaseDirective {
        constructor(expr: string, el: Element) {
            super(expr, el);
        }

        evaluate(scope: Scope) {
            scope.watch<string>(this.expr, (newVal: string) => {
                this.el.innerHTML = newVal;
            });
        }
    }
}

