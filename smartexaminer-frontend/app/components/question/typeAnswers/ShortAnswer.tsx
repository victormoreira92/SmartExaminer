import { Button, TextInput } from "flowbite-react";
import { PlusIcon, Trash, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ShortAnswer({setAlternatives}){
    const [formValues, setFormValues] = useState([{ name: ""}])
    const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(0);
    const [contents, setContents] = useState(['']);

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    
    const addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
      }
    
    const removeFormFields = (i: number) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    useEffect(() => {
        const alternatives = contents.map((content, index) => ({
          is_correct: true,
          content: content,
          alternative_order: index
        }));
        setAlternatives(alternatives);
        console.log(alternatives)
      }, [contents, selectedCorrectIndex]);

    const handleContentChange = (index: number, value: string) => {
    const updated = [...contents];
    updated[index] = value;
    setContents(updated);
  };

  return (
    <div className="flex flex-col gap-2">
    {formValues.map((element, index) => (
      <div className="flex py-1 gap-2" key={index}>
        <TextInput type="text" name="alternative" onChange={(e) => handleContentChange(index, e.target.value)} />
          {
            index ? 
              <Button onClick={() => removeFormFields(index)} className="bg-transparent hover:bg-transparent">
                <Trash2Icon className="text-gray-600 hover:text-red-500" />
              </Button>
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