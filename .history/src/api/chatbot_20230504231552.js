const fs = require('fs');
const path = require('path');

const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = "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"
const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);


const CONVERSATION_FILE_PATH = path.join(__dirname + '/../conversation.txt');

async function chatbot(question) {
  var respuesta = "";
  var conversation = ""//await getConversation();

  conversation += "\nHumano:" + question + "\nBesty:";

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: conversation,
    temperature: 0.9,
    max_tokens: 400,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
  });

  respuesta = response.data.choices[0].text;
  conversation += respuesta;

  //await saveConversation(conversation);

  console.log(respuesta)
  return respuesta;
}

async function getConversation() {
  let conversation = "";

  try {
    conversation = await fs.promises.readFile(CONVERSATION_FILE_PATH, 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist yet, return an empty string
      return "";
    }
    throw error;
  }

  return conversation;
}

async function saveConversation(conversation) {
  let conversationLines = conversation.trim().split('\n');


  // Join the lines and save to the file
  const newConversation = conversationLines.join('\n');
  await fs.promises.writeFile(CONVERSATION_FILE_PATH, newConversation);
}

module.exports = chatbot;