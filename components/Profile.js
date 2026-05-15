import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Image from "next/image";

function Profile({ name, image }) {
  return (
    <Container
      title={{
        left: (
          <span style={{ fontStyle: "italic" }}>
            {" "}
            <Image
              className="icon"
              src={"/assets/icons/person-16.svg"}
              alt="Fern's profile picture"
              width={16}
              height={16}
            />
            {name.toLowerCase()}
          </span>
        ),
        right: "x",
      }}
    >
      <Image
        src={"/assets/profiles/" + image}
        alt="Fern's profile picture"
        width={300}
        height={300}
      />
      <div className="links">
        <Icon icon="bluesky"/>
        <Icon icon="anilist"/>
      </div>
    </Container>
  );
}
export default Profile;
