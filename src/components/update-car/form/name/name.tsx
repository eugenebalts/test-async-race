import { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { UpdateNameProps } from './types';
import styles from './name.module.scss';

const UpdateName: FC<UpdateNameProps> = ({ onChange, initialName }) => {
  const [name, setName] = useState<string>(initialName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    onChange(name);
  }, [name]);

  return (
    <>
      <h4>Car marque</h4>
      <TextField
        className={styles.content}
        id='outlined-basic'
        label='Type marque'
        variant='outlined'
        onChange={handleChange}
        color='primary'
        value={name}
        required
      />
    </>
  );
};

export default UpdateName;
