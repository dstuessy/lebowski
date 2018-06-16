
namespace Lebowski.Util {
    export type ListenerCallback = (event: Event, ...args: any[]) => void;

    export interface IEventEmitter {
        on(event: string, cb: ListenerCallback): void;
        emit(event: string, ...args: any[]): void;
    };

    export interface Listener {
        event: string;
        cb: ListenerCallback;
    }

    export class EventEmitter implements IEventEmitter {
        private listeners: Array<Listener> = [];

        on(event: string, cb: ListenerCallback) {
            this.listeners.push({ event, cb });
        }

        emit(event: string, ...args: any[]) {
            this.listeners.forEach((l) => {
                if (event === l.event) {
                    l.cb(new Event(event), ...args);
                }
            });
        }
    }
}