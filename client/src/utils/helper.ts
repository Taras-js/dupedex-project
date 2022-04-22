import classNames from 'classnames/bind';

export function combinedClass(styles, ...args) {
  const sx = classNames.bind(styles);
  const className = sx(...args);
  return className;
}
