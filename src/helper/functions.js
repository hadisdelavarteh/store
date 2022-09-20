const shorter = title => {
    const newTitle = title.split(" ");
    return `${newTitle[0]} ${newTitle[1]}`;
}

const selectedProduct = (state,id) =>{
    if(!!state.selectedItems.find(item => item.id === id))
      return true;
    else
        return false;
}

const oneOrGreater = (state,id) => {
  const index = state.selectedItems.findIndex(item => item.id === id); 
  if(index>=0){
    if(state.selectedItems[index].quantity === 1)
      return true;
    else if (state.selectedItems[index].quantity > 1)
      return false;
  }
  
}


const numberQuantity = (state, id) => {
  const index =  state.selectedItems.findIndex(item => item.id === id);
  if(index>=0)
    return state.selectedItems[index].quantity;
}
export {shorter, selectedProduct, numberQuantity, oneOrGreater};