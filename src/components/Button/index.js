import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = ({
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    to,
    rouned,
    onClick,
    href,
    ...ortherProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...ortherProps,
    };

    //remove event listen from button

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rouned,
        leftIcon,
        rightIcon,
        [className]: className,
    });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
