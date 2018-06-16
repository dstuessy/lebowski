/// <reference path="util/el.ts" />
/// <reference path="directive/base.ts" />
/// <reference path="directive/factory.ts" />

namespace Lebowski {
    export interface IComponent {}

    class ComponentClass implements IComponent {
        private directives: Map<Element, Directive.IDirective> = new Map();
        protected el: Element;
        protected scope: Scope;

        constructor(el: Element, props: ScopeProps) {
            this.el = el;
            this.scope = new Scope(props);
            this.compile();
        }

        private compile() {
            Util.El.Traverse(this.el, (el: Element) => {
                const factory = new Directive.Factory(el);
                const directive = factory.Create();

                if (directive) {
                    this.directives.set(el, directive);
                }
            });

            this.directives.forEach(d => d.evaluate(this.scope));
        }
    }

    export const Component = function (el: Element, scope: ScopeProps): ComponentClass {
        return new ComponentClass(el, scope);
    }
}
