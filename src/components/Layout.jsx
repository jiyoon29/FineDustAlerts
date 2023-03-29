import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import DustApi from '../api/dustapi';
import Nav from './Nav';
import PageTabs from './PageTabs';

export const areaContext = createContext();

function Layout() {
  const [sido, setSido] = useState('전국');
  const [station, setStation] = useState(['모든 지역']);
  const [selectedStation, setSelectedStation] = useState('모든 지역');

  const handleSelectChange = async (selectedSido) => {
    try {
      const result = await fetchData(selectedSido);
      const stations = result.body.items.map(item => item.stationName);
      stations.unshift('모든 지역');
      setSido(selectedSido);
      setStation(stations);
      setSelectedStation('모든 지역');
    } catch (error) {
      console.error(error);
    }
  };

  const handleStationChange = (selectStation) => {
    setSelectedStation(selectStation);
  };

  const fetchData = async (selectedSido) => {
    const response = await DustApi().fetchData(selectedSido);
    return response;
  };

  return (
    <areaContext.Provider value={{ sido, setSido, station, setStation, fetchData, selectedStation, setSelectedStation }}>
      <Nav handleSelectChange={handleSelectChange} handleStationChange={handleStationChange} />
      <Outlet />
      <PageTabs />
    </areaContext.Provider>
  );
}

export default Layout;