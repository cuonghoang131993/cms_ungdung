import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { BASE_URL } from "@/lib/constants";

export default function CoverImage({ name, responsiveImage, documentId }) {
  const image = (
    <Image
      src={`${BASE_URL}${responsiveImage}`}
      width={180}
      height={180}
      alt={name}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": documentId,
      })}
    />
  );
  return (
    <div className="sm:mx-0 flex items-center p-4 pb-0">
      {documentId ? (
        <Link href={`/products/${documentId}`} aria-label={name}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
