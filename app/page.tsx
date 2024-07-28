import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    'use server'

    const youtubeHandle = formData.get("youtube-handle") as string;
    const twitchHandle = formData.get("twitch-handle") as string;
    console.log({ youtubeHandle, twitchHandle });

    redirect(`/view?youtube=${youtubeHandle}&twitch=${twitchHandle}`);
  }

  return (
    <main className="w-full h-full min-h-screen flex items-center justify-center">
      <Card asChild className="w-[350px]">
        <form action={handleSubmit}>
          <CardHeader></CardHeader>
          <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="youtube-handle">YouTube Handle</Label>
              <Input id="youtube-handle" name="youtube-handle" type="text" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="twitch-handle">Twitch Handle</Label>
              <Input id="twitch-handle" name="twitch-handle" type="text" />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-end">
            <Button type="submit">Submit</Button>  
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
