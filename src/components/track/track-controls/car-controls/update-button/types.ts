import { IButtonWithIdProps } from '../../../../../general-types/types';
import { CreateCarDto } from '../../../../../services/endpoints/garage/types';

export type UpdateCarButtonProps = IButtonWithIdProps & CreateCarDto;
