import axios from 'axios';


const DustApi = () => {
  const fetchData = async (sidoName) => {
    const getParameters = {
      serviceKey: import.meta.env.VITE_SEVICE_KEY,
      returnType: 'json',
      numOfRows: '100',
      pageNo: '1',
      sidoName: sidoName,
      ver: '1.0',
    };

    const response = await axios.get(
      '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters }
    );
    // console.log(response.data.response);
    return response.data.response;
  };
  return { fetchData };
};

export default DustApi;