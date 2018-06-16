/// <reference path="base.ts" />

namespace Lebowski.Directive {
    export class VarDirective extends BaseDirective {
        protected el: HTMLInputElement; 

        constructor(expr: string, el: Element) {
            super(expr, el);
        }

        evaluate(scope: Scope) {
            this.el.addEventListener('change', (e: Event) => {
                const name = this.el.name;
                scope.set(name, this.el.value);
            });
        }
    }
}

