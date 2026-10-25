import { Button, Column, Img, Section, Text } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentCompletedProps {
  downloadLink: string;
  documentName: string;
  assetBaseUrl: string;
  customBody?: string;
}

export const TemplateDocumentCompleted = ({
  downloadLink,
  documentName,
  assetBaseUrl,
  customBody,
}: TemplateDocumentCompletedProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Statut avec icône de confirmation */}
        <Section className="mb-4">
          <Column align="center">
            <Text className="font-semibold text-base text-foreground">
              <Img
                src={getEmailAssetUrl(assetBaseUrl, 'static/completed.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
                alt=""
              />
              Document finalisé
            </Text>
          </Column>
        </Section>

        {/* Titre principal */}
        <Text className="mb-0 text-center font-semibold text-foreground text-lg">
          {customBody || <>« {documentName} » a été signé par l'ensemble des parties</>}
        </Text>

        {/* Sous-titre indicatif */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Vous pouvez dès à présent télécharger votre exemplaire scellé.
        </Text>

        {/* Bouton de téléchargement */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={downloadLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            <Img
              src={getEmailAssetUrl(assetBaseUrl, 'static/download.png')}
              className="mr-2 mb-0.5 inline h-5 w-5 align-middle"
              alt=""
            />
            Télécharger le document
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentCompleted;
