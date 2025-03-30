import { serverNextClientArchitecture, clientNextClientArchitecture } from '@caucolum/next-client-architecture';

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

interface HomePageProps {

}

export default function Home({  }: HomePageProps) {
  console.log('serverNextClientArchitecture: ', serverNextClientArchitecture.breed_hound_images());
  return <div>
    hello home 
  </div>
}