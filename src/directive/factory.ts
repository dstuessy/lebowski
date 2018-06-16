/// <reference path="base.ts" />
/// <reference path="event.ts" />
/// <reference path="submit.ts" />
/// <reference path="var.ts" />
/// <reference path="text.ts" />

namespace Lebowski.Directive {
    export class Factory {
        private el: Element;

        constructor(el: Element) {
            this.el = el;
        }

        Create(): IDirective {
            let expr: string;

            if (expr = this.el.getAttribute('data-event')) {
                return new EventDirective(expr, this.el);
            }

            if (expr = this.el.getAttribute('data-submit')) {
                return new SubmitDirective(expr, this.el);
            }

            if (expr = this.el.getAttribute('data-var')) {
                return new VarDirective(expr, this.el);
            }

            if (expr = this.el.getAttribute('data-text')) {
                return new TextDirective(expr, this.el);
            }
        }
    }
}
