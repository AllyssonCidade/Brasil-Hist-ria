import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Videos from "../components/Videos";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Articles />
      <Videos />
      <Newsletter />
    </>
  );
}
