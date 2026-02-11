import React, { FC } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './TitleRow.module.scss';

interface TitleRowProps {
  className?: string;
}

export const TitleRow: FC<TitleRowProps> = ({ className }) => {
  return (
    <thead>
      <tr className={classNames(styles.TitleRow, [className])}>
        <td>Показатель</td>
        <td className={'now'}>Текущий день</td>
        <td>Вчера</td>
        <td>Этот день, неделя</td>
      </tr>
    </thead>
  );
};
