interface DetailInfo {
  title: string;
  location: string;
  dateRange: string;
  content: string;
  supplement?: string;
}

export default function ProjectDetail({ title, location, dateRange, content, supplement = "" }: DetailInfo) {
  return (
    <div className="">
      <div>
        {title}
      </div>
      <div>
        {location}
      </div>
      <div>
        {dateRange}
      </div>
      <div>
        {content}
      </div>
      <div>
        {supplement}
      </div>
    </div>
  );
}
