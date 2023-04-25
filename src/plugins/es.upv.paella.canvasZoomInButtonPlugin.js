import { CanvasButtonPlugin } from "paella-core";
import { ZoomCanvas } from "./es.upv.paella.zoomPlugin";

import defaultZoomInButton from '../icons/mini-zoom-in.svg';

export default class CanvasZoomInButtonPlugin extends CanvasButtonPlugin {
    async isEnabled() {
        if (!(await super.isEnabled())) {
            return false;
        }
        
        let result = false;
        this._streams = this.player.videoContainer.streamProvider.streams;
        for (const s in this._streams) {
            result ||= this._streams[s].canvas instanceof ZoomCanvas;
        }
        
        return result;
    }
    
    async load() {
        this.icon = this.player.getCustomPluginIcon(this.name,"zoomInIcon") || defaultZoomInButton;
    }

    async action(content, videoPlayer, videoCanvas, canvasPlugin) {
        if (videoCanvas instanceof ZoomCanvas) {
            videoCanvas.zoomIn();
        }
    }
}