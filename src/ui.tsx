import { render } from "preact";
import "tailwindcss/tailwind.css"
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

import { Buttons } from './Buttons';

export const Ui = () => {
  return (
    <div class="flex p-3 h-full flex-col justify-around">
      <h2 class="text-center">Fractal Rectangle Creator
        <div class="onboarding-tip">
          <div class="icon icon--styles"></div>
          <div class="onboarding-tip__msg">Create stars from rotated rectangles and fractalize them using pixel magic</div>
        </div>
      </h2>
      <div class="flex p-3 h-full flex-row justify-between">
        <div class="p-1 w-1/6">Amount:</div>
        <div class="input w-4/6">
          <input id="amount" type="input" class="input__field" value="5" />
        </div>
      </div>
      <Buttons />
    </div>
  );
};

render(Ui(), document.getElementById('preact'));