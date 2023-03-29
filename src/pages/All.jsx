import React, { useEffect, useState, useContext } from 'react';
import { areaContext } from '../components/Layout';

function All() {
  const { fetchData, sido } = useContext(areaContext);
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
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div>측정소명: {item.stationName}</div>
          <div>측정시간: {item.dataTime}</div>
          <div>미세먼지 농도: {item.pm10Value} ㎍/㎥</div>
          <div>초미세먼지 농도: {item.pm25Value} ㎍/㎥</div>
          <div>아황산가스 농도: {item.so2Value} ppm</div>
          <div>일산화탄소 농도: {item.coValue} ppm</div>
          <div>오존 농도: {item.o3Value} ppm</div>
          <div>이산화질소 농도: {item.no2Value} ppm</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default All;
