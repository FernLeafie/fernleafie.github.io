import Icon from "@/components/Icon";

function Link({ link, type }) {
  return (
    <a href={link} className="link">
      <Icon icon={type} />
    </a>
  );
}
export default Link;
