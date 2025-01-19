import ProductPreview from "./product-preview";

export default function MoreStories({ products }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {products.map((product) => {
          return <ProductPreview
            key={product.documentId}
            name={product.name}
            coverImage={product.images?.[0].url}
            documentId={product.documentId}
            summary={product.summary}
          />
})}
      </div>
    </section>
  );
}
