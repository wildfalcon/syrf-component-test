import {SimpleModule, SimpleWebComponent} from '@wildfalcon/graph-displayer';
console.log(SimpleModule)
console.log(SimpleWebComponent)

window.customElements.define('simple-web-component', SimpleWebComponent);  

// if (!customElements.get('graph-displayer')) {
//     window.customElements.define('graph-displayer', GraphDisplayerWebComponent);  
//   }