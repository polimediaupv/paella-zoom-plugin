import { ButtonPlugin } from 'paella-core';

import { ZoomCanvas } from './es.upv.paella.zoomPlugin';

import defaultZoomOutButton from '../icons/mini-zoom-out.svg';

export default class ZoomOutButtonPlugin extends ButtonPlugin {
    getAriaLabel() {
        return "Zoom out";
    }

    getDescription() {
        return this.getAriaLabel();
    }

	async getDictionaries() {
		return {
			es: {
				"Zoom out": "Reducir zoom de vídeo"
			}
		}
	}

    async isEnabled() {
        if (!(await super.isEnabled())) {
            return false;
        }
        
        this.target = this.config.target;
        this._canvas = this.player.videoContainer.streamProvider.streams[this.target].canvas;
        return this._canvas instanceof ZoomCanvas;
    }

    async load() {
        this.icon = this.player.getCustomPluginIcon(this.name,"zoomOutIcon") || defaultZoomOutButton;
    }

    async action() {
        this._canvas.zoomOut();
    }
}
