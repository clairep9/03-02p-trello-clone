function createCard(listIndex, newCard, setCards) {
    setCards(prevCards => {
        const updatedCards = [...prevCards];
        updatedCards[listIndex].push(newCard);
        return updatedCards;
      });
  }

  export default createCard