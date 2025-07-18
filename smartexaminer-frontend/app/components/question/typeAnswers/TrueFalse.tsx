import { Checkbox, CheckIcon, Label, Radio, TextInput } from "flowbite-react"

export default function TrueFalse(){
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio value="true" name="alternative" id="true" />
        <Label htmlFor="accept" className="flex">
          Set as correct
        </Label>
      </div>
      <TextInput className="pb-2" type="text" id="disabledInput1" />

      <div className="flex items-center gap-2">
        <Radio value="false" name="alternative" id="fals" />
        <Label htmlFor="accept" className="flex">
          Set as correct
        </Label>
      </div>
      <TextInput type="text" id="disabledInput1" />
    </div>
  )
}