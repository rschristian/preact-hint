export function Header() {
    return (
        <header class="flex w-full max-w-4xl mt(8 md:16) mb(16 md:36) mx-auto">
            <div class="flex justify-between w-full">
                <a
                    class="text(3xl hocus:white-muted) font-bold tracking-wider"
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
                        iconId="github"
                    />
                    <NavItem
                        href="https://twitter.com/_rschristian"
                        label="My Twitter Account"
                        iconId="twitter"
                    />
                    <button
                        id="theme-switcher"
                        class="ml-6 py-2 px-1 border(b transparent) hocus:text-primary"
                        aria-label="Toggle color scheme"
                    >
                        <svg>
                            <title>Toggle Color Scheme</title>
                            <use
                                id="light-mode"
                                href="/assets/icons.svg#sun"
                                style="visibility: hidden"
                            />
                            <use id="dark-mode" href="/assets/icons.svg#moon" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}

interface NavItemProps {
    href: string;
    label: string;
    iconId: string;
}

function NavItem(props: NavItemProps) {
    return (
        <a
            href={props.href}
            class="ml(6 first:0) py-2 px-1 border(b white-muted hocus:primary)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.label}
        >
            <svg role="img">
                <title>{props.label}</title>
                <use href={`/assets/icons.svg#${props.iconId}`} />
            </svg>
        </a>
    );
}
