function replaceString(data) {
    let replacedStr = data.replace(new RegExp('stun', 'g'), 'stump');
    return replacedStr;
}