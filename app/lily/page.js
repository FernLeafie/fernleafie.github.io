import Page from "@/components/Page";
import Container from "@/components/Container";
import Profile from "@/components/Profile";
import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Image from "next/image";

function Home() {
  return (
    <>
      <Page>
        <div className="row">
          <Profile
            name={"Lily Snowleafie"}
            image={"lily.webp"}
            links={
              <>
                {" "}
                <Link
                  type="discord"
                  link="https://discord.com/users/680873600181469194"
                />
                <Link type="github" link="https://github.com/CodedKyoko" />
                <Link
                  type="anilist"
                  link="https://anilist.co/user/TheKyoko/"
                />
                <Link
                  type="hardcover"
                  link="https://hardcover.app/@TheKyoko"
                />
                <Link
                  type="pronounscc"
                  link="https://pronouns.cc/@TheKyoko"
                />
              </>
            }
          />
          <Container
            title={{
              left: <span> aboutme.txt</span>,
              right: <Icon icon="close" />,
            }}
          >
            <p>ADHD gold member</p>
            <p>Perfectionist over achiever with an inferiority complex</p>
            <p>Imposter syndrome deluxe subscriber</p>
          </Container>
        </div>
        <Container
          title={{
            left: "further useless information.md",
            right: <Icon icon="close" />,
          }}
        >
          <p>
            To be filled out
          </p>
        </Container>
      </Page>
    </>
  );
}

export default Home;