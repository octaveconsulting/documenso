import { Body, Container, Head, Hr, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import type { TemplateRecipientExpiredProps } from '../template-components/template-recipient-expired';
import { TemplateRecipientExpired } from '../template-components/template-recipient-expired';

export type RecipientExpiredEmailTemplateProps = Partial<TemplateRecipientExpiredProps>;

export const RecipientExpiredTemplate = ({
  documentName = 'Document.pdf',
  recipientName = 'Un destinataire',
  recipientEmail = 'destinataire@exemple.fr',
  documentLink = 'https://sign.octave.consulting',
  assetBaseUrl = 'https://sign.octave.consulting',
}: RecipientExpiredEmailTemplateProps) => {
  const previewText = `Le délai de signature accordé à « ${recipientName} » pour le document « ${documentName} » a expiré.`;

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateRecipientExpired
                documentName={documentName}
                recipientName={recipientName}
                recipientEmail={recipientEmail}
                documentLink={documentLink}
                assetBaseUrl={assetBaseUrl}
              />
            </Section>
          </Container>

          <Hr className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default RecipientExpiredTemplate;
