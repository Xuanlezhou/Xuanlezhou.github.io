import Link from "next/link";

// Numbered section header: "01. About me" with a hairline running to the edge.
export default function SectionTitle({
  n,
  title,
  id,
  href,
  hrefLabel,
}: {
  n?: string;
  title: string;
  id?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div id={id} className="mb-8 flex items-center gap-4">
      <h2 className="flex shrink-0 items-baseline gap-2 text-[20px] font-medium tracking-tight text-ink">
        {n && <span className="text-[14px] font-normal text-mint-dark tnum">{n}.</span>}
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
      {href && (
        <Link href={href} className="shrink-0 text-[13px] text-muted transition-colors hover:text-mint-dark">
          {hrefLabel ?? "View all"} →
        </Link>
      )}
    </div>
  );
}
