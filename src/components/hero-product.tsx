import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroProduct({ name, images, summary, documentId }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          name={name}
          responsiveImage={images?.[0].url}
          documentId={documentId}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/products/${documentId}`} className="hover:underline">
              {name}
            </Link>
          </h3>
          <div>
            <p className="text-lg leading-relaxed mb-4">{summary}</p>
            <Avatar name={images?.[0].formats.thumbnail.name} picture={images?.[0].formats.thumbnail.url} />
          </div>
        </div>
      </div>
    </section>
  );
}
