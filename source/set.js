'use strict'

function set(object, field, value) {
    let arr = field.split('.');
    arr.shift();
    let objectCopy = object;
    while (typeof objectCopy === "object" && arr.length > 1) {
        let buffer = arr.shift();
        if (typeof objectCopy[buffer] === "undefined") {
            objectCopy[buffer] = {};
        }
        objectCopy = objectCopy[buffer];
    }
    objectCopy[arr.shift()] = value;
    return object;
};