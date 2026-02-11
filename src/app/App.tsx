import React from 'react';
import './styles/style.scss';
import { Title } from '@/shared/ui';
import { Table } from '@/entities/table';
import { tableTemplate } from '@/shared/libs/constant/table-template';

export function App() {
  return (
    <div className={'app'}>
      <Title>Таблица</Title>
      <Table data={tableTemplate} />
    </div>
  );
}
