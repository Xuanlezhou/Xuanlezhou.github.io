interface DetailInfo {
  title: string;
  location: string;
  dateRange: string;
  content: string;
  supplement?: string;
}

export default function ProjectDetail({ title, location, dateRange, content, supplement = "" }: DetailInfo) {
  return (
    <div className="flex flex-col justify-center mx-48 my-12">
      <div className="text-2xl">
        {title}
      </div>
      <div className="font-semibold">
        {location}
      </div>
      <div className="italic">
        {dateRange}
      </div>
      <div>
        {content}
      </div>
      <div className="italic">
        {supplement}
      </div>
    </div>
  );
}
