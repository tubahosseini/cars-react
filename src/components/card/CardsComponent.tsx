import cardsData from '../../constants/mock-data'

function CardsComponent() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cardsData.map((card) => (
        <div key={card.id} className="p-4 rounded">
          <img src={card.image} alt={card.title} className="w-48 mb-2 bg-center" />
          <p className="text-lg font-semibold text-center">{card.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CardsComponent;
