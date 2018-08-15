import { ADD_ARTICLE } from "../constants/action-types";
import { CHANGE_PAGE } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export const changePage = page => ({ type: CHANGE_PAGE, payload: page });