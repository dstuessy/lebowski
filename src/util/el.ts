
namespace Lebowski.Util {
    export class El {
        static Traverse(el: Element, cb: (e: Element) => void) {
            cb(el);

            Array.from(el.children).forEach(e => El.Traverse(e, cb));
        }

        static Find(el: Element, cb: (e: Element) => boolean): Element {
            const found = cb(el);

            if (found) {
                return el;
            }

            return null;
        }
    }
}