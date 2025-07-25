import { Label, Radio, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";

export default function TrueFalseEditor({ alternative, setAlternatives }: { alternative: any[], setAlternatives: any }) {
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(0);
  const [contents, setContents] = useState(
    alternative.map((alt, index) => ({
      id: alt.id,
      is_correct: alt.is_correct,
      content: alt.content,
    }))
  );

  // Atualiza alternativas sempre que conteúdo ou alternativa correta mudar
  useEffect(() => {
    const alternatives = contents.map((alt, index) => (
      {
      id: alt.id,
      is_correct: selectedCorrectIndex === index,
      content: alt.content,
      alternative_order: index
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
      ))}
    </div>
  );
}
