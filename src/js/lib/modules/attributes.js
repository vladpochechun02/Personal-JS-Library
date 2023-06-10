import $ from '../core';

$.prototype.addAttribute = function(...attributNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(...attributNames);        
    }

    return this;
};

$.prototype.removeAttribute = function(...attributNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(...attributNames);        
    }

    return this;
};
