import "./App.css";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const projectID = "8949aea5-73a7-4472-b2c3-a27f6f1cce57";
  return (
    <div className="app">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName="winder809"
        userSecret="marte"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
