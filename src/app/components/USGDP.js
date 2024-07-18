import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const USGDP = () => {
  const gdpData = {
    name: "Real Gross Domestic Product",
    interval: "annual",
    unit: "billions of dollars",
    data: [
      {
        date: "2023-01-01",
        value: "22376.906",
      },
      {
        date: "2022-01-01",
        value: "21822.037",
      },
      {
        date: "2021-01-01",
        value: "21407.692",
      },
      {
        date: "2020-01-01",
        value: "20234.074",
      },
      {
        date: "2019-01-01",
        value: "20692.087",
      },
      {
        date: "2018-01-01",
        value: "20193.896",
      },
      {
        date: "2017-01-01",
        value: "19612.102",
      },
      {
        date: "2016-01-01",
        value: "19141.672",
      },
      {
        date: "2015-01-01",
        value: "18799.622",
      },
      {
        date: "2014-01-01",
        value: "18261.714",
      },
      {
        date: "2013-01-01",
        value: "17812.167",
      },
      {
        date: "2012-01-01",
        value: "17442.759",
      },
      {
        date: "2011-01-01",
        value: "17052.41",
      },
      {
        date: "2010-01-01",
        value: "16789.75",
      },
      {
        date: "2009-01-01",
        value: "16349.11",
      },
      {
        date: "2008-01-01",
        value: "16781.485",
      },
      {
        date: "2007-01-01",
        value: "16762.445",
      },
      {
        date: "2006-01-01",
        value: "16433.148",
      },
      {
        date: "2005-01-01",
        value: "15987.957",
      },
      {
        date: "2004-01-01",
        value: "15449.757",
      },
      {
        date: "2003-01-01",
        value: "14877.312",
      },
      {
        date: "2002-01-01",
        value: "14472.712",
      },
      {
        date: "2001-01-01",
        value: "14230.726",
      },
      {
        date: "2000-01-01",
        value: "14096.033",
      },
      {
        date: "1999-01-01",
        value: "13543.774",
      },
      {
        date: "1998-01-01",
        value: "12924.876",
      },
      {
        date: "1997-01-01",
        value: "12370.299",
      },
      {
        date: "1996-01-01",
        value: "11843.599",
      },
      {
        date: "1995-01-01",
        value: "11413.012",
      },
      {
        date: "1994-01-01",
        value: "11114.647",
      },
      {
        date: "1993-01-01",
        value: "10684.179",
      },
      {
        date: "1992-01-01",
        value: "10398.046",
      },
      {
        date: "1991-01-01",
        value: "10044.238",
      },
      {
        date: "1990-01-01",
        value: "10055.129",
      },
      {
        date: "1989-01-01",
        value: "9869.003",
      },
      {
        date: "1988-01-01",
        value: "9519.427",
      },
      {
        date: "1987-01-01",
        value: "9137.745",
      },
      {
        date: "1986-01-01",
        value: "8832.611",
      },
      {
        date: "1985-01-01",
        value: "8537.004",
      },
      {
        date: "1984-01-01",
        value: "8195.295",
      },
      {
        date: "1983-01-01",
        value: "7642.266",
      },
      {
        date: "1982-01-01",
        value: "7307.314",
      },
      {
        date: "1981-01-01",
        value: "7441.485",
      },
      {
        date: "1980-01-01",
        value: "7257.316",
      },
      {
        date: "1979-01-01",
        value: "7275.999",
      },
      {
        date: "1978-01-01",
        value: "7052.711",
      },
      {
        date: "1977-01-01",
        value: "6682.804",
      },
      {
        date: "1976-01-01",
        value: "6387.437",
      },
      {
        date: "1975-01-01",
        value: "6060.875",
      },
      {
        date: "1974-01-01",
        value: "6073.363",
      },
      {
        date: "1973-01-01",
        value: "6106.371",
      },
      {
        date: "1972-01-01",
        value: "5780.048",
      },
      {
        date: "1971-01-01",
        value: "5491.445",
      },
      {
        date: "1970-01-01",
        value: "5316.391",
      },
      {
        date: "1969-01-01",
        value: "5306.594",
      },
      {
        date: "1968-01-01",
        value: "5145.914",
      },
      {
        date: "1967-01-01",
        value: "4904.864",
      },
      {
        date: "1966-01-01",
        value: "4773.931",
      },
      {
        date: "1965-01-01",
        value: "4478.555",
      },
      {
        date: "1964-01-01",
        value: "4205.277",
      },
      {
        date: "1963-01-01",
        value: "3976.142",
      },
      {
        date: "1962-01-01",
        value: "3810.124",
      },
      {
        date: "1961-01-01",
        value: "3590.066",
      },
      {
        date: "1960-01-01",
        value: "3500.272",
      },
      {
        date: "1959-01-01",
        value: "3412.421",
      },
      {
        date: "1958-01-01",
        value: "3191.216",
      },
      {
        date: "1957-01-01",
        value: "3215.065",
      },
      {
        date: "1956-01-01",
        value: "3148.765",
      },
      {
        date: "1955-01-01",
        value: "3083.026",
      },
      {
        date: "1954-01-01",
        value: "2877.708",
      },
      {
        date: "1953-01-01",
        value: "2894.411",
      },
      {
        date: "1952-01-01",
        value: "2764.803",
      },
      {
        date: "1951-01-01",
        value: "2656.32",
      },
      {
        date: "1950-01-01",
        value: "2458.532",
      },
      {
        date: "1949-01-01",
        value: "2261.928",
      },
      {
        date: "1948-01-01",
        value: "2274.627",
      },
      {
        date: "1947-01-01",
        value: "2184.614",
      },
      {
        date: "1946-01-01",
        value: "2209.911",
      },
      {
        date: "1945-01-01",
        value: "2500.057",
      },
      {
        date: "1944-01-01",
        value: "2524.752",
      },
      {
        date: "1943-01-01",
        value: "2338.761",
      },
      {
        date: "1942-01-01",
        value: "1998.542",
      },
      {
        date: "1941-01-01",
        value: "1681.049",
      },
      {
        date: "1940-01-01",
        value: "1428.075",
      },
      {
        date: "1939-01-01",
        value: "1312.365",
      },
      {
        date: "1938-01-01",
        value: "1214.869",
      },
      {
        date: "1937-01-01",
        value: "1256.503",
      },
      {
        date: "1936-01-01",
        value: "1195.251",
      },
      {
        date: "1935-01-01",
        value: "1058.836",
      },
      {
        date: "1934-01-01",
        value: "972.263",
      },
      {
        date: "1933-01-01",
        value: "877.431",
      },
      {
        date: "1932-01-01",
        value: "888.414",
      },
      {
        date: "1931-01-01",
        value: "1019.977",
      },
      {
        date: "1930-01-01",
        value: "1089.785",
      },
      {
        date: "1929-01-01",
        value: "1191.124",
      },
    ],
  };

  const reversedData = [...gdpData.data].reverse();

  const chartData = {
    labels: reversedData.map(entry => new Date(entry.date).getFullYear()),
    datasets: [
      {
        label: gdpData.name,
        data: reversedData.map(entry => parseFloat(entry.value)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: '년도',
        },
      },
      y: {
        title: {
          display: true,
          text: 'GDP (백만 달러)',
        },
      },
    },
  };

  const latestData = gdpData.data[0];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">📈 미국 GDP</h2>
        <span className="text-gray-500 text-sm cursor-pointer">더보기</span>
      </div>
      <div className="mb-2">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex justify-between items-center bg-green-100 p-2 rounded-md">
        <span className="text-lg font-semibold">{new Date(latestData.date).getFullYear()}년 {new Date(latestData.date).getMonth() + 1}월</span>
        <span className="text-lg font-semibold">{parseFloat(latestData.value).toFixed(2)} 백만 달러</span>
      </div>
    </div>
  );
};

export default USGDP;