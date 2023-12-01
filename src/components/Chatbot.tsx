// Import necessary Ionic and React components
import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonInput, IonButton } from '@ionic/react';

interface Message {
  id: number;
  text: string;
  type: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [messageIdCounter, setMessageIdCounter] = useState<number>(1);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Update the user messages
    setMessages([...messages, { id: messageIdCounter, text: inputText, type: 'user' }]);
    setMessageIdCounter((prevCounter) => prevCounter + 1);
    setInputText('');

    // Simulate chatbot response (you can replace this with actual logic)
    setTimeout(() => {
      setMessages([
        ...messages,
        { id: messageIdCounter + 1, text: 'This is a sample response from the chatbot.', type: 'bot' },
      ]);
      setMessageIdCounter((prevCounter) => prevCounter + 2);
    }, 1000);
    console.log(messages);
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {messages.map((message) => (
            <>
            <IonItem key={message.id} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
              {message.text}
            </IonItem>
            </>
          ))}
        </IonList>

        <IonItem>
          <IonInput
            placeholder="Type your message here..."
            value={inputText}
            onIonChange={(e) => setInputText(e.detail.value!)}
          />
          <IonButton expand="full" onClick={handleSendMessage}>
            Send
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Chatbot;
