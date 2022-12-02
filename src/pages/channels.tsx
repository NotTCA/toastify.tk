import { NextSeo } from "next-seo";
import Channel from "../components/Channel";
import { channels, featuredChannels } from "../lib/channels";

export default function ChannelList() {
  return (
    <>
      <NextSeo title="Channels" />
      <main className="bg-tca">
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
          {featuredChannels.map((channel) => (
            <Channel {...channel} />
          ))}
        </div>
        <div className="p-2" />
        <div className="w-64 h-[0.15rem] bg-black opacity-50 mx-2" />
        <div className="p-3" />
        <div className="flex flex-col items-center space-y-2">
          {channels.map((channel) => (
            <Channel {...channel} type="small" />
          ))}
        </div>
      </main>
    </>
  );
}
