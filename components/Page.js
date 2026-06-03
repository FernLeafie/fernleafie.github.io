import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Page({ children }) {
  return (
    <>
      {/* <div style={{display: "flex", minHeight: "100vh", flexDirection: "column", justifyContent: "space-between"}}> */}
        <Header />
        <div className="page">
          <div className="page-content">
            {children}
          </div> 
        </div>
        <Footer />
      {/* </div> */}
    </>
  );
}
export default Page;
