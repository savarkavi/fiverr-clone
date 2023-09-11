export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser"))?.userInfo?._id,
  title: "",
  category: "Programming/Tech",
  cover: "",
  images: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  delivery: 0,
  revision: 0,
  features: [],
  price: 0,
};

export const gigReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      };

    case "ADD_FEATURE":
      return {
        ...state,
        features: [...state.features, action.payload],
      };

    case "REMOVE_FEATURE":
      return {
        ...state,
        features: state.features.filter(
          (feature) => feature !== action.payload
        ),
      };

    case "RESET":
      return INITIAL_STATE;

    default:
      return state;
  }
};
