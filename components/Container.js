function Container({ title, children }) {
  return (
    <div className="container">
      <div className="container-header">
        <span>{title.left}</span>
        <span>{title.right}</span>
      </div>
      <div className="container-content">{children}</div>
    </div>
  );
}
export default Container;
