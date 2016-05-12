/**
 * Created by SuhairZain on 12/5/16.
 */

import camelCase from 'camelcase';
import {parse} from 'css';

export const reactify = function(object){
    const out = {};

    parse(object).stylesheet.rules.map(function(rule){
        const cls = {};

        rule.declarations.map(function (declaration) {
            cls[camelCase(declaration.property)] = declaration.value;
        });

        out[camelCase(rule.selectors[0])] = cls;
    });

    return out;
};