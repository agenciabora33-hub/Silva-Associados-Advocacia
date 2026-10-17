import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, Search, MessageCircle, HelpCircle, Scale } from 'lucide-react';
import { getWhatsAppUrl, LAWYER_NAME, FIRM_NAME } from '../utils/whatsapp';

export const FaqAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-[#070A0F] border-b border-neutral-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Respostas Claras & Segurança Jurídica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight text-balance">
            Perguntas Frequentes sobre Direito de Família e Sucessões
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre divórcio, partilha de patrimônio, inventário em cartório e alimentos com a equipe da {FIRM_NAME}.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar por tema (ex: inventário, pensão, liminar TEA, cartório)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#111827] border border-neutral-700 rounded-lg text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-inner"
            />
          </div>

          {/* Category Tabs (Interactive buttons) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'todos'
                  ? 'bg-[#C5A059] text-[#0B0F17] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#111827] text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              Todas as Dúvidas
            </button>
            <button
              onClick={() => setActiveCategory('familia')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'familia'
                  ? 'bg-[#C5A059] text-[#0B0F17] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#111827] text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              Divórcio & Guarda
            </button>
            <button
              onClick={() => setActiveCategory('inventario')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'inventario'
                  ? 'bg-[#C5A059] text-[#0B0F17] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#111827] text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              Inventário & Herança
            </button>
            <button
              onClick={() => setActiveCategory('tea')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                activeCategory === 'tea'
                  ? 'bg-[#C5A059] text-[#0B0F17] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#111827] text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              Direitos TEA & Saúde
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#111827] rounded-xl border border-neutral-800 overflow-hidden shadow-md transition-colors hover:border-neutral-700"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#161F2E]"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 bg-[#0B0F17]/60 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-[#111827] rounded-xl border border-dashed border-neutral-700">
              <p className="text-sm text-neutral-400">
                Nenhuma resposta encontrada para "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="mt-2 text-xs text-[#C5A059] font-semibold underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* Help Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#111827] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">
                Sua dúvida jurídica não foi listada aqui?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Envie sua pergunta diretamente para a {LAWYER_NAME} e receba orientação especializada confidencial.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl(`Olá, ${LAWYER_NAME}! Tenho uma dúvida jurídica que gostaria de esclarecer com a ${FIRM_NAME}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:brightness-110 text-[#0B0F17] text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#0B0F17]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
