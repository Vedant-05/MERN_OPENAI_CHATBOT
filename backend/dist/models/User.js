import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: { type: String, default: randomUUID() }, //randomUUid allots id
    role: { type: String, required: true, },
    content: { type: String, required: true }
});
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, //unique is only used for search optimization
    password: { type: String, required: true },
    chats: [chatSchema],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map