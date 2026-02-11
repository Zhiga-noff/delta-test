import React, { FC } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './RowTable.module.scss';
import { TableData } from '@/shared/libs/types';
import { ColumnTable } from '@/entities/table/ui/column-table/ColumnTable';

interface RowTableProps {
  className?: string;
  rowData?: TableData;
}

export const RowTable: FC<RowTableProps> = ({ className, rowData }) => {
  const quantityColumn = (rowData ? Object.keys(rowData) : []) as (keyof TableData)[];

  return (
    <tr className={classNames(styles.RowTable, [className])}>
      {quantityColumn.map((item) => {
        return <ColumnTable today={item === 'today'} dataColumn={rowData[item]} key={item} />;
      })}
    </tr>
  );
};
