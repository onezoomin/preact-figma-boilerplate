import React from 'react';
import 'react-figma/rpc';

const onCreate = (ev:MouseEvent) => {
    const textbox = document.getElementById('count');
    const count = parseInt((textbox as HTMLInputElement).value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }
const onFractal = () => {
    parent.postMessage({ pluginMessage: { type: 'fractal' } }, '*')
  }
  
const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

export const Buttons = () => {
    return (
        <div>
            <button onClick={onCreate} id="create">Create</button>
            <button onClick={onCancel} id="cancel">Cancel</button>
            <button onClick={onFractal} id="fractal">fractal</button>
        </div>
    );
};
