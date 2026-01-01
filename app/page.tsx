import Hello from "./components/hello";
import hello from "./components/hello"

const page = () => {
  console.log('what type of component am I?');

  return (
    <main>
    <div className="text-5xl underline">Weclome to Next.JS</div>
    <Hello />
    </main>
  )
}

export default page
