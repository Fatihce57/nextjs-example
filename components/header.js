import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .header {
          background: rgb(208, 208, 216);
          border-bottom: 1px solid blue;
          padding: 15px 5px;

          ul {
            display: flex;

            a {
              align-items: center;
              text-decoration: none;
              padding: 0 20px;
              color: black;
            }
          }
        }
      `}</style>
    </header>
  )
}
