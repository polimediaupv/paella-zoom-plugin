import { MenuButtonPlugin } from 'paella-core';

import { ZoomCanvas } from './es.upv.paella.zoomPlugin';

import zoomInButton from '../icons/mini-zoom-in.svg';
import zoomOutButton from '../icons/mini-zoom-out.svg';

export default class ZoomButtonPlugin extends MenuButtonPlugin {

    async isEnabled() {
        this._target = this.config.target || "presenter";
        this._canvas = this.player.videoContainer.streamProvider.streams[this._target].canvas;
        return this._canvas instanceof ZoomCanvas;
    }

    async load() {
        this.icon = zoomInButton;
    }

    async getMenu() {
        return [
            {
                id: "in",
                title: "Zoom in",
                icon: zoomInButton
            },
            {
                id: "out",
                title: "Zoom out",
                icon: zoomOutButton
            }
        ]
    }

    get buttonType() {
        return "button"
    }

    get showTitles() {
        return false;
    }

    itemSelected(itemData) {
        switch (itemData.id) {
        case "in":
            this._canvas.zoomIn();
            break;
        case "out":
            this._canvas.zoomOut();
            break;
        }
    }
}
