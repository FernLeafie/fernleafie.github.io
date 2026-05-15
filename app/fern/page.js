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
                left: <span> aboutme.txt</span>,
                right: <Icon icon="close" />,
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                eget odio nunc. Praesent nec mi ultricies, ornare ex quis,
                finibus mauris. Ut eget ante vitae felis ornare venenatis sit
                amet finibus tortor. Aliquam a bibendum nunc. Ut tempus ante ac
                turpis rutrum semper. Nulla a rhoncus tellus. Proin viverra nisi
                sit amet elementum vulputate. Proin eget mi at leo luctus
                ornare. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Curabitur orci neque, hendrerit
                eget ligula eu, interdum placerat justo. Etiam vel libero at
                nisl auctor ullamcorper. Pellentesque sollicitudin euismod ex, a
                pellentesque risus placerat a. Phasellus volutpat et lorem sed
                dignissim. Integer laoreet viverra vulputate.
              </p>
            </Container>
          </div>
          <Container
            title={{
              left: "further useless information.md",
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
