import cardsData from '../../constants/mock-data'

function CardsComponent() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cardsData.map((card) => (
        <div key={card.id} className="p-4 border rounded">
          <img src={card.image} alt={card.title} className="w-full h-32 object-cover mb-2" />
          <p className="text-lg font-semibold">{card.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CardsComponent;