import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Page({ children }) {
  return (
    <>
      <Header />
      <div className="page">
        <div className="page-content">
          {children}
        </div> 
      </div>
      <Footer />
    </>
  );
}
export default Page;
