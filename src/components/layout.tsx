import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ product, children }: any) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert product={product} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
