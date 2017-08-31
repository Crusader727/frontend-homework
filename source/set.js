'use strict'

function set(object, field, value) {
    let arr = field.split('.');
    arr = arr.slice(1);
    let objectCopy = object;
    let length = arr.length;
    arr.forEach(function(item, i, arr) {
        if (typeof objectCopy === "object" && i < length - 1) {
            if (typeof objectCopy[item] === "undefined") {
                objectCopy[item] = {};
            }
            objectCopy = objectCopy[item];
        }
    }, this);
    objectCopy[arr[length - 1]] = value;

    return object;
};