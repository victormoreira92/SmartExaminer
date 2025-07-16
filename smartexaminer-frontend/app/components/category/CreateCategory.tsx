import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import { createCategory } from "~/services/categoryService";

export default function CreateCategory(){
  const [openModal, setOpenModal] = useState(false);
  const [category_name, setCategory_name] = useState('');


  const onSubmitCategory = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!category_name) {
        return null;
      }
      const dataCategory = {
        category_name
      };
      createCategory(dataCategory);
      setCategory_name('');
      setOpenModal(false)
    };
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={(e) => onSubmitCategory(e)}>
        <ModalHeader>Create Ccategory</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
             <TextInput id="category_name" 
              type="text" 
              name="category_name"
              onChange={(e) => setCategory_name(e.target.value)}
              placeholder="email" required />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Create Category</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>

        </ModalFooter>
      </form>
      </Modal>
    </>
  )
}