import { BASE_URL } from "@/lib/utils";

export async function TwitchChat({ handle }: { handle: string }) {
	const { hostname } = new URL(BASE_URL);

	return (
		<iframe
			id="twitch-chat-embed"
			src={`https://www.twitch.tv/embed/${handle}/chat?parent=${hostname}&darkpopout`}
			style={{ width: "100%", minHeight: "100%", border: "none", flex: 1 }}
		/>
	);
}
