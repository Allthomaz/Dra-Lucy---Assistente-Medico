
import React from 'react';
import { MedicalLayout } from './components/layout/MedicalLayout';
import { StatsCard } from './components/dashboard/StatsCard';
import { QuickActions } from './components/dashboard/QuickActions';
import { RecentActivity } from './components/dashboard/RecentActivity';
import { Users, Video, FileText, Clock, TrendingUp, Bot } from './constants';

const App = () => {
  return (
    <MedicalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">
            Bem-vindo à Dra. Lucy. Gerencie suas consultas e documentos médicos.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total de Pacientes"
            value="247"
            description="Pacientes cadastrados"
            icon={<Users className="w-6 h-6 text-green-400"/>}
            trend={{ value: "12%", isPositive: true }}
          />
          <StatsCard
            title="Consultas Hoje"
            value="8"
            description="Consultas agendadas"
            icon={<Video className="w-6 h-6 text-purple-400" />}
            trend={{ value: "2", isPositive: true }}
          />
          <StatsCard
            title="Documentos Pendentes"
            value="3"
            description="Aguardando aprovação"
            icon={<FileText className="w-6 h-6 text-yellow-400"/>}
            trend={{ value: "1", isPositive: false }}
          />
          <StatsCard
            title="Tempo Médio IA"
            value="12seg"
            description="Por documento gerado"
            icon={<Clock className="w-6 h-6 text-blue-400" />}
            trend={{ value: "25%", isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <QuickActions />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Ative a Integração com IA</h3>
              <p className="text-sm text-slate-400">
                Para utilizar a geração de documentos com IA, certifique-se que sua chave de API do Gemini está configurada corretamente no ambiente de execução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MedicalLayout>
  );
};

export default App;
