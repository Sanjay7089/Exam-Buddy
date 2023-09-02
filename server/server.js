import * as dotenv from "dotenv";
import express from "express";
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // This is also the default, can be omitted
});

app.post("/ask", async (req, res) => {
  try {
    const {
      message,
      temperature,
      max_tokens,
      top_p,
      frequency_penalty,
      presence_penalty,
    } = req.body;
    let interviewerPrompt =
      "You are a job interview partner, assisting someone in preparing for their upcoming job interview. Your task is to simulate a realistic job interview experience.";
    const prompt = {
      role: "system",
      content: `${interviewerPrompt} Limit your responses to 3 sentences. Do not respond with lists or ask multiple questions at once. End every response with a question to keep the conversation going. You are interviewing a candidate for the following position: react Js Developer.`,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: prompt,
        },
        { role: "user", content: message },
      ],
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
    });

    res.status(200).send({
      bot: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
