import { Label, Radio, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";

export default function TrueFalseEditor({ alternative, setAlternatives, type_answer }: { alternative: any[], setAlternatives: any, type_answer: string }) {
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(0);
  const [contents, setContents] = useState(()=>{
      if (alternative.length > 0 && type_answer == 'true_or_false'){
        const newAlternative = alternative.map((alt, index) => ({
          id: alt.id,
          content: alt.content ?? '',
          is_correct: alt.is_correct ?? true, // Short answers are typically correct
          alternative_order: alt.alternative_order ?? index,
          _destroy: false
        }))
        console.log(alternative)
        return [...newAlternative]
      }else{
        const newAlternative = alternative.map((alt, index) => ({
          id: alt.id,
          content: alt.content ?? '',
          is_correct: alt.is_correct ?? true, // Short answers are typically correct
          alternative_order: alt.alternative_order ?? index,
          _destroy: true
        }))
        const extraAlternatives = [
            { content: '', is_correct: true, _destroy: false },
            { content: '', is_correct: false, _destroy: false }
        ];
        return [...newAlternative, ...extraAlternatives]
      }
  }

  );

  // Atualiza alternativas sempre que conteúdo ou alternativa correta mudar
  useEffect(() => {
    const alternatives = contents.map((alt, index) => (
      {
      id: alt.id,
      is_correct: selectedCorrectIndex === index,
      content: alt.content,
      alternative_order: index,
      _destroy: alt._destroy
     }
    ));
    setAlternatives(alternatives);
    console.log(alternatives)
  }, [contents, selectedCorrectIndex]);

  const handleContentChange = (index, value) => {
    const updated = [...contents];
    updated[index].content = value;
    setContents(updated);

  };

  useEffect(() => {

  })

  return (
    <div className="flex flex-col gap-4">
      {contents.map((alt, index) => (
        !alt._destroy && (
        <div key={index}>
          <div className="flex items-center gap-2">
            <Radio
              onChange={(e) => setSelectedCorrectIndex(index)}
              checked={alt.is_correct}
              defaultValue={index}
              name="alternative"
              id={`order_${index}`}
            />
            <Label htmlFor={`order_${index}`} className="flex">
              Set as correct
            </Label>
          </div>
          <TextInput
            className="pb-2"
            type="text"
            defaultValue={alt.content || (index === 0 ? 'False' : 'True')}
            onChange={(e) => handleContentChange(index, e.target.value)}
            placeholder={`Alternative ${index + 1}`}
          />
        </div>
      )))}
    </div>
  );
}
