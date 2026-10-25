import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import type { TemplateDocumentCompletedProps } from '../template-components/template-document-completed';
import { TemplateDocumentCompleted } from '../template-components/template-document-completed';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCompletedEmailTemplateProps = Partial<TemplateDocumentCompletedProps> & {
  customBody?: string;
  reportUrl?: string;
};

export const DocumentCompletedEmailTemplate = ({
  downloadLink = 'https://sign.octave.consulting',
  documentName = 'Document signé.pdf',
  assetBaseUrl = 'https://sign.octave.consulting',
  customBody,
  reportUrl,
}: DocumentCompletedEmailTemplateProps) => {
  const previewText = 'Document complété et signé';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <Section className="p-2">
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentCompleted
                downloadLink={downloadLink}
                documentName={documentName}
                assetBaseUrl={assetBaseUrl}
                customBody={customBody}
              />
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentCompletedEmailTemplate;
