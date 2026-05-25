import Image from "next/image";

function Header(props) {
  return (
    <nav className="header" style={{display: "flex", alignItems: "center"}}>
      <span className="button" style={{ fontStyle: "italic" }}>
        <a href="/">
          <Image
            style={{display: "inline", marginRight: "4px"}}
            src="/assets/icons/icon.png"
            alt="Snowleafie logo"
            width={32}
            height={32}
          />
          <span>Snowleafie</span>
        </a>
      </span>
      /
      <span className="button">
        <a href="/fern/">Fern</a>
      </span>
      /
      <span className="button">
        <a href="/lily/">Lily</a>
      </span>
      /
      <span className="button">
        <a href="/articles/">Articles</a>
      </span>
    </nav>
  );
}
export default Header;
