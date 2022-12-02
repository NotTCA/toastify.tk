import Link from "next/link";
import { Channel as ChannelType } from "../lib/channels";

export default function Channel({
  avatar,
  handle,
  type,
}: ChannelType & { type?: "default" | "small" }) {
  return type === "default" || !type ? (
    <Link
      href={`https://youtube.com/${handle}`}
      className="text-4xl font-bold flex flex-row items-center"
    >
      <img
        src={avatar}
        alt={handle.split("@")[1]}
        width={55}
        className="rounded-full mr-3"
      />
      <h1 className="hover:underline">{handle}</h1>
    </Link>
  ) : (
    <Link
      href={`https://youtube.com/${handle}`}
      className="text-3xl font-bold flex flex-row items-center"
    >
      <img
        src={avatar}
        alt={handle.split("@")[1]}
        width={45}
        className="rounded-full mr-3"
      />
      <h1 className="hover:underline">{handle}</h1>
    </Link>
  );
}
