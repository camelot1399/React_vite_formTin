export const regexpIsEmail = () => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexpIsValidSymbols = () => /^[A-Za-zА-Яа-яЁё'\s]+$/;
export const regexpisValidMobile = () => /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;