export default function BlogLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <aside>
            <ul>
                <li>test</li>
            </ul>
        </aside>
        {children}
        </>
    );
  }