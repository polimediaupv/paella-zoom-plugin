import ZoomCanvas from './plugins/es.upv.paella.zoomPlugin';
import ZoomInButton from './plugins/es.upv.paella.zoomInButtonPlugin';
import ZoomOutButton from './plugins/es.upv.paella.zoomOutButtonPlugin';
import ZoomMenuButton from './plugins/es.upv.paella.zoomMenuButtonPlugin';

export default function getZoomPluginContext() {
    return require.context("./plugins", true, /\.js/)
}

export const ZoomCanvasPlugin = ZoomCanvas;
export const ZoomInButtonPlugin = ZoomInButton;
export const ZoomOutButtonPlugin = ZoomOutButton;
export const ZoomMenuButtonPlugin = ZoomMenuButton;
