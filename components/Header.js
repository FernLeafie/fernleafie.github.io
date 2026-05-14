function Header(props) {
  return (
    <nav className="header">
      <span className="button" style={{fontStyle: 'italic'}}>
        <a href="/">Snowleafie</a>
      </span>
      <span className="button">
        <a href="/fern/">Fern</a>
      </span>
      <span className="button">
        <a href="/lily/">Lily</a>
      </span>
      <span className="button">
        <a href="/articles/">Articles</a>
      </span>
    </nav>
  );
}
export default Header;
