import { cloneElement } from 'preact';
import type { VNode } from 'preact';
import { Github, Twitter } from 'preact-feather';

export function Header() {
    return (
        <header class="flex w-full max-w-4xl mt(8 md:16) mb(16 md:36) mx-auto">
            <div class="flex justify-between w-full">
                <a
                    class="text(3xl hover:white-muted) font-bold tracking-wider"
                    href="https://github.com/rschristian"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="My GitHub Account"
                >
                    RSC
                </a>
                <nav class="flex">
                    <NavItem
                        href="https://github.com/rschristian/preact-hint"
                        label="Source Code on GitHub"
                        icon={<Github />}
                    />
                    <NavItem
                        href="https://twitter.com/_rschristian"
                        label="My Twitter Account"
                        icon={<Twitter />}
                    />
                </nav>
            </div>
        </header>
    );
}

interface NavItemProps {
    href: string;
    label: string;
    icon: VNode;
}

function NavItem(props: NavItemProps) {
    return (
        <a
            href={props.href}
            class="ml(6 first:0) py-2 px-1 border(b white-muted hover:primary)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.label}
        >
            {cloneElement(props.icon, { alt: props.label, role: 'img' })}
        </a>
    );
}
