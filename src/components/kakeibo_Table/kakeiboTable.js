import React from 'react';
import KakeiboTableRow from './kakeiboTableRow';
import './kakeibo.css';

function KakeiboTable({ data }) {
  return (
    // テーブル構成をバックエンドと合わせる必要あり
    <table className='kakeibo'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Category</th>
          <th>Price</th>
          <th>Memo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <KakeiboTableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default KakeiboTable;
