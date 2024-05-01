import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store/store';
import CustomButton from '../../../../components/button/button';
import { generateCars } from '../../../../redux/store/slices/garage/actions';
import { IButtonProps } from '../../../../components/button/types';

const GenerateCarsBtn: FC<Pick<IButtonProps, 'disabled'>> = ({ disabled = false }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(generateCars());
  };

  return <CustomButton content='Generate cars' onClick={handleClick} disabled={disabled} />;
};

export default GenerateCarsBtn;
