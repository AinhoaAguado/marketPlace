

async function CardEditForm (cardId){

  
    let result = await fetch(`http://localhost:3000/courses/${cardId}`);
    let courseCard = await result.json();
    return courseCard;
}
    
export default CardEditForm;