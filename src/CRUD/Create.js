function createCard(listIndex, newCard, setCards) {
    setCards(prevCards => {
        const updatedCards = [...prevCards];
        newCard.id=`${Date.now()}${Math.floor(Math.random() * 100)}`
        updatedCards[listIndex].push(newCard);
        return updatedCards;
      });
  }

  export default createCard