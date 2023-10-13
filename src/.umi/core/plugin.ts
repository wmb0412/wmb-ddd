// @ts-nocheck
import { Plugin } from '/project/sandbox/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','getInitialState','layout','request',],
});

export { plugin };
