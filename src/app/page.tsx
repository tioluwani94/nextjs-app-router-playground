import { Button } from "~/components/ui/button";
import { stack } from "~/styled-system/patterns";

export default async function Home() {
  return (
    <section className={stack({ gap: "32px" })}>
      <Button size="xs">Hello world</Button>
    </section>
  );
}
