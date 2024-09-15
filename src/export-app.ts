import { createBridgeComponent } from "@module-federation/bridge-vue3";
import App from "./App.vue";
import { router } from "./router";

export default createBridgeComponent({
  rootComponent: App,
  appOptions: () => ({
    router
  }),
})