import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const data = [
  { name: 'Ene', ventas: 4000, usuarios: 2400, avg: 2400 },
  { name: 'Feb', ventas: 3000, usuarios: 1398, avg: 2210 },
  { name: 'Mar', ventas: 2000, usuarios: 9800, avg: 2290 },
  { name: 'Abr', ventas: 2780, usuarios: 3908, avg: 2000 },
  { name: 'May', ventas: 1890, usuarios: 4800, avg: 2181 },
  { name: 'Jun', ventas: 2390, usuarios: 3800, avg: 2500 },
];

const stats = [
  {
    name: 'Usuarios Totales',
    value: '24,563',
    change: '+12.5%',
    icon: <Users className="w-6 h-6" />,
    trend: 'up',
  },
  {
    name: 'Ventas Totales',
    value: '$45,678',
    change: '+23.1%',
    icon: <ShoppingBag className="w-6 h-6" />,
    trend: 'up',
  },
  {
    name: 'Ingreso Promedio',
    value: '$892.12',
    change: '-4.3%',
    icon: <DollarSign className="w-6 h-6" />,
    trend: 'down',
  },
  {
    name: 'Tasa de Conversión',
    value: '2.4%',
    change: '+8.7%',
    icon: <TrendingUp className="w-6 h-6" />,
    trend: 'up',
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'John Doe',
    action: 'completó una compra',
    timestamp: 'hace 2 minutos',
    amount: '$234.50',
    status: 'success',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'se registró',
    timestamp: 'hace 5 minutos',
    status: 'info',
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'abandonó el carrito',
    timestamp: 'hace 12 minutos',
    amount: '$129.99',
    status: 'warning',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-blue-50 rounded-lg">{stat.icon}</div>
              <div
                className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                <span>{stat.change}</span>
                {stat.trend === 'up' ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Ventas vs Usuarios
          </h2>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ventas" stroke="#3B82F6" />
                <Line type="monotone" dataKey="usuarios" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Promedio Mensual
          </h2>
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avg" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Actividad Reciente
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === 'success'
                          ? 'bg-green-400'
                          : activity.status === 'warning'
                          ? 'bg-yellow-400'
                          : 'bg-blue-400'
                      }`}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user} {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
                {activity.amount && (
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {activity.amount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
