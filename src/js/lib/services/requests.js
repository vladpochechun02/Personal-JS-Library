import $ from '../core';

$.prototype.get = async function(url, dataTypeAnswer = 'json') {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Exception(`Could not fetch ${url}, status: ${res.status}`);
    }

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
        // default:
        //     break;
    }
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
        // default:
        //     break;
    }
};