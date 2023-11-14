import Image from "next/image";
import Link from "next/link";

interface CardInfo {
  number: string;
  title: string;
  description: string;
  imagePath: string;
  detailLink: string;
  reversed?: boolean;
}

export default function ProjectCard({ number, title, description, imagePath, detailLink, reversed = false }: CardInfo) {
  return (
    <div className={`flex ${reversed ? "flex-row-reverse" : "flex-row"} justify-center p-12`}>
      <div className="relative w-96 px-12">
        <Link href={detailLink}>
          <Image
            src={imagePath}
            alt="Logo"
            fill={true}
          />
        </Link>
      </div>
      <div className="flex flex-col relative w-128 justify-center gap-y-10 px-12">
        <div className="text-2xl"><Link href={detailLink}>{number}</Link></div>
        <div className="text-2xl"><Link href={detailLink}>{title}</Link></div>
        <div className=""><Link href={detailLink}>{description}</Link></div>
      </div>
    </div>
  );
}
