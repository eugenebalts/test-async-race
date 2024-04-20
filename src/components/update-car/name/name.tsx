import { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import styles from './name.module.scss';
import updateStyles from '../update-car.module.scss';
import { UpdateNameProps } from './types';

const UpdateName: FC<UpdateNameProps> = ({ onChange, initialName = '' }) => {
  const [name, setName] = useState<string>(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    onChange(name);
  }, [name]);

  return (
    <div className={`${styles.wrapper} ${updateStyles.item__wrapper}`}>
      <h4>Car marque</h4>
      <TextField
        id='outlined-basic'
        label='Type marque'
        variant='outlined'
        onChange={handleChange}
        color='primary'
        value={name}
      />
    </div>
  );
};

export default UpdateName;
