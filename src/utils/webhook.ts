export const MAKE_WEBHOOK_URL = 'https://hook.eu1.make.com/livr7ye1rxlg76i0bjdb463t3kd82cut';

export type WebhookPath = 'demo' | 'newsletter' | 'trial';

export interface WebhookSubmissionPayload {
  path: WebhookPath;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  useCase?: string;
  plan?: string;
}

export async function submitToWebhook(payload: WebhookSubmissionPayload): Promise<void> {
  const response = await fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook request failed (${response.status})`);
  }
}
