export interface CarProps {
  color: string;
  additionalStyles?: AdditionalStyle;
  classNames?: string[];
  onMount?: (ref: HTMLElement) => void;
}

interface AdditionalStyle {
  [property: string]: string;
}
