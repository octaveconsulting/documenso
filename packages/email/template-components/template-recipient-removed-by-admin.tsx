import { Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateRecipientRemovedByAdminAudience = 'recipient' | 'owner';

export type TemplateRecipientRemovedByAdminProps = {
  audience: TemplateRecipientRemovedByAdminAudience;
  documentName: string;
  recipientName: string;
  recipientEmail: string;
  assetBaseUrl: string;
};

export const TemplateRecipientRemovedByAdmin = ({
  audience,
  documentName,
  recipientName,
  recipientEmail,
  assetBaseUrl,
}: TemplateRecipientRemovedByAdminProps) => {
  const recipientLabel =
    recipientName && recipientName !== recipientEmail ? `${recipientName} (${recipientEmail})` : recipientEmail;

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre principal adapté selon le destinataire */}
        <Text className="mt-6 mb-0 text-left font-semibold text-foreground text-lg">
          {audience === 'recipient'
            ? "Vous avez été retiré d'un document"
            : 'Un signataire a été retiré de votre document'}
        </Text>

        {/* Détails du retrait */}
        <Text className="mx-auto mt-1 mb-6 text-left text-base text-muted-foreground">
          {audience === 'recipient'
            ? `Vous avez été retiré du document « ${documentName} » par un administrateur, généralement à la demande de l'expéditeur.`
            : `${recipientLabel} a été retiré du document « ${documentName} » par un administrateur, généralement à la demande de l'expéditeur.`}
        </Text>

        {/* Consigne finale */}
        <Text className="mx-auto mt-1 mb-6 text-left text-base text-muted-foreground">
          {audience === 'recipient'
            ? "Aucune action n'est requise de votre part. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter l'expéditeur du document."
            : "Aucune action n'est requise de votre part. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter votre administrateur."}
        </Text>
      </Section>
    </>
  );
};

export default TemplateRecipientRemovedByAdmin;
