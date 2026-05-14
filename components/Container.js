function Container({ title, children }) {
  return (
    <div className="container">
      <div className="container-header">{title.name}</div>
      <div className="container-content">
        {children}
      </div>
    </div>
  );
}
export default Container;
