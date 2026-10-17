import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeColor = 'gold' | 'navy' | 'bordeaux' | 'emerald';

export interface ThemeConfig {
  id: ThemeColor;
  name: string;
  badge: string;
  primaryHex: string;
  secondaryHex: string;
  subtleHex: string;
  description: string;
}

export const THEMES: Record<ThemeColor, ThemeConfig> = {
  gold: {
    id: 'gold',
    name: 'Ouro Nobre & Oxford',
    badge: 'Família, Sucessões & Alta Renda',
    primaryHex: '#C5A059',
    secondaryHex: '#D4AF37',
    subtleHex: '#F4EDE0',
    description: 'Transmite tradição, requinte e solidez patrimonial. Ideal para Direito de Família, Sucessões e Bancas Notáveis.'
  },
  navy: {
    id: 'navy',
    name: 'Azul Real & Platina',
    badge: 'Empresarial & Cível Estratégico',
    primaryHex: '#1D4ED8',
    secondaryHex: '#3B82F6',
    subtleHex: '#EFF6FF',
    description: 'Sensação corporativa, segurança e modernidade. Perfeito para Direito Empresarial, Contratos e M&A.'
  },
  bordeaux: {
    id: 'bordeaux',
    name: 'Vinho Imperial & Ônix',
    badge: 'Penal Econômico & Litígios',
    primaryHex: '#9F1239',
    secondaryHex: '#BE123C',
    subtleHex: '#FFF1F2',
    description: 'Imponência, combate firme e autoridade perante tribunais. Ideal para Direito Penal e Tribunais Superiores.'
  },
  emerald: {
    id: 'emerald',
    name: 'Verde Esmeralda Nobre',
    badge: 'Tributário, Agro & Previdência',
    primaryHex: '#047857',
    secondaryHex: '#10B981',
    subtleHex: '#ECFDF5',
    description: 'Prosperidade, equilíbrio e rigor técnico. Muito usado por bancas de Direito Tributário, Agronegócio e Previdenciário.'
  }
};

interface DemoContextType {
  lawyerName: string;
  setLawyerName: (name: string) => void;
  firmName: string;
  setFirmName: (name: string) => void;
  city: string;
  setCity: (city: string) => void;
  oabNumber: string;
  setOabNumber: (oab: string) => void;
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  isDemoBarVisible: boolean;
  setIsDemoBarVisible: (visible: boolean) => void;
  isAuditModalOpen: boolean;
  setIsAuditModalOpen: (open: boolean) => void;
  isProposalModalOpen: boolean;
  setIsProposalModalOpen: (open: boolean) => void;
  resetToDefaults: () => void;
  agencyPhone: string;
  agencyEmail: string;
  getAgencyWhatsAppUrl: (customText?: string) => string;
}

const DEFAULT_VALUES = {
  lawyerName: 'Dra. Juliete Silva',
  firmName: 'Silva & Associados Advocacia',
  city: 'São Paulo e todo o Brasil',
  oabNumber: 'OAB Nacional',
  themeColor: 'gold' as ThemeColor
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lawyerName, setLawyerName] = useState<string>(() => {
    return DEFAULT_VALUES.lawyerName;
  });

  const [firmName, setFirmName] = useState<string>(() => {
    return DEFAULT_VALUES.firmName;
  });

  const [city, setCity] = useState<string>(() => {
    return DEFAULT_VALUES.city;
  });

  const [oabNumber, setOabNumber] = useState<string>(() => {
    return DEFAULT_VALUES.oabNumber;
  });

  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    return DEFAULT_VALUES.themeColor;
  });

  const [isDemoBarVisible, setIsDemoBarVisible] = useState<boolean>(false);

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  const agencyPhone = '5554996534554';
  const agencyEmail = 'agenciabora33@gmail.com';

  useEffect(() => {
    localStorage.setItem('demo_lawyer_name', lawyerName);
  }, [lawyerName]);

  useEffect(() => {
    localStorage.setItem('demo_firm_name', firmName);
  }, [firmName]);

  useEffect(() => {
    localStorage.setItem('demo_city', city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem('demo_oab', oabNumber);
  }, [oabNumber]);

  useEffect(() => {
    localStorage.setItem('demo_theme', themeColor);
    document.documentElement.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  useEffect(() => {
    localStorage.setItem('demo_bar_visible', String(isDemoBarVisible));
  }, [isDemoBarVisible]);

  const resetToDefaults = () => {
    setLawyerName(DEFAULT_VALUES.lawyerName);
    setFirmName(DEFAULT_VALUES.firmName);
    setCity(DEFAULT_VALUES.city);
    setOabNumber(DEFAULT_VALUES.oabNumber);
    setThemeColor(DEFAULT_VALUES.themeColor);
  };

  const getAgencyWhatsAppUrl = (customText?: string) => {
    const text = customText || `Olá Agência Bora33! Acessei o site de demonstração jurídica (${lawyerName} / ${city}) e gostaria de conversar sobre a criação de um site premium para o meu escritório de advocacia.`;
    return `https://wa.me/${agencyPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <DemoContext.Provider
      value={{
        lawyerName,
        setLawyerName,
        firmName,
        setFirmName,
        city,
        setCity,
        oabNumber,
        setOabNumber,
        themeColor,
        setThemeColor,
        isDemoBarVisible,
        setIsDemoBarVisible,
        isAuditModalOpen,
        setIsAuditModalOpen,
        isProposalModalOpen,
        setIsProposalModalOpen,
        resetToDefaults,
        agencyPhone,
        agencyEmail,
        getAgencyWhatsAppUrl
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
