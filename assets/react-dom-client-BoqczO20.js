import { r as requireReactDom } from "./react-dom-J4YzPou7.js";
var client = {};
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
export {
  clientExports as c
};
//# sourceMappingURL=react-dom-client-BoqczO20.js.map
