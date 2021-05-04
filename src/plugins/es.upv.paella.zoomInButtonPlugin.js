import { ButtonPlugin } from 'paella-core';

import { ZoomCanvas } from './es.upv.paella.zoomPlugin';

import zoomInButton from '../icons/mini-zoom-in.svg';

export default class ZoomInButtonPlugin extends ButtonPlugin {

    async isEnabled() {
        this.target = this.config.target;
        this._canvas = this.player.videoContainer.streamProvider.streams[this.target].canvas;
        return this._canvas instanceof ZoomCanvas;
    }

    async load() {
        this.icon = zoomInButton;
    }

    async action() {
        this._canvas.zoomIn();
    }
}
