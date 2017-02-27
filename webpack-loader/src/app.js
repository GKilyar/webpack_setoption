import './css/common.css';
import layer from './components/layer/layer.js';
const App = function (){
    var dom = document.getElementById("app");
    var layer_r = new layer();
    dom.innerHTML=layer_r.tpl({
        name:'My name is Aili',
        arr:['webpack','grunt','gulp']
    });
}

new App();