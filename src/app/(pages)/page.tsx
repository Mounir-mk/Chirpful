import CustomTweetFeed from "../components/CustomTweetFeed";
import Tweet from "../components/Tweet/Tweet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3">
      <CustomTweetFeed />
      <section
        id="tweet-feed"
        className="flex flex-col overflow-y-auto w-full max-w-2xl mb-16"
      >
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Tweet key={i} />
          ))}
      </section>
    </main>
  );
}
