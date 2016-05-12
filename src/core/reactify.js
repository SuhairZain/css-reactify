/**
 * Created by SuhairZain on 12/5/16.
 */

import camelCase from 'camelcase';
import {parse} from 'css';

const reactifyProperty = function(property){
    return {
        [camelCase(property.property)]: property.value
    }
};

export const reactify = function(object){
    const out = [];

    parse(object).stylesheet.rules.map(function(rule){
        rule.declarations.map(function (declaration) {
            out.push(reactifyProperty(declaration));
        })
    });

    return out;
};