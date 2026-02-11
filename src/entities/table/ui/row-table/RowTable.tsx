import React, { FC, useState } from 'react';
import { classNames } from '@/shared/libs/helpers';
import styles from './RowTable.module.scss';
import { TableData } from '@/shared/libs/types';
import { ColumnTable } from '@/entities/table/ui/column-table/ColumnTable';
import { HighchartsLine } from '@/widgets/chart/Chart';

interface RowTableProps {
  className?: string;
  rowData?: TableData;
}

export const RowTable: FC<RowTableProps> = ({ className, rowData }) => {
  const [showChart, setShowChart] = useState(false);
  const quantityColumn = (rowData ? Object.keys(rowData) : []) as (keyof TableData)[];

  const clickToRow = () => {
    setShowChart((pre) => !pre);
  };

  return (
    <>
      <tr className={classNames(styles.RowTable, [className])} onClick={clickToRow}>
        {quantityColumn.map((item) => {
          return <ColumnTable today={item === 'today'} dataColumn={rowData[item]} key={item} />;
        })}
      </tr>
      {showChart && (
        <tr className={classNames(styles.RowTable, [className])}>
          <td colSpan={4}>
            <HighchartsLine />
          </td>
        </tr>
      )}
    </>
  );
};
