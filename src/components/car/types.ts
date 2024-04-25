interface IAdditionalStyles {
  [property: string]: string;
}

export interface ICarProps {
  color: string;
  additionalStyles?: IAdditionalStyles;
  classNames?: string[];
  onMount?: (ref: HTMLElement) => void;
}
