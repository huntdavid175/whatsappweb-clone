import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { v4 as uuid } from "uuid";

// Function to add recipient to chat

const addRecipientToChat = async (
  chatId: string,
  recipientId: any,
  senderName: string,
  senderPhotoUrl: string,
  senderUserId: string
) => {
  const docRef = doc(db, "chats", recipientId);
  console.log(chatId, recipientId);
  const docSnap = await getDoc(docRef);

  console.log(chatId, recipientId);

  if (docSnap.exists()) {
    const currentChats = docSnap.data().chats;

    const alreadyExistChat = currentChats.find(
      (chat: any) => chat.chatId === chatId
    );

    if (alreadyExistChat) return;

    const updatedChats = [
      ...currentChats,
      {
        chatId,
        name: senderName,
        photoUrl: senderPhotoUrl,
        userId: senderUserId,
        lastMessage: "",
      },
    ];

    await updateDoc(docRef, { chats: updatedChats });
  } else {
    return;
  }
};

// Function to send messages

const sendMessage = async (
  chatId: any,
  accountOwnerId: string,
  message: string,
  recipientId: any,
  senderName: string,
  senderPhotoUrl: string,
  addRecipientToChatParams: any,
  resetForm: any
) => {
  const docRef = doc(db, "messages", chatId);
  const docSnap = await getDoc(docRef);
  const id = uuid();

  if (docSnap.exists()) {
    const currentMessages = docSnap.data().messages;
    const updatedMessages = [
      ...currentMessages,
      { id, accountOwnerId, message, forwarded: false, read: false },
    ];
    resetForm("");
    await updateDoc(docRef, { messages: updatedMessages });
    await addRecipientToChatParams(
      chatId,
      recipientId,
      senderName,
      senderPhotoUrl,
      accountOwnerId
    );
  } else {
    const newMessage = {
      id,
      accountOwnerId,
      message,
      forwarded: false,
      read: false,
    };
    resetForm("");

    await setDoc(docRef, { messages: newMessage });
    await addRecipientToChatParams(
      chatId,
      recipientId,
      senderName,
      senderPhotoUrl,
      accountOwnerId
    );
  }
};

export { addRecipientToChat, sendMessage };
