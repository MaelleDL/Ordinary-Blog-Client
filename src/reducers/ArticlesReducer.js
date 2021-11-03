const initState = {
    all:[],
}

const articlesReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_ARTICLES":
            return {
                ...state,
                all: action.payload.articles,
            };
        default:
            return { ...state };
    };
};

export default articlesReducer;