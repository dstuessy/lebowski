/// <reference path="component.ts" />

namespace Lebowski {
    const componentEls = Array.apply(null,
        document.querySelectorAll('[data-component]'));
    const components = componentEls.map(el => new Component(el));

    console.log(components);
}

