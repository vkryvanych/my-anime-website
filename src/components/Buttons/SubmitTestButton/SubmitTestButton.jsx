import './SubmitTestButton.css';

function SubmitTestButton({ onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="get-rec-button"  
    >
      Отримати рекомендацію
    </button>
  );
}

export default SubmitTestButton;