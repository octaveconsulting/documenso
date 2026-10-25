import { Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentCancelProps {
  inviterName: string;
  inviterEmail: string;
  documentName: string;
  assetBaseUrl: string;
  cancellationReason?: string;
}

export const TemplateDocumentCancel = ({
  inviterName,
  documentName,
  assetBaseUrl,
  cancellationReason,
}: TemplateDocumentCancelProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          {inviterName} a annulé le document
          <br />« {documentName} »
        </Text>

        {/* Précisions sur l'annulation */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Toutes les signatures associées ont été invalidées.
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          Aucune action n'est plus requise de votre part.
        </Text>

        {/* Motif d'annulation optionnel */}
        {cancellationReason && (
          <Text className="mt-4 text-center text-base text-foreground">
            Motif de l'annulation : {cancellationReason}
          </Text>
        )}
      </Section>
    </>
  );
};

export default TemplateDocumentCancel;
