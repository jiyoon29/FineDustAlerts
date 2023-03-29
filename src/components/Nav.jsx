import React, { useEffect, useContext } from 'react';
import { sidoData } from '../constants/sido';
import { useLocation } from 'react-router-dom';
import { areaContext } from '../components/Layout';
import * as S from '../styles/nav';

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
    <S.Nav>
      {location.pathname !== '/favorites' &&
        <div className="inner">
          <S.SidoSelect value={sido} name="sido" onChange={handleSelectChange}>
            {sidoData.map((e, idx) => (
              <option value={e} key={idx}>{e}</option>
            ))}
          </S.SidoSelect>
          {location.pathname !== '/all' &&
            <S.StationSelect value={selectedStation} name="station" onChange={handleStationChange}>
              {station.map((e, idx) => (
                <option value={e} key={idx}>{e}</option>
              ))}
            </S.StationSelect>
          }
        </div>
      }
    </S.Nav>
  );
}

export default Nav;
