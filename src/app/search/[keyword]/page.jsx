import { getAnimeResponse } from "@/libs/api-libs";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  console.log(decodedKeyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`pencarian untuk ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
