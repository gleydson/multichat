import { BASE_URL } from "@/lib/utils";
import parse from "node-html-parser";

async function getLiveId(handle: string) {
	const html = await fetch(`https://www.youtube.com/${handle}/live`, {
		cache: "no-store",
	}).then((v) => v.text());

	const doc = parse(html);

	const linkElement = doc.querySelector('link[rel="canonical"]');
	if (!linkElement) return;

	const url = linkElement.getAttribute("href");
	console.log('url', url);
	if (!url) return;

	const videoIdMatch = url.match(/v=([^&]+)/);
	console.log('videoIdMatch', videoIdMatch);
	if (!videoIdMatch?.[1]) return;

	return videoIdMatch[1];
}

export async function YoutubeChat({ handle }: { handle: string }) {
	const liveId = await getLiveId(handle);

	console.log('liveId', liveId);

	const { hostname } = new URL(BASE_URL);

	if (!liveId) {
		return "No live stream found";
	}

	return (
		<iframe
			src={`https://www.youtube.com/live_chat?is_popout=1&v=${liveId}`}
			// src={`https://www.youtube.com/live_chat?v=${liveId}&embed_domain=${hostname}`}
			style={{ width: "100%", minHeight: "100%", border: "none", flex: 1 }}
		/>
	);
}
