import { FC, FormEvent, useRef, useState } from 'react';
import ApplyButton from './apply-button/apply-button';
import UpdateColor from './color/color';
import UpdateName from './name/name';
import { IUpdateFormProps } from './types';
import styles from './form.module.scss';

const UpdateForm: FC<IUpdateFormProps> = ({ initialData, onApply }) => {
  const [name, setName] = useState(initialData.name);
  const [color, setColor] = useState(initialData.color);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChangeName = (inputName: string) => {
    setName(inputName);
  };

  const handleChangeColor = (inputColor: string) => {
    setColor(inputColor);
  };

  const handleApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef?.current?.reportValidity()) {
      onApply({ name: name.trim(), color: color.trim() });
    }
  };

  return (
    <form className={styles.wrapper} ref={formRef} onSubmit={handleApply}>
      <h3>Car params</h3>
      <div className={styles.list}>
        <div className={styles.item}>
          <UpdateName onChange={handleChangeName} initialName={initialData.name} />
        </div>
        <div className={styles.item}>
          <UpdateColor onChange={handleChangeColor} initialColor={initialData.color} />
        </div>
      </div>
      <ApplyButton />
    </form>
  );
};

export default UpdateForm;
