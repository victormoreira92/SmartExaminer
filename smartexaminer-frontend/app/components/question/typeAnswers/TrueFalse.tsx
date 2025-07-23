import { Label, Radio, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";

export default function TrueFalse({ setAlternatives }) {
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(0);
  const [contents, setContents] = useState(['', '']);

  // Atualiza alternativas sempre que conteúdo ou alternativa correta mudar
  useEffect(() => {
    const alternatives = contents.map((content, index) => ({
      is_correct: selectedCorrectIndex === index,
      content: content,
      alternative_order: index
    }));
    setAlternatives(alternatives);
    console.log(alternatives)
  }, [contents, selectedCorrectIndex]);

  const handleContentChange = (index, value) => {
    const updated = [...contents];
    updated[index] = value;
    setContents(updated);
  };

  return (
    <div className="flex flex-col gap-4">
      {[0, 1].map((index) => (
        <div key={index}>
          <div className="flex items-center gap-2">
            <Radio
              onChange={(e) => setSelectedCorrectIndex(index)}
              checked={selectedCorrectIndex === index}
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
            value={contents[index] || (index === 0 ? 'False' : 'True')}
            onChange={(e) => handleContentChange(index, e.target.value)}
            placeholder={`Alternative ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
