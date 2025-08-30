import Animelist from "@/components/Animelist"
import Header from "@/components/Animelist/Header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      <section>
      <Header title="paling populer" linkTitle="Lihat semua" linkHref="/populer"/>
      <Animelist api={topAnime}/>
      </section>
    </>
  )
}

export default Page
