import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-row justify-center mt-2 mb-12">
        <div className="flex flex-col relative aspect-square bg-blue-100 w-1/3 justify-center gap-y-10 px-10">
          <div className="text-center uppercase text-4xl">Get In Touch</div>
          <div className="text-center">I love answering questions!</div>
          <div className="leading-relaxed">
            Email: <Link href="mailto:xuanlezhou@gmail.com">xuanlezhou@gmail.com</Link>
            <br />
            LinkedIn: <Link href="linkedin.com/in/xuanlezhou">linkedin.com/in/xuanlezhou</Link>
          </div>
          <div className="leading-relaxed">
            <p>Phone:</p>
            <p>SG: +65 9865 0839</p>
            <p>US: +1 408 329 8642</p>
          </div>
        </div>
        <div className="relative aspect-square w-1/3">
          <Image
            src="/photos/contact.jpg"
            alt="Logo"
            fill={true}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
