import Header from "@/components/Header";
import Container from "@/components/Container";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <Container title={{ name: <span>fern snowleafie</span> }}>
        <Image
          src="/assets/profiles/fern.webp"
          alt="Fern's profile picture"
          width={200}
          height={200}
        />
      </Container>
      <p>meow, mrrp, meow</p>
    </>
  );
}

export default Home;

