export const WHATSAPP_NUMBER = '5562984227130';
export const WHATSAPP_DISPLAY = '62 8422-7130';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = WHATSAPP_NUMBER
): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function trackWhatsAppClick(origin: string): void {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXX/YYYYYYYYYYY',
        event_category: 'WhatsApp',
        event_label: origin,
      });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        cta_location: origin,
      });
    }
  } catch {
    // Analytics fallback
  }
}

export function formatBrazilianPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length > 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length > 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 2) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length > 0) {
    return `(${digits}`;
  }
  return '';
}

export function isValidBrazilianPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
}
