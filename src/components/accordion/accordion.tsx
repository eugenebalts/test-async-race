import { FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { IAccordionProps } from './types';
import styles from './accordion.module.scss';

const CustomAccordion: FC<IAccordionProps> = ({ title, children }) => (
  <Accordion className={styles.wrapper}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.title}>
      <h4>{title}</h4>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default CustomAccordion;
