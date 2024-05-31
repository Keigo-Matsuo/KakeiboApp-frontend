import React from 'react';

function KakeiboTableRow({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.date}</td>
      <td>{item.category.name}</td>
      <td>{item.amount}</td>
      <td>{item.memo}</td>
    </tr>
  );
}

export default KakeiboTableRow;
