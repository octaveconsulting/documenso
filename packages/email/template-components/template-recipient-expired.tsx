import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateRecipientExpiredProps = {
  documentName: string;
  recipientName: string;
  recipientEmail: string;
  documentLink: string;
  assetBaseUrl: string;
};

export const TemplateRecipientExpired = ({
  documentName,
  recipientName,
  recipientEmail,
  documentLink,
  assetBaseUrl,
}: TemplateRecipientExpiredProps) => {
  const displayName = recipientName || recipientEmail;

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Délai de signature expiré pour {displayName}
          <br />
          sur « {documentName} »
        </Text>

        {/* Message d'explication */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Le délai accordé à {displayName} pour signer le document « {documentName} » a expiré. Vous pouvez renvoyer le document afin de prolonger l'échéance ou procéder à son annulation.
        </Text>

        {/* Bouton d'action CTA */}
        <Section className="my-4 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={documentLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            Consulter le document
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateRecipientExpired;
