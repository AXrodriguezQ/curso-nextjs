export default function BlogLayout(
    {children}: {
        children: React.ReactNode;
    }
    ) {
    return (
        <div>
            <header>Cabezera del bloc</header>
            <main>
                <section>
                    {children}
                </section>
                <aside>
                    <form action="">
                        <input type="search" placeholder="Buscar"/>
                        <button type="submit">Buscar</button>
                    </form>
                </aside>
            </main>
        </div>
    )
}