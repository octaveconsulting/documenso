import { Column, Img, Section, Text } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentRecipientSignedProps {
  documentName: string;
  recipientName: string;
  recipientEmail: string;
  assetBaseUrl: string;
}

export const TemplateDocumentRecipientSigned = ({
  documentName,
  recipientName,
  recipientEmail,
  assetBaseUrl,
}: TemplateDocumentRecipientSignedProps) => {
  const recipientReference = recipientName || recipientEmail;

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Statut avec icône de complétion */}
        <Section className="mb-4">
          <Column align="center">
            <Text className="font-semibold text-base text-foreground">
              <Img
                src={getEmailAssetUrl(assetBaseUrl, 'static/completed.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
                alt=""
              />
              Signature apposée
            </Text>
          </Column>
        </Section>

        {/* Titre principal */}
        <Text className="mb-0 text-center font-semibold text-foreground text-lg">
          {recipientReference} a signé le document « {documentName} »
        </Text>

        {/* Message d'information */}
        <Text className="mx-auto mt-1 mb-6 max-w-[80%] text-center text-base text-muted-foreground">
          {recipientReference} a finalisé la signature de son côté.
        </Text>
      </Section>
    </>
  );
};

export default TemplateDocumentRecipientSigned;
