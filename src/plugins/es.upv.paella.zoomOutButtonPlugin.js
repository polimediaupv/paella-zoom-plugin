import { ButtonPlugin } from 'paella-core';

import { ZoomCanvas } from './es.upv.paella.zoomPlugin';

import zoomOutButton from '../icons/mini-zoom-out.svg';

export default class ZoomOutButtonPlugin extends ButtonPlugin {

    async isEnabled() {
        if (!super.isEnabled()) {
            return false;
        }
        
        this.target = this.config.target;
        this._canvas = this.player.videoContainer.streamProvider.streams[this.target].canvas;
        return this._canvas instanceof ZoomCanvas;
    }

    async load() {
        this.icon = zoomOutButton;
    }

    async action() {
        this._canvas.zoomOut();
    }
}
