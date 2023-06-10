import $ from '../core';

$.prototype.addAttribute = function(...attributNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(...attributNames);        
    }

    return this;
};

$.prototype.removeAttribute = function(...attributNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].removeAttribute(...attributNames);        
    }

    return this;
};
