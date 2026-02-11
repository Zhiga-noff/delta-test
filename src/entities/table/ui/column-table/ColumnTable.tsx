import React, { FC } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './ColumnTable.module.scss';
import { separator } from '@/shared/libs/helpers/separator/separator';

interface ColumnTableProps {
  className?: string;
  dataColumn: string | number | { value: number; growth: number };
  today: boolean;
}

export const ColumnTable: FC<ColumnTableProps> = ({ className, dataColumn, today }) => {
  if (typeof dataColumn === 'object' && Array.isArray(dataColumn) === false) {
    return (
      <td
        className={classNames(styles.ColumnTable, [], {
          [styles.green]: dataColumn.growth > 0,
          [styles.red]: dataColumn.growth < 0,
        })}
      >
        <div
          className={classNames(styles.ColumnTable, [styles.growth], {
            [styles.green]: dataColumn.growth > 0,
            [styles.red]: dataColumn.growth < 0,
          })}
        >
          {separator(dataColumn.value)}
          <span>{dataColumn.growth}%</span>
        </div>
      </td>
    );
  }

  return (
    <td className={classNames(styles.ColumnTable, [className], { now: today })}>
      {typeof dataColumn === 'number' ? separator(dataColumn) : dataColumn}
    </td>
  );
};
