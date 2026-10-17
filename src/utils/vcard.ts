import { 
  WHATSAPP_PHONE, 
  EMAIL_CONTACT, 
  OFFICE_ADDRESS, 
  LAWYER_NAME, 
  FIRM_NAME 
} from './whatsapp';

export function downloadVCard(): void {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${LAWYER_NAME} — ${FIRM_NAME}`,
    'N:Silva;Juliete;;Dra.;',
    `ORG:${FIRM_NAME}`,
    'TITLE:Advogada Especialista em Direito de Família e Sucessões',
    `TEL;TYPE=CELL,VOICE,WHATSAPP:+${WHATSAPP_PHONE}`,
    `EMAIL;TYPE=INTERNET:${EMAIL_CONTACT}`,
    `ADR;TYPE=WORK:;;${OFFICE_ADDRESS};São Paulo;SP;;Brasil`,
    'URL:https://silvaassociados.adv.br',
    `NOTE:Atendimento Jurídico Especializado em Direito de Família, Sucessões, Divórcio, Inventário e Pensão Alimentícia.`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Dra_Juliete_Silva_Advogada.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
