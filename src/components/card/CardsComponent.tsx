import cardsData from '../../constants/mock-data'

function CardsComponent() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center place-items-center">
      {cardsData.map((card) => (
        <div key={card.id} className="p-4 rounded text-center">
          <img src={card.image} alt={card.title} className="w-48 mb-2 bg-center" />
          <p className="text-lg font-semibold">{card.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CardsComponent;
