import { IButtonWithIdProps } from '../../../../button/types';
import { CreateCarDto } from '../../../../../services/endpoints/garage/types';

export type UpdateCarButtonProps = IButtonWithIdProps & CreateCarDto;
