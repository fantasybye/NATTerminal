
import { define } from './api_helper';
const url = 'http://127.0.0.1:5000';

const apiObject = {
    test:{
        url:`${url}/test`,
    },
    configRouter:{
        url:`${url}/router_config`,
        method:'post'
    },
    staticNat:{
        url:`${url}/static_nat`,
        method:'post'
    },
    deleteStaticNat:{
        url:`${url}/delete_static_nat`
    },
    dynamicNat:{
        url:`${url}/dynamic_nat`,
        method:'post'
    },
    showNat:{
        url:`${url}/show_nat`
    },
    showConfig:{
        url:`${url}/verify`
    }
};
export default define(apiObject);
