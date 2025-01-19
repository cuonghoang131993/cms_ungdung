import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  name,
  coverImage,
  summary,
  documentId,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          documentId={documentId}
          name={name}
          responsiveImage={coverImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/products/${documentId}`} className="hover:underline">
          {name}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{summary}</p>
    </div>
  );
}
