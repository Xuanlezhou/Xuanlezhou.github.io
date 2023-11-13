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
    <div className={`flex ${reversed ? "flex-row-reverse" : "flex-row"} justify-center p-12`}>
      <div className="relative w-96 px-12">
        <Image
          src={imagePath}
          alt="Logo"
          fill={true}
        />
      </div>
      <div className="flex flex-col relative w-128 justify-center gap-y-10 px-12">
        <div className="text-2xl">{number}</div>
        <div className="text-2xl">{title}</div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}
