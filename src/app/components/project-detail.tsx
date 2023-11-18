interface DetailInfo {
  title: string;
  location: string;
  dateRange: string;
  content: string;
  supplement?: string;
}

export default function ProjectDetail({ title, location, dateRange, content, supplement = "" }: DetailInfo) {
  return (
    <div className="flex flex-col justify-center mx-20 my-12">
      <div className="text-2xl">
        {title}
      </div>
      <div className="font-semibold">
        {location}
      </div>
      <div className="italic mt-1 ">
        {dateRange}
      </div>
      <div className="font-semibold">
      ______
      </div>
      <div className="flex flex-col justify-center mx-20 mt-8" >
        {content}
      </div>
      <div className="flex flex-col justify-center mx-20 italic mt-5 text-sm">
        {supplement}
      </div>
    </div>
  );
}
