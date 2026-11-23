import OpenAI from "openai";
import { GROQ_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: GROQ_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true, 
});

export default openai
