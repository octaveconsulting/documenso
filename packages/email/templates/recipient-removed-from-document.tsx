import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import type { TemplateDocumentCancelProps } from '../template-components/template-document-cancel';
import TemplateDocumentImage from '../template-components/template-document-image';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCancelEmailTemplateProps = Partial<TemplateDocumentCancelProps>;

export const RecipientRemovedFromDocumentTemplate = ({
  inviterName = 'Un collaborateur',
  documentName = 'Document.pdf',
  assetBaseUrl = 'https://sign.octave.consulting',
}: DocumentCancelEmailTemplateProps) => {
  const previewText = `${inviterName} vous a retiré du document « ${documentName} ».`;

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

              <Section>
                <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
                  {inviterName} vous a retiré du document
                  <br />« {documentName} »
                </Text>
              </Section>
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

export default RecipientRemovedFromDocumentTemplate;
