'use strict'

function set(object, field, value) {
    let arr = field.split('.');
    arr = arr.slice(1);
    let objectPtr = object;
    let length = arr.length;
    arr.forEach((item, i) => {
        if (typeof objectPtr === "object" && i < length - 1) {
            if (typeof objectPtr[item] === "undefined") {
                objectPtr[item] = {};
            }
            objectPtr = objectPtr[item];
        }
    });
    objectPtr[arr[length - 1]] = value;

    return object;
};