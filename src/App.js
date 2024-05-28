import logo from './logowhats.png';
import './App.css';

function App() {
  return (
    <div>
      <a href="https://wa.me/+918142424331?text=hello buddy">
        <button class="whatsapp-button">
            <img src={logo} alt="WhatsApp Chat"/>
            Chat
        </button>
        <p>👆👆👆👆</p>
    </a>

    </div>
  );
}

export default App;
