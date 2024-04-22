export interface CarProps {
  color: string;
  animationTime?: null | number;
  onMount?: (ref: HTMLElement) => void;
}
