const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "sk-proj-w0NrzKLiDKhs4zNNBHoMT3BlbkFJePByZgviAy4rguumXVtV" // here the api key should be generated by the individual who will be using this.
});
const openFun = async () => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": "Give a sample react code for website homepage"}],
        max_tokens: 100
    });
    console.log(chatCompletion.choices[0].message.content);
}
