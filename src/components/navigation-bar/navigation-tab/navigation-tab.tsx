import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { INavigationTabProps } from '../types';
import styles from './navigation-tab.module.scss';

const NavigationTab: FC<INavigationTabProps> = ({ href, icon, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <BottomNavigationAction
      label={label}
      icon={icon}
      className={styles.wrapper}
      onClick={handleClick}
      showLabel
    />
  );
};

export default NavigationTab;
