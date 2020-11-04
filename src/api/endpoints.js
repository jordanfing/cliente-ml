/**
 * Los endpoints van acá
 */

const { API_HOSTNAME, API_PORT, PROTOCOL } = require("../config");

const BASE_URL=PROTOCOL+'://'+API_HOSTNAME+':'+API_PORT;

//Devuelve un conjunto de items
const SEARCH_ITEMS     =   BASE_URL+'/api/items?q=';
//Devuelve el detalle de un item
const ITEM_DETAIL      =   BASE_URL+'/api/items/';

module.exports = {
    SEARCH_ITEMS: SEARCH_ITEMS,
    ITEM_DETAIL:ITEM_DETAIL,
    
};