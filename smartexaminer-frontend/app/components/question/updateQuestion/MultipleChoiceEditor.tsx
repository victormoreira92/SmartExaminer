import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import EditorQuestion from "../createQuestion/EditorQuestion";

export default function MultipleChoiceEditor({alternatives, setAlternatives}){
  const [formValues, setFormValues] = useState([{alternatives}]);
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(new Array(1).fill(false));
  const [contents, setContents] = useState([]);
  let count = 0

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    const addFormFields = () => {
      setFormValues([...formValues, {content: '', index: count++}]);
      setSelectedCorrectIndex(oldArray => [...oldArray, false]);    
    };
    
    const removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    

    
      // Atualiza alternativas sempre que conteúdo ou alternativa correta mudar
      useEffect(() => {
        const alternatives = contents.map((content, index) => ({
          is_correct: selectedCorrectIndex[index],
          content: content,
          alternative_order: index
        })).slice(1);
        console.log(alternatives)
        setAlternatives(alternatives);
      }, [contents, selectedCorrectIndex]);
    
      const handleContentChange = (index, value) => {
        const updated = [...contents];
        updated[index] = value;
        setContents(updated);
      };

     const handleCheckbox = (position: number) => {
      const updated = selectedCorrectIndex.map((value, index) => index === position ? !value : value);
      setSelectedCorrectIndex(updated);
    };

    

  return (
    <div className="flex flex-col gap-2">
    {formValues.map((element, index) => (
      <div className="flex py-1 gap-2" key={index}>        {
          index ? 
          <div className="flex flex-col justify-between">
            <div className="flex w-full gap-2 py-2">
              <div><span className="font-bold  text-[14px] uppercase text-gray border rounded-full p-2">
              {String.fromCharCode(96 + index)}.
              </span></div>
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-1">
                  <Checkbox      
                    name="correct"
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
                content={contents[index]} // conteúdo atual
                onContentChange={(value) => handleContentChange(index, value)}
                />
              </div>
          </div>
              
            
          </div>
          
          : null
        }
       </div>
          ))}
          <Button  onClick={() => addFormFields()} className="bg-gray-400 text-black w-1/2 hover:bg-gray-500">
            <PlusIcon className="text-gray-600 hover:text-gray-800" /> Add Another Answer
          </Button>
    </div>
)
}
