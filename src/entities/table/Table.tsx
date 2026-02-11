import React, { FC } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './Table.module.scss';
import { TableData } from '@/shared/libs/types';
import { RowTable } from '@/entities/table/ui/row-table/RowTable';
import { TitleRow } from '@/entities/table/ui/title-row/TitleRow';

interface TableProps {
  className?: string;
  data: TableData[];
}

export const Table: FC<TableProps> = ({ className, data }) => {
  return (
    <table className={classNames(styles.Table, [className])}>
      <TitleRow />
      <tbody>
        {data.map((item) => {
          return <RowTable rowData={item} key={item.indicator} />;
        })}
      </tbody>
    </table>
  );
};
