import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 4)

  

  return (
    <>
      <section>
        <Header
          title="paling populer"
          linkTitle="Lihat semua"
          linkHref="/populer"
        />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header
          title="REKOMENDASI"
        />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
