import Link from "next/link";
import { IconType } from "react-icons";

export type SocialProps = {
  icon: IconType;
  link: string;
};

export default function Social({ icon: Icon, link }: SocialProps) {
  return (
    <Link
      href={link}
      className="text-3xl font-bold flex flex-row items-center transition-all duration-150 hover:opacity-60"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon className="mr-2" />
    </Link>
  );
}
