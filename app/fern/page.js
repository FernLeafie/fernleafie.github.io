import Header from "@/components/Header";
import Container from "@/components/Container";
import Profile from "@/components/Profile";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Profile name={"Fern Snowleafie"} image={"fern.webp"} />
        <Container
          title={{
            left: <span> aboutme.txt</span>,
            right: "x",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget odio nunc. Praesent nec mi ultricies, ornare ex quis, finibus
            mauris. Ut eget ante vitae felis ornare venenatis sit amet finibus
            tortor. Aliquam a bibendum nunc. Ut tempus ante ac turpis rutrum
            semper. Nulla a rhoncus tellus. Proin viverra nisi sit amet
            elementum vulputate. Proin eget mi at leo luctus ornare. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Curabitur orci neque, hendrerit eget ligula eu,
            interdum placerat justo. Etiam vel libero at nisl auctor
            ullamcorper. Pellentesque sollicitudin euismod ex, a pellentesque
            risus placerat a. Phasellus volutpat et lorem sed dignissim. Integer
            laoreet viverra vulputate.
          </p>
        </Container>
      </div>
      <p>meow, mrrp, meow</p>
    </>
  );
}

export default Home;

