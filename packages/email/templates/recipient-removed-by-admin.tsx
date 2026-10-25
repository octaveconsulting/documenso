import { Body, Container, Head, Hr, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import {
  TemplateRecipientRemovedByAdmin,
  type TemplateRecipientRemovedByAdminProps,
} from '../template-components/template-recipient-removed-by-admin';

export type RecipientRemovedByAdminEmailTemplateProps = Partial<TemplateRecipientRemovedByAdminProps>;

export const RecipientRemovedByAdminEmailTemplate = ({
  audience = 'recipient',
  documentName = 'Document.pdf',
  recipientName = 'Un destinataire',
  recipientEmail = 'destinataire@exemple.fr',
  assetBaseUrl = 'https://sign.octave.consulting',
}: RecipientRemovedByAdminEmailTemplateProps) => {
  const previewText =
    audience === 'recipient'
      ? `Un administrateur vous a retiré du document « ${documentName} ».`
      : `« ${recipientName} » a été retiré du document « ${documentName} » par un administrateur.`;

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateRecipientRemovedByAdmin
                audience={audience}
                documentName={documentName}
                recipientName={recipientName}
                recipientEmail={recipientEmail}
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

export default RecipientRemovedByAdminEmailTemplate;
