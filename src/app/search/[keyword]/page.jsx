import Animelist from "@/components/Animelist"
import Header from "@/components/Animelist/Header"

const Page = async ({params}) => {

    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)
    console.log(decodedKeyword)

  const response = await fetch(`${process.env.
    NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)

    const searchAnime = await response.json()
    

  return (
    <>
      <section>
      <Header title={`pencarian untuk ${decodedKeyword}...`} />
      <Animelist api={searchAnime}/>
      </section>
    </>
  )
}

export default Page
