import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <div className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
