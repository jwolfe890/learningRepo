const initialState = {
    name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
    return { name: action.name}
    default:
      return state;
  }
};





