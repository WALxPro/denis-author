export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-head" onClick={onToggle}>
        <h4>{question}</h4>
        <span className="accordion-icon">+</span>
      </div>
      <div className="accordion-body">
        <p>{answer}</p>
      </div>
    </div>
  )
}
