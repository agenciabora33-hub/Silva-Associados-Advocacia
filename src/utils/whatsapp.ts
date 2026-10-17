import { getTrackingParams, trackAdConversion } from './analytics';

export const LAWYER_NAME = 'Dra. Juliete Silva';
export const LAWYER_NAME_PLAIN = 'Juliete Silva';
export const FIRM_NAME = 'Silva & Associados Advocacia';
export const WHATSAPP_PHONE = '5599999999999';
export const WHATSAPP_PHONE_DISPLAY = '(99) 99999-9999';
export const EMAIL_CONTACT = 'contato@silvaassociados.adv.br';
export const OFFICE_ADDRESS = 'Av. Paulista, 1800 - Conjunto 142, Bela Vista';

// Format of Service Delivery
export const ATENDIMENTO_LABEL = 'Atendimento Presencial e Online para todo o Brasil';

// Fictional Social Links & Digital Presence
export const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Silva+Associados+Advocacia';
export const GOOGLE_PROFILE_LINK = 'https://google.com/search?q=Silva+Associados+Advocacia';
export const INSTAGRAM_LINK = 'https://instagram.com/silva.associados.adv';
export const INSTAGRAM_HANDLE = '@silva.associados.adv';
export const TIKTOK_LINK = 'https://tiktok.com/@julieta.silva.adv';
export const TIKTOK_HANDLE = '@julieta.silva.adv';
export const FACEBOOK_LINK = 'https://facebook.com/silvaassociadosadvocacia';
export const FACEBOOK_NAME = 'Silva & Associados Advocacia';
export const LINKEDIN_LINK = 'https://linkedin.com/company/silva-associados-advocacia';
export const LINKEDIN_NAME = 'Silva & Associados Advocacia';

export function getWhatsAppUrl(message?: string): string {
  const defaultText =
    `Olá, ${LAWYER_NAME}! Acessei o site da ${FIRM_NAME} e gostaria de agendar uma consulta para orientação jurídica especializada.`;
  
  // Track conversion for Meta Ads & Google Ads
  trackAdConversion('Contact', { type: 'whatsapp_click' });

  // Append campaign origin if present to facilitate attribution
  const tracking = getTrackingParams();
  let finalMessage = message || defaultText;

  if (tracking.utm_source || tracking.gclid || tracking.fbclid) {
    const origin = tracking.utm_source
      ? `[Origem: ${tracking.utm_source}]`
      : tracking.gclid
      ? '[Origem: Google Ads]'
      : '[Origem: Meta Ads]';
    finalMessage = `${finalMessage}\n\n${origin}`;
  }

  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Olá, ${LAWYER_NAME}! Acessei o site da ${FIRM_NAME} e gostaria de orientação jurídica sobre: *${serviceTitle}*. Como podemos agendar?`;
  return getWhatsAppUrl(text);
}
