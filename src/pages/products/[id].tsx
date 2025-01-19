import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import ProductBody from "@/components/product-body";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import ProductHeader from "@/components/product-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import ProductTitle from "@/components/product-header";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import { getProductById, getProducts } from "../api/products";

const Post = ({ product, relatedProducts }) => {
  const router = useRouter();
  if (!router.isFallback && !product?.documentId) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout product={product}>
      <Container>
        <Header />
        {router.isFallback ? (
          <ProductTitle>Loading…</ProductTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${product.name} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta property="og:image" content={product.images?.[0].formats.thumbnail.url} />
              </Head>
              <ProductHeader
                name={product.name}
                images={product.images}
                documentId={product.documentId}
              />
              <ProductBody content={product.summary} />
            </article>
            <SectionSeparator />
            {relatedProducts.length > 0 && <MoreStories products={relatedProducts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const  getStaticProps = async ({ params }) => {
  const data = await getProductById(params.id);

  return {
    props: data,
  };
}

export const getStaticPaths = async () => {
  const { products } = await getProducts() || {};
  return {
    paths: products?.map((product) => `/products/${product.documentId}`) || [],
    fallback: true,
  };
}

export default Post;
