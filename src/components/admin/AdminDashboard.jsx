import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCreditCard, FaTv, FaChartLine, FaWhatsapp, FaCog } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: FaUsers, label: 'Actieve Gebruikers', value: '1,234', change: '+12%', color: 'from-blue-500 to-brand-orange' },
    { icon: FaCreditCard, label: 'Omzet Deze Maand', value: '€15,680', change: '+23%', color: 'from-green-500 to-green-600' },
    { icon: FaTv, label: 'Actieve Streams', value: '3,456', change: '+8%', color: 'from-purple-500 to-purple-600' },
    { icon: FaWhatsapp, label: 'Support Tickets', value: '24', change: '-5%', color: 'from-orange-500 to-orange-600' },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'Ahmed K.', plan: '12 Maanden', amount: '€50', status: 'Actief', date: '2026-09-01' },
    { id: '#1235', customer: 'Lisa van D.', plan: '6 Maanden', amount: '€40', status: 'Actief', date: '2026-09-02' },
    { id: '#1236', customer: 'Mohammed A.', plan: '12 Maanden', amount: '€50', status: 'Pending', date: '2026-09-03' },
    { id: '#1237', customer: 'Jan P.', plan: '3 Maanden', amount: '€25', status: 'Actief', date: '2026-09-04' },
  ];

  const tabs = [
    { id: 'overview', name: 'Overzicht', icon: FaChartLine },
    { id: 'users', name: 'Gebruikers', icon: FaUsers },
    { id: 'subscriptions', name: 'Abonnementen', icon: FaCreditCard },
    { id: 'settings', name: 'Instellingen', icon: FaCog },
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Admin Header */}
      <div className="bg-navy-800 border-b border-white/10">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <div className="glass-effect px-4 py-2 rounded-lg">
                <span className="text-gray-400">Ingelogd als:</span>
                <span className="ml-2 font-semibold">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-navy-800/50 border-b border-white/5">
        <div className="container-custom">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 flex items-center gap-2 font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-primary-400 border-b-2 border-primary-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl hover:shadow-xl hover:shadow-primary-500/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="text-2xl text-white" />
                    </div>
                    <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Recent Orders Table */}
            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold">Recente Bestellingen</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-4 text-left text-gray-400 font-medium">Order ID</th>
                      <th className="p-4 text-left text-gray-400 font-medium">Klant</th>
                      <th className="p-4 text-left text-gray-400 font-medium">Abonnement</th>
                      <th className="p-4 text-left text-gray-400 font-medium">Bedrag</th>
                      <th className="p-4 text-left text-gray-400 font-medium">Status</th>
                      <th className="p-4 text-left text-gray-400 font-medium">Datum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 font-medium">{order.id}</td>
                        <td className="p-4">{order.customer}</td>
                        <td className="p-4">{order.plan}</td>
                        <td className="p-4 font-semibold text-green-500">{order.amount}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Actief'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400">{order.date}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Gebruikersbeheer</h2>
            <p className="text-gray-400">Gebruikersbeheer functionaliteit komt hier...</p>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Abonnementenbeheer</h2>
            <p className="text-gray-400">Abonnementenbeheer functionaliteit komt hier...</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Instellingen</h2>
            <p className="text-gray-400">Instellingen functionaliteit komt hier...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
