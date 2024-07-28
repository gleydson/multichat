import { TwitchChat } from "@/components/business/twitch-chat";
import { YoutubeChat } from "@/components/business/youtube-chat";

export default function View({
  searchParams: { youtube, twitch }
}: { searchParams: { youtube?: string; twitch?: string } }) {

  return (
    <main className="w-full h-full min-h-screen flex">
      {twitch != null ? <TwitchChat handle={twitch} /> : null}
      {youtube != null ? <YoutubeChat handle={youtube} /> : null}
    </main>
  )
}