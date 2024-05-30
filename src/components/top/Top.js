import React, { useState, useMemo, useEffect } from 'react';
import { PieGraph } from '../graph/Pie';
import KakeiboTable from '../kakeibo_Table/KakeiboTable';
import CategorySelector from '../category_selector/CategorySelector';
import { useKakeiboData } from '../../hooks/useKakeiboData';

const Top = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const kakeiboData = useKakeiboData(); // 全データを取得
  const [filteredData, setFilteredData] = useState([]);

  // 全データからカテゴリを抽出
  const categories = useMemo(() => {
    const categorySet = new Set();
    kakeiboData.forEach(item => categorySet.add(item.category.name));
    return Array.from(categorySet);
  }, [kakeiboData]);

  // 選択したカテゴリに基づいてデータをフィルタリング
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(kakeiboData);
    } else {
      setFilteredData(
        kakeiboData.filter(item => selectedCategories.includes(item.category.name))
      );
    }
  }, [selectedCategories, kakeiboData]);

  return (
    <div>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <div className="App" style={{ width: '40%' }}>
          <PieGraph data={filteredData} />
        </div>
      </section>
      <div className="App">
        <h1>家計簿一覧</h1>
        <CategorySelector
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categories={categories}
        />
        <KakeiboTable data={filteredData} />
      </div>
    </div>
  );
};

export default Top;
