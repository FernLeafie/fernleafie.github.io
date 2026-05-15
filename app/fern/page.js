import Header from "@/components/Header";
import Container from "@/components/Container";
import Profile from "@/components/Profile";
import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <div className="page">
        <div className="page-content">
          <div className="row">
            <Profile
              name={"Fern Snowleafie"}
              image={"fern.webp"}
              links={
                <>
                  {" "}
                  <Link
                    type="discord"
                    link="https://discord.com/users/582201423748399115"
                  />
                  <Link
                    type="bluesky"
                    link="https://bsky.app/profile/fernleaf.bsky.social"
                  />
                  <Link type="github" link="https://github.com/FernLeafie" />
                  <Link
                    type="anilist"
                    link="https://anilist.co/user/fernleafie/"
                  />
                  <Link
                    type="hardcover"
                    link="https://hardcover.app/@fernleafie"
                  />
                  <Link
                    type="pronounscc"
                    link="https://pronouns.cc/@fernleafie"
                  />
                </>
              }
            />
            <Container
              title={{
                left: (
                  <>
                    <Icon icon="file" />
                    <span>aboutme.typ</span>
                    <span className="info">
                      <Icon icon="file" />
                      <span>Typst</span>
                      <Icon icon="storage" />
                      <span>4 KiB</span>
                    </span>
                  </>
                ),
                right: <Icon icon="close" />,
              }}
            >
              <p>= Fern</p>
              <p>A nerdy lesbian girl</p>
              <p>
                Interested in almost anything, but mostly: <br />
                computers, programming, gaming, manga, anime, and worldbuilding
              </p>
              <p>
                Likes silly low level programming languages, with a special
                interest for rust
              </p>
            </Container>
          </div>
          <Container
            title={{
              left: (
                <>
                  <Icon icon="file" />
                  <span>further useless information.md</span>
                  <span className="info">
                    <Icon icon="file" />
                    <span>Markdown</span>
                    <Icon icon="storage" />
                    <span>13 KiB</span>
                  </span>
                </>
              ),

              right: <Icon icon="close" />,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum
              dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
              sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
              sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
