import classNames from 'classnames/bind';

export function combinedClass(styles, ...args) {
    let sx = classNames.bind(styles);
    let className = sx(...args)
    return className;
}
