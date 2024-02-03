const deleteCard = (listIndex, cardIndex, setCards) => {
    setCards(prevCards => {
        const updatedCards = [...prevCards];
        updatedCards[listIndex].splice(cardIndex, 1);
        return updatedCards;
    });
};
  

export default deleteCard



  