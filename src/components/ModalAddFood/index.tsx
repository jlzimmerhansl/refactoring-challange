import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Input from '../Input';
import { FoodType } from '../../types';
import { FormHandles } from '@unform/core';
import { Modal } from '../Modal';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodType) => Promise<void>;
}

export function ModalAddFood ({ 
  isOpen, 
  setIsOpen, 
  handleAddFood 
}: ModalAddFoodProps) {
  
  const formRef = useRef({} as FormHandles)

  const handleSubmit = async (data: FoodType) => {
    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

