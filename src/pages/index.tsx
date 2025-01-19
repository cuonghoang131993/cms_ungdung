import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroProduct from "@/components/hero-product";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import { getProducts } from "./api/products";

export default function Index({ products }) {
  const heroProduct = products[0];
  const moreProducts = products.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroProduct && (
            <HeroProduct
              name={heroProduct.name}
              images={heroProduct.images}
              summary={heroProduct.summary}
              documentId={heroProduct.documentId}
            />
          )}
          {moreProducts.length > 0 && <MoreStories products={moreProducts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { products } = await getProducts() || {};
  return {
    props: { products },
  };
}