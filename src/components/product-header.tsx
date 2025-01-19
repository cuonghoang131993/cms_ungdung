import Avatar from "./avatar";
import CoverImage from "./cover-image";
import ProductTitle from "./product-title";

export default function PostHeader({ name, images, documentId }: any) {
  return (
    <>
      <ProductTitle>{name}</ProductTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={name} picture={images?.[0].formats.thumbnail.url} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          name={name}
          responsiveImage={images?.[0].url}
          documentId={documentId}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={name} picture={images?.[0].formats.thumbnail.url} />
        </div>
      </div>
    </>
  );
}
