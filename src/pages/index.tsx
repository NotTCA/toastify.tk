import Image from "next/image";
import Social from "../components/Social";
import { FaYoutube, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

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
          username="@NotTCA"
          link="https://github.com/NotTCA"
        />
        <Social icon={FaDiscord} username="/discord" link="/discord" />
      </div>
    </main>
  );
}
