import { useState, useEffect } from 'react';
import { COURSES_CONFIG, generateCustomPlan } from '../data/generator';
import { Calendar, Clock, BookOpen, Sparkles, CheckSquare, Settings2, Award, Info, HeartPulse, GraduationCap, CheckCircle } from 'lucide-react';

interface HomeTabProps {
  onPlanGenerated: (courseId: string) => void;
}

export default function HomeTab({ onPlanGenerated }: HomeTabProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>(() => {
    return localStorage.getItem('active_course') || 'seplag_informatica';
  });

  const [examDate, setExamDate] = useState<string>(() => {
    const savedConfig = localStorage.getItem('study_config');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        if (parsed.examDate) return parsed.examDate;
      } catch (e) {}
    }
    // Default: August 15, 2026
    return '2026-08-15';
  });

  const [studyDays, setStudyDays] = useState<number>(() => {
    const savedConfig = localStorage.getItem('study_config');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        if (parsed.totalDays) return Number(parsed.totalDays);
      } catch (e) {}
    }
    return 20;
  });

  const [hoursPerDay, setHoursPerDay] = useState<number>(() => {
    const savedConfig = localStorage.getItem('study_config');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        if (parsed.hoursPerDay) return Number(parsed.hoursPerDay);
      } catch (e) {}
    }
    return 4;
  });

  // Keep track of which topic IDs are selected
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([]);

  // Update selected topics whenever the course changes
  useEffect(() => {
    const config = COURSES_CONFIG[selectedCourse];
    if (config) {
      setSelectedTopicIds(config.topics.map(t => t.id));
    }
  }, [selectedCourse]);

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopicIds(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleCreatePlan = () => {
    if (selectedTopicIds.length === 0) {
      alert("Por favor, selecione pelo menos um assunto para estudar!");
      return;
    }

    const today = new Date('2026-07-02');
    const exam = new Date(examDate);
    if (exam < today) {
      if (!window.confirm("A data da prova selecionada já passou em relação à data atual simulada (02/07/2026). Deseja prosseguir mesmo assim?")) {
        return;
      }
    }

    // Call generator to build custom study sections, questions, and calendar weeks
    const result = generateCustomPlan(
      selectedCourse,
      examDate,
      studyDays,
      hoursPerDay,
      selectedTopicIds
    );

    if (result.success) {
      // Store in localStorage
      localStorage.setItem('active_course', selectedCourse);
      localStorage.setItem('custom_study_sections', JSON.stringify(result.sections));
      localStorage.setItem('custom_quiz_questions', JSON.stringify(result.questions));
      localStorage.setItem('custom_schedule_weeks', JSON.stringify(result.weeks));
      
      // Save current configuration values
      localStorage.setItem('study_config', JSON.stringify({
        examDate,
        totalDays: studyDays,
        hoursPerDay,
        selectedTopics: selectedTopicIds
      }));

      // Reset progress so they have a fresh schedule to check off
      localStorage.removeItem('study_schedule_progress');
      localStorage.removeItem('quiz_answers');

      // Trigger callback in parent component
      onPlanGenerated(selectedCourse);
    }
  };

  const activeCourseConfig = COURSES_CONFIG[selectedCourse] || COURSES_CONFIG.seplag_informatica;

  return (
    <div id="home-tab-container" className="space-y-8 animate-fade-in">
      {/* Banner de Boas-Vindas */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 rounded-3xl shadow-md border border-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <span className="px-3 py-1 text-xs font-bold bg-indigo-500 text-indigo-50 rounded-full inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Nova Geração de Estudos
          </span>
          <h2 className="text-2xl lg:text-3.5xl font-black tracking-tight leading-none text-white">
            Planejamento Dinâmico de Reta Final Inteligente
          </h2>
          <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
            Monte seu cronograma ativo, resumos de Pareto e simulador CEBRASPE de forma 100% personalizada. Insira os dados da sua rotina e nosso algoritmo cuidará do resto!
          </p>
        </div>
      </div>

      {/* Grid de Configurações */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Formulário de Configuração - 8 colunas */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Settings2 className="w-5 h-5 text-indigo-600" />
              <h3 className="font-extrabold text-slate-800 text-base">Passo 1: Detalhes do seu Concurso</h3>
            </div>

            {/* Abas de Provas */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Escolha a Prova / Especialidade:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                
                {/* SEPLAG AL Informática */}
                <button
                  type="button"
                  onClick={() => setSelectedCourse('seplag_informatica')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between h-36 transition cursor-pointer ${
                    selectedCourse === 'seplag_informatica'
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <GraduationCap className={`w-6 h-6 ${selectedCourse === 'seplag_informatica' ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {selectedCourse === 'seplag_informatica' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs lg:text-sm text-slate-800">SEPLAG AL - Informática</h4>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">Tecnologia da Informação e Análise de Sistemas.</p>
                  </div>
                </button>

                {/* Técnico em Enfermagem */}
                <button
                  type="button"
                  onClick={() => setSelectedCourse('tecnico_enfermagem')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between h-36 transition cursor-pointer ${
                    selectedCourse === 'tecnico_enfermagem'
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <HeartPulse className={`w-6 h-6 ${selectedCourse === 'tecnico_enfermagem' ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {selectedCourse === 'tecnico_enfermagem' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs lg:text-sm text-slate-800">Técnico em Enfermagem</h4>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">Fundamentos de Enfermagem, SUS, Urgências e Farmacologia.</p>
                  </div>
                </button>

                {/* Jornalismo */}
                <button
                  type="button"
                  onClick={() => setSelectedCourse('jornalismo')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between h-36 transition cursor-pointer ${
                    selectedCourse === 'jornalismo'
                      ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <BookOpen className={`w-6 h-6 ${selectedCourse === 'jornalismo' ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {selectedCourse === 'jornalismo' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs lg:text-sm text-slate-800">Jornalismo</h4>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">Teorias da Comunicação, Assessoria de Imprensa, Novas Mídias e Redação.</p>
                  </div>
                </button>

              </div>
            </div>

            {/* Inputs de Data e Horas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Data da Prova */}
              <div className="space-y-1.5">
                <label htmlFor="exam-date" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Data da Prova:</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    id="exam-date"
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none text-slate-700 font-medium"
                  />
                </div>
              </div>

              {/* Quantos dias posso estudar */}
              <div className="space-y-1.5">
                <label htmlFor="study-days" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Dias para Estudar (Total):</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    id="study-days"
                    type="number"
                    min="1"
                    max="180"
                    value={studyDays}
                    onChange={(e) => setStudyDays(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none text-slate-700 font-mono font-bold"
                  />
                </div>
              </div>

              {/* Quantas horas por dia */}
              <div className="space-y-1.5">
                <label htmlFor="hours-per-day" className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Horas por Dia:</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input
                    id="hours-per-day"
                    type="number"
                    min="1"
                    max="24"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Math.min(24, Math.max(1, parseInt(e.target.value) || 0)))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none text-slate-700 font-mono font-bold"
                  />
                </div>
              </div>

            </div>

            {/* Checklist de Assuntos */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Escolha os Assuntos do Concurso:</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTopicIds(activeCourseConfig.topics.map(t => t.id))}
                    className="text-[10px] text-indigo-600 font-bold hover:underline"
                  >
                    Selecionar Todos
                  </button>
                  <span className="text-slate-300 text-[10px]">|</span>
                  <button
                    type="button"
                    onClick={() => setSelectedTopicIds([])}
                    className="text-[10px] text-slate-500 font-bold hover:underline"
                  >
                    Limpar Todos
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeCourseConfig.topics.map(topic => {
                  const isChecked = selectedTopicIds.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      onClick={() => handleTopicToggle(topic.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition ${
                        isChecked 
                          ? 'bg-slate-50 border-slate-300' 
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition ${
                          isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isChecked && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                      </button>
                      <div className="space-y-0.5">
                        <span className="text-xs font-extrabold text-slate-800">{topic.title}</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {topic.subtopics.slice(0, 3).map((sub, i) => (
                            <span key={i} className="text-[8px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botão de Criação */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                id="btn-generate-plan"
                onClick={handleCreatePlan}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Criar Cronograma Inteligente de Reta Final 🚀
              </button>
            </div>
          </div>
        </div>

        {/* Resumo Lateral de Estilo - 4 colunas */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="font-extrabold text-xs lg:text-sm uppercase tracking-wider text-amber-500">Resumo da Configuração</h3>
            </div>
            
            <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed border-b border-slate-800 pb-4">
              <div>
                <span className="text-slate-400 block font-bold">Prova Selecionada:</span>
                <span className="text-sm font-extrabold text-white">{activeCourseConfig.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold font-mono">Carga Horária Planejada:</span>
                <span className="text-sm font-extrabold text-indigo-400">{studyDays * hoursPerDay} horas de estudo bruto</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">Média Diária:</span>
                <span className="text-white font-extrabold">{hoursPerDay} horas/dia por {studyDays} dias selecionados</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">Assuntos Focados:</span>
                <span className="text-white font-extrabold">{selectedTopicIds.length} assuntos selecionados</span>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-800 text-[11px] leading-relaxed">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-slate-400">
                Nosso sistema utiliza o <strong>Princípio de Pareto (80/20)</strong> para filtrar as partes cruciais do edital e distribuir a carga horária em ciclos equilibrados de teoria e simulados reais CEBRASPE.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
