import Image from "next/image";
import Social from "../components/Social";
import { FaYoutube, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const imgSize = 200;
  return (
    <main className="bg-tca">
      <Image
        src="/toaster.png"
        alt="toaster"
        width={imgSize}
        height={imgSize}
        priority
      />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center space-x-3 space-y-2 md:space-y-1">
        <Social
          icon={FaYoutube}
          username="@ToastifyDev"
          link="https://youtube.com/@ToastifyDev"
        />
        <Social
          icon={FaTwitter}
          username="@ToastifyDev"
          link="https://twitter.com/ToastifyDev"
        />
        <Social
          icon={FaGithub}
          username="@ToastifyDev"
          link="https://github.com/ToastifyDev"
        />
        <Social icon={FaDiscord} username="/discord" link="/discord" />
        <Social
          icon={MdEmail}
          username="hey@toastify.tk"
          link="mailto:hey@toastify.tk"
          className="md:col-span-2"
        />
      </div>
    </main>
  );
}
