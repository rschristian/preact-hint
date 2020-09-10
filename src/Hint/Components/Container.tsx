import { h, VNode } from 'preact';

import { Options, overrideDefaults } from '../options';
import { useEffect } from 'preact/hooks';

export default function Container(props: Partial<Options>): VNode {
    useEffect(() => {
        overrideDefaults(props);
    }, [props]);

    return <div id="preact-hint__root" style={{ position: 'relative' }} />;
}
