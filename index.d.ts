export = NodeDcom;
export as namespace NodeDcom;

import * as Events from 'events';

declare namespace NodeDcom {
  interface Stub extends Events.EventEmitter {}
  interface ComServer extends Stub {
    init: () => Promise<void>;
    createInstance: () => Promise<void>;
  }
  interface Session {
    createSession: () => Session;
    setGlobalSocketTimeout: (timeout: number) => void;
  }
  interface Clsid {}
  interface ClsIdConstructor {
    new (uuid: string): Clsid;
  }

  var Clsid: ClsIdConstructor;
}
