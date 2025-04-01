import { BreedHoundImagesDataProps, nextArchitectureClient, nextArchitectureServer } from "@/api";

export const getServerSideProps = async () => {
  const images = await nextArchitectureServer.breed_hound_images();

  return {
    props: {
      images,
    },
  }
}

interface HomePageProps {
  images: BreedHoundImagesDataProps,
}

export default function Home({ images }: HomePageProps) {
  const { data, makeRequest, isLoading } = nextArchitectureClient.breeds_image_random();
  console.log(nextArchitectureClient.breeds_image_random);
  return <div>
    {data && <img src={data.message} title="Imagem gerada"/>}
    {isLoading ? 'carregando....' : 'carregado'}
    <button onClick={() => makeRequest()} className="bg-red-400 rounded-3xl">Make request</button>
    hello home 
    <div className="flex flex-wrap">
      {images.message.map(element => <div>
        <img src={element} alt="" width={50} height={50} />
      </div>)}
    </div>
  </div>
}