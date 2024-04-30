type card = {
    image: string;
    title: string;
    id: number;
  };
  
  const cardsData: card[] = [
    {
      id: 1,
      image: require('../assets/images/black.png').default,
      title: 'black car',
    },
    {
      id: 2,
      image: require('../assets/images/blue.png').default,
      title: 'blue car',
    },
    {
      id: 3,
      image: require('../assets/images/gray.jpg').default,
      title: 'gray car',
    },
    {
      id: 4,
      image: require('../assets/images/red.png').default,
      title: 'red car',
    },
    {
      id: 5,
      image: require('../assets/images/silver.jpg').default,
      title: 'silver car',
    },
    {
      id: 6,
      image: require('../assets/images/yellow.png').default,
      title: 'yellow car',
    },
  ];
  
  export default cardsData;
  