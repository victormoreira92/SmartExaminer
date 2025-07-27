import { useState } from "react";

export default function EssayAnswerEditor({alternatives, type_answer}){
  const [formValues, setFormValues] = useState(
      alternatives.length > 0 && type_answer == 'essay_answer'
        ? alternatives
        : alternatives.map((alt, index) => ({
            id: alt.id,
            content: alt.content ?? '',
            is_correct: alt.is_correct ?? true, // Short answers are typically correct
            alternative_order: alt.alternative_order ?? index,
            _destroy: true
          }))
    );
  return (
    <>
      EssayAnswer
    </>
  )
}