/// <reference path="util/event-emitter.ts" />

namespace Lebowski {
    export type WatchCallback = (value: any, old?: any) => void;

    export interface IScope {
        watch(propName: string, cb: WatchCallback): void;
    }

    export class ScopeProps {
        [name: string]: any;
    }

    export class Scope extends Util.EventEmitter implements IScope {
        [name:string]: any;

        constructor(props: ScopeProps) {
            super();
            Object.assign(this, props);
        }

        watch<T>(propName: string, cb: WatchCallback) {
            this.on(`change:${propName}`, (event: Event, newVal: T) => {
                cb(newVal, this[propName]);
            });
        }

        set<T>(propName: string, newVal: T) {
            this.emit(`change:${propName}`, newVal, this[propName]);
            this[propName] = newVal;
        }
    }
}