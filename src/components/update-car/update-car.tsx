import { FC, useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { IUpdateCarProps } from './types';
import CustomButton from '../button/button';
import CustomDialog from '../dialog/dialog';
import { DEFAULT_UPDATE_CAR_DATA } from '../../constants';
import UpdateForm from './form/form';
import { CreateCarDto } from '../../services/endpoints/garage/types';

const UpdateCar: FC<IUpdateCarProps> = ({
  type,
  onApply,
  initialData = DEFAULT_UPDATE_CAR_DATA,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = (updatedCarData: CreateCarDto) => {
    onApply(updatedCarData);
    handleClose();
  };

  return (
    <>
      <CustomButton
        variant={type === 'create' ? 'contained' : 'outlined'}
        color={type === 'create' ? 'primary' : 'success'}
        onClick={handleClickOpen}
        content={type === 'create' ? 'Create car' : <BuildIcon fontSize='small' />}
        disabled={disabled}
      />
      <CustomDialog open={open} onClose={handleClose}>
        <UpdateForm onApply={handleApply} initialData={initialData} />
      </CustomDialog>
    </>
  );
};

export default UpdateCar;
