import Logo from "@/components/Logo";

function Link({ link, type }) {
  return (
    <a href={link} className="link">
      <Logo logo={type} />
    </a>
  );
}
export default Link;
