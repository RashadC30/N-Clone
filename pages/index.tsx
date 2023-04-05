import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Navbar from "y/components/Navbar"
import Billboards from "y/components/Billboards"
import MovieList from "y/components/MovieList"
import useMovieList from "y/hooks/useMovieList"
import useFavorites from "y/hooks/useFavorites"
import InfoModal from '../components/InfoModal';
import useInfoModal from "y/hooks/useInfoModal"


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()
  const {isOpen, closeModal} = useInfoModal()

  return (
    <>
    <InfoModal visible={isOpen} onClose={closeModal}/>
    <Navbar />
    <Billboards />
    <div className="pb-40">
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="My List" data={favorites} />
    </div>
    </>
  )
}
