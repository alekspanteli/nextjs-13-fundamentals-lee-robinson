import Link from 'next/link';

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
                <li>Main Category 1</li>
                <li>Main Category 2</li>
            </ul>
        </aside>
        {children}
        <Link href="/">Back</Link>
        </>
    );
  }