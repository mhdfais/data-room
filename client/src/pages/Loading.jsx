import Header from "../components/Header"
import LoadingRabbit from "../components/LoadingRabbit"


const Loading = () => {
  return (
    <>
      <Header isLoggedIn={false} />

      <main className="flex h-[80vh] items-center justify-center">
        <LoadingRabbit />
      </main>
    </>
  )
}


export default Loading