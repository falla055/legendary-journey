'use client';

import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

export default function Dashboard() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on client side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Data structures
  const endangeredData = {
    northAmerica: {
      2020: { species: ['Bald Eagle', 'Gray Wolf', 'Whooping Crane', 'Florida Panther', 'Sea Otter'], counts: [1200, 800, 400, 300, 150] },
      2021: { species: ['Bald Eagle', 'Gray Wolf', 'Whooping Crane', 'Florida Panther', 'Sea Otter'], counts: [1100, 850, 390, 280, 140] },
      2022: { species: ['Bald Eagle', 'Gray Wolf', 'Whooping Crane', 'Florida Panther', 'Sea Otter'], counts: [1000, 870, 350, 250, 130] },
      2023: { species: ['Bald Eagle', 'Gray Wolf', 'Whooping Crane', 'Florida Panther', 'Sea Otter'], counts: [950, 890, 320, 230, 125] },
    },
    europe: {
      2023: { species: ['Iberian Lynx', 'Saiga Antelope', 'European Mink', 'Monk Seal', 'Great Bustard'], counts: [300, 450, 210, 180, 160] },
      2022: { species: ['Iberian Lynx', 'Saiga Antelope', 'European Mink', 'Monk Seal', 'Great Bustard'], counts: [320, 430, 200, 170, 150] },
      2021: { species: ['Iberian Lynx', 'Saiga Antelope', 'European Mink', 'Monk Seal', 'Great Bustard'], counts: [340, 400, 180, 160, 145] },
      2020: { species: ['Iberian Lynx', 'Saiga Antelope', 'European Mink', 'Monk Seal', 'Great Bustard'], counts: [360, 390, 170, 155, 140] },
    },
    asia: {
      2023: { species: ['Amur Leopard', 'Javan Rhino', 'Orangutan', 'Tiger', 'Asian Elephant'], counts: [90, 75, 150, 300, 400] },
      2022: { species: ['Amur Leopard', 'Javan Rhino', 'Orangutan', 'Tiger', 'Asian Elephant'], counts: [85, 78, 160, 310, 390] },
      2021: { species: ['Amur Leopard', 'Javan Rhino', 'Orangutan', 'Tiger', 'Asian Elephant'], counts: [80, 82, 170, 320, 380] },
      2020: { species: ['Amur Leopard', 'Javan Rhino', 'Orangutan', 'Tiger', 'Asian Elephant'], counts: [75, 85, 180, 330, 370] },
    },
    southAmerica: {
      2023: { species: ['Jaguar', 'Giant Otter', 'Golden Lion Tamarin', 'Maned Wolf', 'Amazon River Dolphin'], counts: [400, 120, 200, 150, 90] },
      2022: { species: ['Jaguar', 'Giant Otter', 'Golden Lion Tamarin', 'Maned Wolf', 'Amazon River Dolphin'], counts: [420, 130, 210, 160, 100] },
      2021: { species: ['Jaguar', 'Giant Otter', 'Golden Lion Tamarin', 'Maned Wolf', 'Amazon River Dolphin'], counts: [440, 140, 220, 170, 110] },
      2020: { species: ['Jaguar', 'Giant Otter', 'Golden Lion Tamarin', 'Maned Wolf', 'Amazon River Dolphin'], counts: [460, 150, 230, 180, 120] },
    }
  };

  const globalEndangeredData = {
    2020: { species: ['Javan Rhino', 'Amur Leopard', 'Sea Otter', 'Great Bustard', 'Amazon River Dolphin'], counts: [85, 75, 150, 140, 120] },
    2021: { species: ['Javan Rhino', 'Amur Leopard', 'Sea Otter', 'Great Bustard', 'Amazon River Dolphin'], counts: [82, 80, 140, 145, 110] },
    2022: { species: ['Javan Rhino', 'Amur Leopard', 'Sea Otter', 'Great Bustard', 'Amazon River Dolphin'], counts: [78, 85, 130, 150, 100] },
    2023: { species: ['Javan Rhino', 'Amur Leopard', 'Sea Otter', 'Great Bustard', 'Amazon River Dolphin'], counts: [75, 90, 125, 160, 90] }
  };

  const fundingByRegion = {
    all: {
      years: ['2019', '2020', '2021', '2022', '2023'],
      values: [160, 213, 240, 267, 295]
    },
    northAmerica: {
      years: ['2019', '2020', '2021', '2022', '2023'],
      values: [50, 65, 72, 78, 85]
    },
    southAmerica: {
      years: ['2019', '2020', '2021', '2022', '2023'],
      values: [30, 42, 48, 55, 62]
    },
    europe: {
      years: ['2019', '2020', '2021', '2022', '2023'],
      values: [45, 58, 64, 70, 76]
    },
    asia: {
      years: ['2019', '2020', '2021', '2022', '2023'],
      values: [35, 48, 56, 64, 72]
    }
  };

  const exchangeRates = {
    usd: 1,
    cad: 1.34,
    eur: 0.91,
    jpy: 149.50
  };

  const translations = {
    en: {
      language: "Language:",
      title: "Endangered Animals Dashboard",
      description: "This page contains information related to wildlife conservation. The graph on the left presents the 5 most endangered species by year from 2020 to 2023. The graph on the right presents the funding received for wildlife protection over time from 2019 to 2023.",
      filterRegion: "Filter Data by Region:",
      northAmerica: "North America",
      southAmerica: "South America",
      europe: "Europe",
      asia: "Asia",
      chartTitle1: "5 Most Endangered Species (Lowest Population)",
      chartTitle2: "Wildlife Protection Funding from 2019 to 2023",
      year: "Year:",
      currency: "Currency:",
      endangeredPopulation: "Endangered Population",
      wildlifeFunding: "Wildlife Funding",
      fundingMillions: "Funding (Millions)",
      millions: "Millions",
      individualsInWild: "Number of Individuals in the Wild",
      individuals: "Individuals",
      disclaimer: "⚠️ Data Disclaimer: The data presented in this dashboard is artificially generated and does not represent real wildlife conservation statistics or funding information.",
      species: {
        'Bald Eagle': 'Bald Eagle',
        'Gray Wolf': 'Gray Wolf',
        'Whooping Crane': 'Whooping Crane',
        'Florida Panther': 'Florida Panther',
        'Sea Otter': 'Sea Otter',
        'Iberian Lynx': 'Iberian Lynx',
        'Saiga Antelope': 'Saiga Antelope',
        'European Mink': 'European Mink',
        'Monk Seal': 'Monk Seal',
        'Great Bustard': 'Great Bustard',
        'Amur Leopard': 'Amur Leopard',
        'Javan Rhino': 'Javan Rhino',
        'Orangutan': 'Orangutan',
        'Tiger': 'Tiger',
        'Asian Elephant': 'Asian Elephant',
        'Jaguar': 'Jaguar',
        'Giant Otter': 'Giant Otter',
        'Golden Lion Tamarin': 'Golden Lion Tamarin',
        'Maned Wolf': 'Maned Wolf',
        'Amazon River Dolphin': 'Amazon River Dolphin'
      }
    },
    fr: {
      language: "Langue :",
      title: "Tableau de bord des animaux en voie de disparition",
      description: "Cette page contient des informations liées à la conservation de la faune. Le graphique de gauche présente les 5 espèces les plus menacées par année de 2020 à 2023. Le graphique de droite présente le financement pour la protection de la faune au fil du temps de 2019 à 2023.",
      filterRegion: "Filtrer les données par région :",
      northAmerica: "Amérique du Nord",
      southAmerica: "Amérique du Sud",
      europe: "Europe",
      asia: "Asie",
      chartTitle1: "5 espèces les plus menacées (population la plus faible)",
      chartTitle2: "Financement pour la Protection de la Faune de 2019 à 2023",
      year: "Année :",
      currency: "Devise :",
      endangeredPopulation: "Population en voie de disparition",
      wildlifeFunding: "Financement de la faune",
      fundingMillions: "Financement (Millions)",
      millions: "Millions",
      individualsInWild: "Nombre d'individus dans la nature",
      individuals: "Individus",
      disclaimer: "⚠️ Avertissement sur les Données : Les données présentées dans ce tableau de bord sont générées artificiellement et ne représentent pas de véritables statistiques de conservation de la faune ou d'informations de financement.",
      species: {
        'Bald Eagle': 'Aigle à tête blanche',
        'Gray Wolf': 'Loup gris',
        'Whooping Crane': 'Grue blanche',
        'Florida Panther': 'Panthère de Floride',
        'Sea Otter': 'Loutre de mer',
        'Iberian Lynx': 'Lynx ibérique',
        'Saiga Antelope': 'Antilope saïga',
        'European Mink': 'Vison d\'Europe',
        'Monk Seal': 'Phoque moine',
        'Great Bustard': 'Grande outarde',
        'Amur Leopard': 'Léopard de l\'Amour',
        'Javan Rhino': 'Rhinocéros de Java',
        'Orangutan': 'Orang-outan',
        'Tiger': 'Tigre',
        'Asian Elephant': 'Éléphant d\'Asie',
        'Jaguar': 'Jaguar',
        'Giant Otter': 'Loutre géante',
        'Golden Lion Tamarin': 'Tamarin-lion doré',
        'Maned Wolf': 'Loup à crinière',
        'Amazon River Dolphin': 'Dauphin rose de l\'Amazone'
      }
    }
  };

  const t = translations[currentLanguage];

  // Get current data for charts
  const getCurrentBarData = () => {
    let data;
    if (selectedRegion === 'all') {
      data = globalEndangeredData[selectedYear];
    } else {
      data = endangeredData[selectedRegion][selectedYear];
    }
    
    // Translate species names
    const translatedSpecies = data.species.map(species => t.species[species] || species);
    
    return {
      species: translatedSpecies,
      counts: data.counts
    };
  };

  const getCurrentLineData = () => {
    const regionFunding = fundingByRegion[selectedRegion];
    const rate = exchangeRates[selectedCurrency];
    return {
      labels: regionFunding.years,
      data: regionFunding.values.map(v => +(v * rate).toFixed(1))
    };
  };

  // Bar chart configuration
  const barData = getCurrentBarData();
  const minValue = Math.min(...barData.counts);
  const minIndex = barData.counts.indexOf(minValue);
  
  const barChartData = {
    labels: barData.species,
    datasets: [{
      label: t.endangeredPopulation,
      data: barData.counts,
      backgroundColor: barData.counts.map((count, index) => 
        index === minIndex ? '#ef476f' : '#9e9e9e'
      ),
      borderRadius: 6
    }]
  };

  const barChartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.x} ${t.individuals}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        title: { 
          display: true, 
          text: t.individualsInWild,
          font: {
            size: 16
          },
          color: '#000000'
        },
        grace: '10%',
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14
          },
          color: '#000000'
        }
      },
      y: {
        ticks: {
          font: {
            size: 14
          },
          color: '#000000'
        }
      }
    }
  };

  // Line chart configuration
  const lineData = getCurrentLineData();
  
  const lineChartData = {
    labels: lineData.labels,
    datasets: [{
      label: `${t.wildlifeFunding} (${t.millions} ${selectedCurrency.toUpperCase()})`,
      data: lineData.data,
      borderColor: '#118ab2',
      backgroundColor: 'rgba(17,138,178,0.2)',
      fill: true,
      tension: 0.3
    }]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y} ${t.millions} ${selectedCurrency.toUpperCase()}`;
          }
        }
      },
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: '#000000',
        font: {
          size: 13,
          weight: 'bold'
        },
        formatter: function(value) {
          return Math.round(value);
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { 
          display: true, 
          text: t.fundingMillions,
          font: {
            size: 16
          },
          color: '#000000'
        },
        grace: '10%',
        ticks: {
          font: {
            size: 14
          },
          color: '#000000'
        }
      },
      x: {
        grace: '10%',
        ticks: {
          font: {
            size: 14
          },
          color: '#000000'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      {/* Header */}
      <div className="relative mb-5">
        <div className="absolute top-0 right-0 flex items-center gap-3">
          <label className="text-sm text-black font-medium">{t.language}</label>
          <select 
            className="px-2 py-1 text-sm text-black border border-gray-300 rounded"
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <h1 className="text-center text-3xl font-bold text-black mb-5">
          {t.title}
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto mb-8 text-center bg-white p-5 rounded-lg shadow-sm">
        <p className="text-black text-base leading-relaxed">
          {t.description}
        </p>
      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto mb-8 text-center bg-yellow-100 border border-yellow-300 p-4 rounded-lg shadow-sm">
        <p className="text-yellow-800 text-sm font-medium leading-tight">
          {t.disclaimer}
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-5 mb-8 flex-wrap">
        <label className="flex items-center gap-2">
          <span className="text-black font-medium">{t.filterRegion}</span>
          <select 
            className="px-3 py-2 text-base text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="all">All</option>
            <option value="northAmerica">{t.northAmerica}</option>
            <option value="southAmerica">{t.southAmerica}</option>
            <option value="europe">{t.europe}</option>
            <option value="asia">{t.asia}</option>
          </select>
        </label>
      </div>

      {/* Charts - only render when client-side */}
      {isClient && (
        <div className="flex flex-col lg:flex-row gap-10 max-w-full mx-auto px-4">
          {/* Bar Chart */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg min-w-0 min-h-[500px]">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
              <h3 className="text-xl font-semibold text-black m-0">
                {t.chartTitle1}
              </h3>
              <label className="flex items-center gap-2">
                <span className="text-black font-medium">{t.year}</span>
                <select 
                  className="px-3 py-2 text-base text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </label>
            </div>
            <div className="h-96 w-full">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Line Chart */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg min-w-0 min-h-[500px]">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
              <h3 className="text-xl font-semibold text-gray-800 m-0">
                {t.chartTitle2}
              </h3>
              <label className="flex items-center gap-2">
                <span className="text-black font-medium">{t.currency}</span>
                <select 
                  className="px-3 py-2 text-base text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  <option value="usd">USD</option>
                  <option value="cad">CAD</option>
                  <option value="eur">EUR</option>
                  <option value="jpy">JPY</option>
                </select>
              </label>
            </div>
            <div className="h-96 w-full">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
        </div>
      )}
      
      {/* Loading state */}
      {!isClient && (
        <div className="flex justify-center items-center h-96">
          <div className="text-black text-lg">Loading charts...</div>
        </div>
      )}
    </div>
  );
}
