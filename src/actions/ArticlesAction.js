import axios from 'axios';
const baseURL = "http://localhost:3000/api/";

export const loadArticles = () => async (dispatch) => {
    const articlesData = await axios.get(`${baseURL}articles`);
    dispatch({
        type: "FETCH_ARTICLES",
        payload: {
            articles: articlesData.data,
        },
    });
};