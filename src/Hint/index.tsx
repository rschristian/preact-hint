import { ComponentChild, h, render } from 'preact';

import { defaults } from './options';
import Container from './Components/Container';
import Hint from './Components/Hint';

function renderHint(content: string | ComponentChild, timeout: number): void {
    const target = document.getElementById('preact-hint__root');
    if (target !== null) render(<Hint content={content} timeout={timeout} />, target);
}

function hide(timeout: number): void {
    const target = document.getElementById('preact-hint__root');
    if (target !== null && target.hasChildNodes()) {
        // Use default timeout if not set.
        const renderTimeout = timeout || defaults.hintDelay;
        setTimeout(() => {
            document.getElementById('preact-hint__hint')!.classList.replace('fade-in', 'fade-out');
            setTimeout(() => {
                render(null, target);
            }, 500);
        }, renderTimeout);
    }
}

function show(content: string | ComponentChild, timeout: number): void {
    const target = document.getElementById('preact-hint__root');
    if (target !== null && !target.hasChildNodes()) {
        // Use default timeout if not set.
        const renderTimeout = timeout || defaults.hintDelay;

        // Render Component with Props.
        setTimeout(() => renderHint(content, renderTimeout), renderTimeout);
    }
}

/* Export notification functions */
export const preactHint = {
    show,
    hide,
};

export default Container;
