import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import type { TemplateDocumentSelfSignedProps } from '../template-components/template-document-self-signed';
import { TemplateDocumentSelfSigned } from '../template-components/template-document-self-signed';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentSelfSignedTemplateProps = TemplateDocumentSelfSignedProps;

export const DocumentSelfSignedEmailTemplate = ({
  documentName = 'Document.pdf',
  assetBaseUrl = 'https://sign.octave.consulting',
}: DocumentSelfSignedTemplateProps) => {
  const previewText = 'Votre document a bien été signé';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <Section className="p-2">
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentSelfSigned documentName={documentName} assetBaseUrl={assetBaseUrl} />
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl">
            <TemplateFooter />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentSelfSignedEmailTemplate;
