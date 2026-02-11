import React, { FC } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './Title.module.scss';

interface TitleProps {
  className?: string;
  children?: string;
}

export const Title: FC<TitleProps> = ({ className, children }) => {
  return (
    <h2 className={classNames(styles.Title, )}>
      {children}
    </h2>
  );
};
