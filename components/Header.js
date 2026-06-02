import Snowleafie from "@/components/Snowleafie";
import Image from "next/image";

function Header(props) {
  return (
    <nav className="header" style={{display: "flex", alignItems: "center"}}>
      <span className="button" style={{ fontStyle: "italic" }}>
        <a href="/" style={{display: "flex", alignItems: "center"}}>
          <Snowleafie size={32} style={{marginRight: "4px"}}/>
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
