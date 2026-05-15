import Header from "@/components/Header";
import Container from "@/components/Container";
import Profile from "@/components/Profile";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import FiletypeIcon from "@/components/FiletypeIcon";

export default function Home() {
  return (
    <>
      <Header />
      <div className="page">
        <div className="page-content">
          <div className="row row-center">
            <a href="/fern/">
              <Profile
                name={"Fern Snowleafie"}
                image={"fern.webp"}
                links={
                  <>
                    {" "}
                    <Logo
                      logo="discord"
                      link="https://discord.com/users/582201423748399115"
                    />
                    <Logo
                      logo="bluesky"
                      link="https://bsky.app/profile/fernleaf.bsky.social"
                    />
                    <Logo logo="github" link="https://github.com/FernLeafie" />
                    <Logo
                      logo="anilist"
                      link="https://anilist.co/user/fernleafie/"
                    />
                    <Logo
                      logo="hardcover"
                      link="https://hardcover.app/@fernleafie"
                    />
                    <Logo
                      logo="pronounscc"
                      link="https://pronouns.cc/@fernleafie"
                    />
                  </>
                }
              />
            </a>
            <a href="/lily/">
              <Profile
                name={"Lily Snowleafie"}
                image={"lily.webp"}
                links={
                  <>
                    {" "}
                    <Logo
                      logo="discord"
                      link="https://discord.com/users/680873600181469194"
                    />
                    <Logo logo="github" link="https://github.com/CodedKyoko" />
                    <Logo
                      logo="anilist"
                      link="https://anilist.co/user/TheKyoko/"
                    />
                    <Logo
                      logo="hardcover"
                      link="https://hardcover.app/@TheKyoko"
                    />
                    <Logo
                      logo="pronounscc"
                      link="https://pronouns.cc/@TheKyoko"
                    />
                  </>
                }
              />
            </a>
          </div>
          <Container
            title={{
              left: (
                <>
                  <Icon icon="file" />
                  <span>Cute homepage pending.md</span>
                  <span className="info">
                    <FiletypeIcon icon="markdown" />
                    <span>Markdown</span>
                    <Icon icon="storage" />
                    <span>0 KiB</span>
                  </span>
                </>
              ),

              right: <Icon icon="close" />,
            }}
          >
            <p></p>
          </Container>
        </div>
      </div>
    </>
  );
}
