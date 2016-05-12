/**
 * Created by SuhairZain on 12/5/16.
 */

const reactifyProperty = function(property){
    return {
        [property.property]: property.value
    }
};

export const reactify = function(object){
    const out = [];

    object.stylesheet.rules.map(function(rule){
        rule.declarations.map(function (declaration) {
            out.push(reactifyProperty(declaration));
        })
    });

    return out;
};