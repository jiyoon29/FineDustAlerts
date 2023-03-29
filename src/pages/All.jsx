import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { areaContext } from '../components/Layout';
import { GRADE } from '../constants/Grade';
import * as S from '../styles/card';

function All() {
  const { fetchData, sido } = useOutletContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const result = await fetchAllDataFromApi(sido);
        setData(result.body.items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [sido]);

  const fetchAllDataFromApi = async (selectedSido) => {
    const response = await fetchData(selectedSido);
    return response;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <S.CardList>
      {data.map((item, index) => (
        <S.ListItem key={index} grade={Number(item.pm10Grade)}>
          <div className="card_top">
            <p>{item.stationName} <span>{item.sido}</span></p>
          </div>
          <h3>{GRADE[item.pm10Grade] ?? '알수없음'}</h3>
          <div className="card_text">
            <p>미세먼지 수치: {item.pm10Value}</p>
            <p>&#40;{item.dataTime} 기준&#41;</p>
          </div>
        </S.ListItem>
      ))}
    </S.CardList>
  );
}

export default All;
