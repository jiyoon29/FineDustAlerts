import React, { useEffect, useState, useContext } from 'react';
import { areaContext } from '../components/Layout';
import { GRADE } from '../constants/Grade';
import * as S from '../styles/card';

function Main() {
  const { fetchData, sido, station, selectedStation } = useContext(areaContext);
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

  const filteredData = selectedStation === '모든 지역' ? data : data.filter(item => item.stationName === selectedStation);

  const fetchAllDataFromApi = async (selectedSido) => {
    const response = await fetchData(selectedSido);
    return response;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="card_list">
      {filteredData.map((item, index) => (
        <S.ListItem key={index} grade={Number(item.pm10Grade)}>
          <div className="card_top">
            <p>{item.stationName} <span>{item.sido}</span></p>
          </div>
          <h3>{GRADE[item.pm10Grade]}</h3>
          <div className="card_text">
            <p>미세먼지 수치: {item.pm10Value}</p>
            <p>&#40;{item.dataTime} 기준&#41;</p>
          </div>
        </S.ListItem>
      ))
      }
    </ul >
  );
}

export default Main;