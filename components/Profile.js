import Container from "@/components/Container";
import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Image from "next/image";

function Profile({ name, image }) {
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
      <Image
        className="profile"
        src={"/assets/profiles/" + image}
        alt="Fern's profile picture"
        width={300}
        height={300}
      />
      <div className="links">
        <Link
          type="discord"
          link="https://discord.com/users/582201423748399115"
        />
        <Link
          type="bluesky"
          link="https://bsky.app/profile/fernleaf.bsky.social"
        />
        <Link type="github" link="https://github.com/FernLeafie" />
        <Link type="anilist" link="https://anilist.co/user/fernleafie/" />
        <Link type="hardcover" link="https://hardcover.app/@fernleafie" />
        <Link type="pronounscc" link="https://pronouns.cc/@fernleafie" />
      </div>
    </Container>
  );
}
export default Profile;
