import { ArticleProvider } from "./context/articleContext";
import HomeScreen from "./home/home";

export default function Home() {
  return (
    <ArticleProvider>
      <HomeScreen />
    </ArticleProvider>
  );
}
