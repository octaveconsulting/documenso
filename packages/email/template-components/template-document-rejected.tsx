import { Button, Heading, Text } from '../components';

export interface TemplateDocumentRejectedProps {
  documentName: string;
  recipientName: string;
  rejectionReason?: string;
  documentUrl: string;
}

export function TemplateDocumentRejected({
  documentName,
  recipientName: signerName,
  rejectionReason,
  documentUrl,
}: TemplateDocumentRejectedProps) {
  return (
    <div className="mt-4">
      {/* Titre principal */}
      <Heading className="mb-4 text-center font-semibold text-2xl text-foreground">
        Document refusé
      </Heading>

      {/* Message de notification */}
      <Text className="mb-4 text-center text-base">
        {signerName} a refusé de signer le document « {documentName} ».
      </Text>

      {/* Motif du refus (optionnel) */}
      {rejectionReason && (
        <Text className="mb-4 text-center text-base text-muted-foreground">
          Motif du refus : {rejectionReason}
        </Text>
      )}

      {/* Explication */}
      <Text className="mb-6 text-center text-base">
        Vous pouvez consulter le document et les détails de son statut en cliquant sur le bouton ci-dessous.
      </Text>

      {/* Bouton d'action */}
      <div className="text-center">
        <Button
          href={documentUrl}
          className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
          style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
        >
          Consulter le document
        </Button>
      </div>
    </div>
  );
}

export default TemplateDocumentRejected;
