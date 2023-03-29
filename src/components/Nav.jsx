import React, { useEffect, useContext } from 'react';
import { sidoData } from '../constants/sido';
import { useLocation } from 'react-router-dom';
import { areaContext } from '../components/Layout';

function Nav(props) {
  const { sido, station, selectedStation } = useContext(areaContext);
  const location = useLocation();

  const handleSelectChange = (event) => {
    const selectedSido = event.target.value;
    props.handleSelectChange(selectedSido);
  };

  const handleStationChange = (event) => {
    const selectStation = event.target.value;
    props.handleStationChange(selectStation);
  };

  useEffect(() => {
    props.handleSelectChange(sido);
  }, [sido]);

  return (
    <>
      {location.pathname !== '/favorites' &&
        <div>
          <select value={sido} name="sido" onChange={handleSelectChange}>
            {sidoData.map((e, idx) => (
              <option value={e} key={idx}>{e}</option>
            ))}
          </select>
          {location.pathname !== '/all' &&
            <select value={selectedStation} name="station" onChange={handleStationChange}>
              {station.map((e, idx) => (
                <option value={e} key={idx}>{e}</option>
              ))}
            </select>
          }
        </div>
      }
    </>
  );
}

export default Nav;
