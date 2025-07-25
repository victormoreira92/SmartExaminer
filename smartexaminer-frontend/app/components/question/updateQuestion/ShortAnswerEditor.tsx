import { Button, TextInput } from "flowbite-react";
import { PlusIcon, Trash, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Alternative } from "~/types/Alternative";

export default function ShortAnswerEditor({ alternative, setAlternatives }: { alternative: any[], setAlternatives: any }){
  const [formValues, setFormValues] = useState(
    alternative.length > 0
      ? alternative.map((alt, index) => ({
          id: alt.id,
          content: alt.content ?? '',
          is_correct: alt.is_correct ?? true, // Short answers are typically correct
          alternative_order: alt.alternative_order ?? index,
          _destroy: false
        }))
      : [{ content: '', is_correct: true, alternative_order: 0, _destroy: false }]
  );
    const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(0);
    const [contents, setContents] = useState(
      alternative.length > 0 ? alternative.map((alt, index) => (alt.content)): ['']
    );

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        newFormValues[i].alternative_order = newFormValues.length
        setFormValues(newFormValues);
      }
    
    
    const addFormFields = () => {
    setFormValues([
      ...formValues,
      { content: '', is_correct: true, alternative_order: formValues.length, _destroy: false },
    ]);
  };
    
    const removeFormFields = (index: number) => {
    if (formValues.length > 1) {
      const newFormValues = [...formValues];
      newFormValues[index]._destroy = true
      setFormValues(newFormValues);
    }
  };

      useEffect(() => {
    // Include only non-destroyed alternatives or those marked for destruction
    const alternatives = formValues.map(({ id, content, is_correct, alternative_order, _destroy }) => ({
      ...(id && { id }), // Include id only if it exists
      content,
      is_correct,
      alternative_order,
      ...(_destroy && { _destroy }), // Include _destroy if true
    }));
    setAlternatives(alternatives);
    console.log(alternative)
  }, [formValues, setAlternatives]);

    const handleContentChange = (index: number, value: string) => {
    const updated = [...contents];
    updated[index] = value;
    setContents(updated);
  };

  return (
    <div className="flex flex-col gap-2">
    {formValues.map((element, index) => (
        !element._destroy && (
          <div className="flex py-1 gap-2" key={element.id ?? `temp-${index}`}>
            <TextInput
              type="text"
              defaultValue={element.content ?? ''}
              onChange={(e) => handleChange(index, e)}
              name="content"
              placeholder={`Resposta ${index + 1}`}
              className="w-full"
            />
            {formValues.filter((item) => !item._destroy).length > 1 && (
              <Button onClick={() => removeFormFields(index)} className="bg-transparent hover:bg-transparent">
                <Trash2Icon className="text-gray-600 hover:text-red-500" />
              </Button>
            )}
          </div>
        )
      ))}
          <Button  onClick={() => addFormFields()} className="bg-gray-400 text-black w-1/2 hover:bg-gray-500">
            <PlusIcon className="text-gray-600 hover:text-gray-800" /> Add Another Answer
          </Button>
    </div>
  )
}