
import { define } from './api_helper';
const url = 'http://127.0.0.1:5000';

const apiObject = {
    test:{
        url:`${url}/test`,
    },
    configRouter:{
        url:`${url}/router_config`,
    },
    staticNat:{
        url:`${url}/static_nat`,
    },
    deleteStaticNat:{
        url:`${url}/delete_static_nat`
    },
    dynamicNat:{
        url:`${url}/dynamic_nat`
    },
    showNat:{
        url:`${url}/show_nat`
    },
    showConfig:{
        url:`${url}/show_config`
    }
};
export default define(apiObject);
