import { a as requireReactDomServerLegacy_browser_production_min, b as requireReactDomServer_browser_production_min } from "./react-dom-J4YzPou7.js";
var server_browser = {};
var hasRequiredServer_browser;
function requireServer_browser() {
  if (hasRequiredServer_browser) return server_browser;
  hasRequiredServer_browser = 1;
  var l, s;
  {
    l = requireReactDomServerLegacy_browser_production_min();
    s = requireReactDomServer_browser_production_min();
  }
  server_browser.version = l.version;
  server_browser.renderToString = l.renderToString;
  server_browser.renderToStaticMarkup = l.renderToStaticMarkup;
  server_browser.renderToNodeStream = l.renderToNodeStream;
  server_browser.renderToStaticNodeStream = l.renderToStaticNodeStream;
  server_browser.renderToReadableStream = s.renderToReadableStream;
  return server_browser;
}
var server_browserExports = requireServer_browser();
export {
  server_browserExports as s
};
//# sourceMappingURL=react-dom-server-DFtmGdOm.js.map
