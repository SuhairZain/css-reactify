/**
 * Created by SuhairZain on 12/5/16.
 */

import camelCase from 'camelcase';
import {parse} from 'css';

const isVendorPrefixed = function(prop){
    const prefixes = [
        'moz', 'ms', 'o', 'webkit'
    ];

    for(const prefix of prefixes){
        if(prop.startsWith(prefix) && isUpperCase(prop.charAt(prefix.length))){
            return true;
        }
    }
    return false;
};

function isUpperCase(str) {
    return str !== str !== str.toLowerCase();
}

const upperCase = function(prop){
    return prop.charAt(0).toUpperCase() + prop.substr(1, prop.length-1);

};

const upperCaseIfNecessary = function(prop){
    return prop.startsWith('ms')?prop:upperCase(prop);
};

const properlyVendorify = function(prop){
    return isVendorPrefixed(prop)?upperCaseIfNecessary(prop):prop;
};

export const reactify = function(object){
    const out = {};

    parse(object).stylesheet.rules.map(function(rule){
        const cls = {};

        rule.declarations.map(function (declaration) {
            cls[properlyVendorify(camelCase(declaration.property))] = declaration.value;
        });

        out[camelCase(rule.selectors[0])] = cls;
    });

    return out;
};