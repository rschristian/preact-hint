export function Header() {
    return (
        <section class="bg-gradient-to-br from-primary-dark to-primary">
            <div class="py-12 px-4">
                <div class="mx-auto text-center">
                    <h1 class="mb-2 text(steel 5xl) font-bold">Preact Hint</h1>
                    <h2 class="text-steel-dim">
                        Lightweight and extensible tooltip component for Preact
                    </h2>
                    <a
                        class="mt-8 px-4 py-2 inline-flex rounded-md text-steel border(1 solid steel) bg(white opacity-10) hover:(text-white bg(white opacity-20) border-steel-dimmer)"
                        href="https://github.com/rschristian/preact-hint"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Check it out on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
