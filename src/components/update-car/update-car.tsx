import { Dialog } from '@mui/material';
import { FC, useRef, useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import UpdateName from './name/name';
import CloseButton from '../close-button/close-button';
import { UpdateCarProps } from './types';
import styles from './update-car.module.scss';
import ApplyButton from './apply-button/apply-button';
import CustomButton from '../button/button';
import UpdateColor from './color/color';

const UpdateCar: FC<UpdateCarProps> = ({
  type,
  onApply,
  initialData = { name: '', color: '#ffffff' },
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(initialData.name);
  const [color, setColor] = useState(initialData.color);
  const formRef = useRef<HTMLFormElement>(null);

  const handleClickOpen = () => {
    setColor('#ffffff'); // temp
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (inputName: string) => {
    setName(inputName);
  };

  const handleChangeColor = (inputColor: string) => {
    setColor(inputColor);
  };

  const handleApply = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef?.current?.reportValidity()) {
      onApply(name, color);
      handleClose();
    }
  };

  return (
    <div className={styles.wrapper}>
      <CustomButton
        variant='contained'
        onClick={handleClickOpen}
        content={
          type === 'create' ? 'Create car' : <BuildIcon fontSize='small' />
        }
      />
      <Dialog className={styles.dialog} open={open} onClose={handleClose}>
        <CloseButton onClose={handleClose} />
        <form className={styles.content} ref={formRef} onSubmit={handleApply}>
          <h3>Car params</h3>
          <div className={styles.list}>
            <div className={styles.item}>
              <UpdateName
                onChange={handleChangeName}
                initialName={initialData?.name}
              />
            </div>
            <div className={styles.item}>
              <UpdateColor
                onChange={handleChangeColor}
                initialColor={initialData?.color}
              />
            </div>
          </div>
          <ApplyButton />
        </form>
      </Dialog>
    </div>
  );
};

export default UpdateCar;
