import Navbar from "../components/navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-row justify-center items-center">
        <div className="bg-blue-100 h-96 w-5/12">
            <div className="text-center mt-6 text-3xl">GET IN TOUCH</div>
        </div>
        <div className="bg-red-100 h-96 w-5/12">
          yy
        </div>
      </div>

    </main>
  );
}
