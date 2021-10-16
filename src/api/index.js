import axios from "axios";
import { API_ENDPOINT, TABLE } from "../constants/index";

export const getUrl = ({ amount, category, difficulty }) => {
  return `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${TABLE[category]}&type=multiple`;
};

export const fetchQuestions = async (url, setError) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    setError(true);
    console.log(error);
  }
};
