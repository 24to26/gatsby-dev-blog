/** @jsx jsx */

import { Link, useStaticQuery, graphql } from "gatsby";
import { container, siteTitle } from "./layout.module.css";
import "@fontsource/black-han-sans";
import "@fontsource/noto-sans-kr";
import { jsx } from "theme-ui";
import ColorModeSwitch from "./ColorModeSwitch";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header
        sx={{
          color: "c1",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
        className={siteTitle}
      >
        {data.site.siteMetadata.title}
        <ColorModeSwitch />
      </header>

      <nav>
        <ul>
          <li sx={{}}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
