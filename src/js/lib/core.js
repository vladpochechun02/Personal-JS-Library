const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector){
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) { //проверка нужна для того, что б можно было назначить addEventListener
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector)); //Она позволяет нам в существующий объект добавить новые свойства, что бы они закрепились в этом объекте
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;