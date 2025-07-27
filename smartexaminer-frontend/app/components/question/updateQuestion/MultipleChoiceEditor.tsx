import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import EditorQuestion from "../createQuestion/EditorQuestion";

export default function MultipleChoiceEditor({alternatives, setAlternatives, type_answer}) {
  const [formValues, setFormValues] = useState(
    alternatives.length > 0 && type_answer == 'multi_choice'
      ? alternatives.map((alt, index) => ({
          id: alt.id,
          content: alt.content ?? '',
          is_correct: alt.is_correct ?? true, // Short answers are typically correct
          alternative_order: alt.alternative_order ?? index,
          _destroy: false
        }))
      : alternatives.map((alt, index) => ({
          id: alt.id,
          content: alt.content ?? '',
          is_correct: alt.is_correct ?? true, // Short answers are typically correct
          alternative_order: alt.alternative_order ?? index,
          _destroy: true
        }))
  );
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(new Array(1).fill(false));
  const [contents, setContents] = useState([]);
  let count = 0

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    const addFormFields = () => {
      setFormValues([...formValues, { content: '', is_correct: false, alternative_order: formValues.length, _destroy: false }]);
      //setSelectedCorrectIndex(oldArray => [...oldArray, false]);    
    };
    
    const removeFormFields = (index: number) => {
    if (formValues.length > 1) {
      const newFormValues = [...formValues];
      newFormValues[index]._destroy = true
      setFormValues(newFormValues);
    }
  };
    

    
      // Atualiza alternativas sempre que conteúdo ou alternativa correta mudar
   useEffect(() => {
    console.log(type_answer)
    // Include only non-destroyed alternatives or those marked for destruction
    const alternatives = formValues.map(({ id, content, is_correct, alternative_order, _destroy }) => ({
      ...(id && { id }), // Include id only if it exists
      content,
      is_correct,
      alternative_order,
      ...(_destroy && { _destroy }), // Include _destroy if true
    }));
    setAlternatives(alternatives);
    console.log(formValues)
  }, [formValues, setAlternatives]);
    
      const handleContentChange = (index, value) => {
        const updated = [...formValues];
        updated[index].content = value 
        setFormValues(updated)

      };

     const handleCheckbox = (position: number) => {
      const updatedCheck = [...formValues];
      updatedCheck[position].is_correct = !updatedCheck[position].is_correct 
      setFormValues(updatedCheck)
    };

    

  return (
    <div className="flex flex-col gap-2">
    {formValues.map((alt, index) => (
        !alt._destroy && (
      <div className="flex py-1 gap-2" key={index}>        {
          <div className="flex flex-col justify-between">
            <div className="flex w-full gap-2 py-2">
              <div><span className="font-bold  text-[14px] uppercase text-gray border rounded-full p-2">
              {String.fromCharCode(96 + index + 1)}
              </span></div>
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-1">
                  <Checkbox      
                    name="correct"
                    checked={alt.is_correct}
                    onChange={() => handleCheckbox(index) } 
                    value="true" />
                  <Label htmlFor={`correct-${index}`} className="flex">                  
                    Set as correct
                  </Label>
                  <Button onClick={() => removeFormFields(index)} className="bg-transparent hover:bg-transparent">
                    <Trash2Icon className="text-gray-600 hover:text-red-500" />
                  </Button>
                </div>
                <EditorQuestion 
                content={alt.content} // conteúdo atual
                onContentChange={(value) => handleContentChange(index, value)}
                />
              </div>
          </div>
              
            
          </div>
        }
       </div>
          )
      ))}
          <Button  onClick={() => addFormFields()} className="bg-gray-400 text-black w-1/2 hover:bg-gray-500">
            <PlusIcon className="text-gray-600 hover:text-gray-800" /> Add Another Answer
          </Button>
    </div>
)
}
