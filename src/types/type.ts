import { Dispatch, SetStateAction } from 'react';

export type DelayT = {
  delay?: number;
};

export type ChildernT = {
  children: React.ReactNode;
};

export type TabsProps = {
  targetRef: React.RefObject<HTMLElement>;
  scrollToTarget: () => void;
  isTarget: boolean;
  targetName: string;
  setIsTarget: Dispatch<SetStateAction<boolean>>;
};

export interface TabsPropsT {
  navTabs: TabsProps[];
  id?: string;
}

export type ProjectDataT = {
  id: string;           
  name: string;         
  price: string;        
  imgurl: string;       
};

export type RecordDataT = {
  data: string;
  title: string;
  role: string;
  infos: string[];
  stacks: string[];
};

export type ProjectDetailDataT = {
  id: string;
  name: string;
  price: string;
  imgurl: string;
  desc? : string;
};



export type ButtonNameT = {
  name: string;
};
