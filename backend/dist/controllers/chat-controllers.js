import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const generateChatCompletion = async (req, res, next) => {
    try {
        const { message } = req.body;
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not registered or token malfunctioned" });
        }
        //grab all chats of user
        const chats = user.chats.map(({ role, content }) => ({
            role,
            content,
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        //send all chats with new one to openai api
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        //get new response
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};
//# sourceMappingURL=chat-controllers.js.map