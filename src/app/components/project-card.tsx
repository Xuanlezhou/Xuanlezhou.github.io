import Image from "next/image";

interface CardInfo {
  number: string;
  title: string;
  description: string;
  imagePath: string;
  reversed?: boolean;
}

export default function ProjectCard({ number, title, description, imagePath, reversed = false }: CardInfo) {
  return (
    <div className={`flex ${reversed ? "flex-row-reverse" : "flex-row"} justify-center mt-2 mb-12`}>
      <div className="relative aspect-square w-1/3">
        <Image
          src={imagePath}
          alt="Logo"
          fill={true}
        />
      </div>
      <div className="flex flex-col relative aspect-square bg-blue-100 w-1/3 justify-center gap-y-10 px-10">
        <div className="uppercase text-4xl">{number}</div>
        <div className="uppercase text-4xl">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}
