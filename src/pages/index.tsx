import { serverNextClientArchitecture } from "@caucolum/next-client-architecture"

export default function Home() {
  const response = serverNextClientArchitecture.requestc();
  console.log(response);
  return <div>
    hello home
  </div>
}