import tpl from './layer.tpl';
import './layer.less';

function layer(){
    return {
        name:'layer',
        tpl:tpl
    };
    alert("Im layer");
}

export default layer;