export const transitionStyles = {
    entering: { opacity: 0, transform: 'scale(0.9)' },
    entered: { opacity: 1, transform: 'translateX(0)', transition: 'all 0.2s' },
    exiting: { opacity: 1 },
    exited: { opacity: 0, transform: 'scale(0.9)', transition: 'all 0.2s' }
};

export const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0
};
