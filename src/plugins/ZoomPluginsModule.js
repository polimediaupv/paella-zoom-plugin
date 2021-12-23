import { PluginModule } from "paella-core";
import packageData from "../../package.json";

export default class ZoomPluginsModule extends PluginModule {
    get moduleName() {
        return "paella-zoom-plugins";
    }

    get moduleVersion() {
        return packageData.version;
    }
}