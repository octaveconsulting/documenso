import { RecipientRole } from '@prisma/client';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateCustomMessageBody } from '../template-components/template-custom-message-body';
import { TemplateDocumentReminder } from '../template-components/template-document-reminder';
import { TemplateFooter } from '../template-components/template-footer';
import { TemplateNewAccountWarning } from '../template-components/template-new-account-warning';

export type DocumentReminderEmailTemplateProps = {
  recipientName: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl?: string;
  customBody?: string;
  role: RecipientRole;
  reportUrl?: string;
  newAccountWarningSenderEmail?: string;
};

const ROLE_ACTION_VERB_FR: Record<string, string> = {
  SIGNER: 'signer',
  VIEWER: 'consulter',
  APPROVER: 'approuver',
  CC: 'recevoir en copie',
};

export const DocumentReminderEmailTemplate = ({
  recipientName = 'Un destinataire',
  documentName = 'Document.pdf',
  signDocumentLink = 'https://sign.octave.consulting',
  assetBaseUrl = 'https://sign.octave.consulting',
  customBody,
  role = RecipientRole.SIGNER,
  reportUrl,
  newAccountWarningSenderEmail,
}: DocumentReminderEmailTemplateProps) => {
  const action = ROLE_ACTION_VERB_FR[role] ?? 'signer';
  const previewText = `Rappel : n'oubliez pas de ${action} le document « ${documentName} »`;

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          {newAccountWarningSenderEmail && (
            <TemplateNewAccountWarning senderEmail={newAccountWarningSenderEmail} reportUrl={reportUrl} />
          )}

          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentReminder
                recipientName={recipientName}
                documentName={documentName}
                signDocumentLink={signDocumentLink}
                assetBaseUrl={assetBaseUrl}
                role={role}
              />
            </Section>
          </Container>

          {customBody && (
            <Container className="mx-auto mt-12 max-w-xl">
              <Section>
                <Text className="mt-2 text-base text-muted-foreground">
                  <TemplateCustomMessageBody text={customBody} />
                </Text>
              </Section>
            </Container>
          )}

          <Hr className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentReminderEmailTemplate;
