import { MenuButtonPlugin } from 'paella-core';

import zoomInButton from '../icons/mini-zoom-in.svg';
import zoomOutButton from '../icons/mini-zoom-out.svg';

export default class ZoomButtonPlugin extends MenuButtonPlugin {

    async load() {
        this.icon = zoomInButton;
        this.target = this.config.target || "presenter";
    }

    get canvas() {
        return this.player.videoContainer.streamProvider.streams[this.target].canvas;
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
            this.canvas.zoomIn();
            break;
        case "out":
            this.canvas.zoomOut();
            break;
        }
    }
}
