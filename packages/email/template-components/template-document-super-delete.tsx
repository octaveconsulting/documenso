import { Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentDeleteProps {
  reason: string;
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentDelete = ({ reason, documentName, assetBaseUrl }: TemplateDocumentDeleteProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre principal */}
        <Text className="mt-6 mb-0 text-left font-semibold text-foreground text-lg">
          Votre document a été supprimé par un administrateur
        </Text>

        {/* Détails du document */}
        <Text className="mx-auto mt-1 mb-6 text-left text-base text-muted-foreground">
          Le document « {documentName} » a été supprimé par un administrateur.
        </Text>

        {/* Mention d'irréversibilité et support */}
        <Text className="mx-auto mt-1 mb-6 text-left text-base text-muted-foreground">
          Ce document ne peut pas être récupéré. Si vous souhaitez contester ce motif ou pour toute question, veuillez contacter le support.
        </Text>

        {/* Motif fourni */}
        <Text className="mx-auto mt-1 text-left text-base text-muted-foreground">
          Le motif de suppression indiqué est le suivant :
        </Text>

        <Text className="mx-auto mt-1 mb-6 text-left text-base text-muted-foreground italic">
          {reason}
        </Text>
      </Section>
    </>
  );
};

export default TemplateDocumentDelete;
