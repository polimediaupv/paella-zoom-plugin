export default function getZoomPluginContext() {
    return require.context("./plugins", true, /\.js/)
}
