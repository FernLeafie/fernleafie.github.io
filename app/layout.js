import "./globals.css";

export const metadata = {
  title: "Snowleafie Home",
  description: "Home of the Snowleafies, Fern and Lily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <style type="text/css" id="themeStyle"></style>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
