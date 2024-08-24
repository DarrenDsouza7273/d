import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Chart() {
  const dataSource = {
    chart: {
      caption: "Countries with Highest Deforestation Rate",
      subcaption: "For the year 2023",
      yaxisname: "Deforested Area{br}(in Hectares)",
      decimals: "1",
      theme: "candy"
    },
    data: [
      { label: "Brazil", value: "356287" },
      { label: "Indonesia", value: "101977" },
      { label: "DR Congo", value: "94495" },
      { label: "Angola", value: "48865" },
      { label: "Tazmania", value: "44962" },
      { label: "Myanmar", value: "41213" },
      { label: "Paraguay", value: "36463" },
      { label: "Bolivia", value: "26915" },
      { label: "Mozambique", value: "25614" },
      { label: "Argentina", value: "25602" }
    ]
  };

  const chartConfigs = {
    type: 'column3d',
    width: '100%',  // Keep full width for responsive design
    height: '250',  // Adjust the height to make it smaller
    dataFormat: 'json',
    dataSource: dataSource
  };

  return (
    <div className="chart-card">
      <ReactFC {...chartConfigs} />
    </div>
  );
}

export default Chart;