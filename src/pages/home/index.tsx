
import CardsComponent from '../../components/card/CardsComponent'

function HomePage() {
  return (
    <>
    <h1 className='text-center font-extrabold font-serif purple-950 mt-8 text-purple-950 text-3xl'>Perfumes</h1>
    <div className="container mx-auto mt-10">
      <CardsComponent />
    </div>
    </>
  );
}

export default HomePage;