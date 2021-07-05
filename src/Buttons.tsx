import "tailwindcss/tailwind.css"

const onCreate = (ev: MouseEvent) => {
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

export const Button = ({children = '', ...restProps}) => {
  return (
    <button class="p-2 border rounded-md border-black" {...restProps}>{children}</button>
  )
}
export const Buttons = () => {
    return (
        <div class="flex flex-row justify-around">
            <Button onclick={onCreate} id="create">Create</Button>
            <Button onclick={onCancel} id="cancel">Cancel</Button>
            <Button onclick={onFractal} id="fractal">Fractal</Button>
        </div>
    );
};
