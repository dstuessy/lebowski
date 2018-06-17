/// <reference path="base.ts" />

namespace Lebowski.Directive {
    export class VarDirective extends BaseDirective {
        protected el: HTMLInputElement; 

        constructor(expr: string, el: Element) {
            super(expr, el);
        }

        evaluate(scope: Scope) {
            scope.set(this.el.name, this.el.value);

            this.el.addEventListener('change', (e: Event) => {
                scope.set(this.el.name, this.el.value);
            });
        }
    }
}

