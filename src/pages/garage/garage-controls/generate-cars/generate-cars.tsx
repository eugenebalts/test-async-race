import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store/store';
import CustomButton from '../../../../components/button/button';
import { generateCars } from '../../../../redux/store/slices/garage/actions';

const GenerateCarsBtn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(generateCars());
  };

  return <CustomButton content='Generate cars' onClick={handleClick} />;
};

export default GenerateCarsBtn;
