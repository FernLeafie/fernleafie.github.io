import Container from "@/components/Container";
import Link from "@/components/Link";
import Icon from "@/components/Icon";

function Profile({ name, image, links }) {
  return (
    <Container
      title={{
        left: (
          <>
            <Icon icon="person" />
            <span style={{ fontStyle: "italic" }}>{name.toLowerCase()}</span>
          </>
        ),
        right: <Icon icon="close" />,
      }}
    >
      <img
        className="profile"
        src={"/assets/profiles/" + image}
        alt={name + "'s profile picture"}
        width={300}
        height={300}
      />
      <div className="links">
        {links}
      </div>
    </Container>
  );
}
export default Profile;
