import React, { Dispatch, FC, SetStateAction } from 'react';
import { Form } from '@/components/Form/Form';

type InputModalProps = {
  open: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const InputModal: FC<InputModalProps> = ({ open, setIsOpen }) => {
  return (
    <dialog id="input-modal" className="modal modal-middle" open={open}>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <Form />
        <div className="modal-action">
          <button className="btn btn-primary max-w-xs" type="submit">
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};
