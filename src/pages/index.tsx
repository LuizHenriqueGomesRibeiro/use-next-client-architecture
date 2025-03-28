import { serverNextArchitecture } from "@caucolum/next-client-architecture"

export default function Home() {
  console.log(serverNextArchitecture.random_image());
  return <div>
    hello home
  </div>
}