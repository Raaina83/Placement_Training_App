// Will be using Chart.js library for Graphs/Charts


import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bardata, Piedata } from './ChartData';
import { Baroptions, Pieoptions } from './ChartOptions';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Graphs = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="w-full md:w-1/2 h-[40vh]">
                    <Bar data={Bardata} options={Baroptions} />
                </div>

                <div className="w-full md:w-1/2 h-[40vh]">
                    <Pie data={Piedata} options={Pieoptions} />
                </div>
            </div>
        </div>
    );
}

export default Graphs;
