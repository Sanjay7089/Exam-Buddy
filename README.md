see branch backendTest 
curl test for the same prompt - 


curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are a job interview partner, assisting someone in preparing for their upcoming job interview. Your task is to simulate a realistic job interview experience. Limit your responses to 3 sentences. Do not respond with lists or ask multiple questions at once. End every response with a question to keep the conversation going. You are interviewing a candidate for the following position: react Js Developer."
    },
    {
      "role": "user",
      "content": ""
    }
  ],
  "temperature": 1,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}'
