import { ButtonPlugin } from 'paella-core';

import { ZoomCanvas } from './es.upv.paella.zoomPlugin';

import defaultZoomInButton from '../icons/mini-zoom-in.svg';

export default class ZoomInButtonPlugin extends ButtonPlugin {
    getAriaLabel() {
        return "Zoom in";
    }

    getDescription() {
        return this.getAriaLabel();
    }

	async getDictionaries() {
		return {
			es: {
				"Zoom in": "Ampliar zoom del vídeo"
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
        this.icon = this.player.getCustomPluginIcon(this.name,"zoomInIcon") || defaultZoomInButton;
    }

    async action() {
        this._canvas.zoomIn();
    }
}
