import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { NavigationTabProps } from '../types';
import styles from '../navigation-bar.module.scss';

const NavigationTab: FC<NavigationTabProps> = ({ href, icon, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <BottomNavigationAction
      label={label}
      icon={icon}
      className={styles.button}
      onClick={handleClick}
      showLabel
    />
  );
};

export default NavigationTab;
