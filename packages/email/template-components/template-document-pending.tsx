import { Column, Img, Section, Text } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentPendingProps {
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentPending = ({ documentName, assetBaseUrl }: TemplateDocumentPendingProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Statut avec icône d'horloge */}
        <Section className="mb-4">
          <Column align="center">
            <Text className="font-semibold text-base text-foreground">
              <Img
                src={getEmailAssetUrl(assetBaseUrl, 'static/clock.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
                alt=""
              />
              En attente des autres signataires
            </Text>
          </Column>
        </Section>

        {/* Titre principal */}
        <Text className="mb-0 text-center font-semibold text-foreground text-lg">
          « {documentName} » a été signé
        </Text>

        {/* Message d'attente */}
        <Text className="mx-auto mt-1 mb-6 max-w-[80%] text-center text-base text-muted-foreground">
          Nous attendons encore la signature des autres participants.
          <br />
          Vous recevrez une notification avec le document final dès qu'il sera complété.
        </Text>
      </Section>
    </>
  );
};

export default TemplateDocumentPending;
