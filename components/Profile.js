import Container from "@/components/Container";
import Image from "next/image";

function Profile({ name, image }) {
  return (
    <Container
      title={{
        left: (
          <span style={{ fontStyle: "italic" }}>
            {" "}
            <Image className="icon"
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
    </Container>
  );
}
export default Profile;
