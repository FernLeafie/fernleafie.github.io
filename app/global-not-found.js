import Page from "@/components/Page";

function Page404() {
  return (
    <>
      <Page>
        <div className="row row-center">
          <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
            <h1>We're so sowwy, this page cant be found</h1>
            <p className="info">Error 404 - page not found</p>
            <a href="/">Go back home</a>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Page404;