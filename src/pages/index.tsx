import Image from "next/image";
import Social from "../components/Social";
import { FaYoutube, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const imgSize = 200;
  return (
    <main className="bg-tca">
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold text-6xl">Toastify</h1>
        <p className="mt-1">Front-end and Discord bot developer.</p>
        <div className="p-2" />
        <div className="flex flex-row">
          <Social icon={FaYoutube} link="https://youtube.com/@ToastifyDev" />
          <Social icon={FaTwitter} link="https://twitter.com/ToastifyDev" />
          <Social icon={FaGithub} link="https://github.com/ToastifyDev" />
          <Social icon={FaDiscord} link="/discord" />
          <Social icon={MdEmail} link="mailto:hey@toastify.tk" />
        </div>
      </div>
    </main>
  );
}
