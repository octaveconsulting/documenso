import { Container, Heading, Section, Text } from '../components';

interface TemplateDocumentRejectionConfirmedProps {
  recipientName: string;
  documentName: string;
  documentOwnerName: string;
  reason?: string;
}

export function TemplateDocumentRejectionConfirmed({
  recipientName,
  documentName,
  documentOwnerName,
  reason,
}: TemplateDocumentRejectionConfirmedProps) {
  return (
    <Container>
      <Section>
        {/* Titre principal */}
        <Heading className="font-semibold text-2xl text-foreground">
          Refus confirmé
        </Heading>

        {/* Message de confirmation */}
        <Text className="text-base text-foreground">
          Cet e-mail confirme que vous avez refusé de signer le document{' '}
          <strong className="font-bold">« {documentName} »</strong> envoyé par {documentOwnerName}.
        </Text>

        {/* Motif du refus (optionnel) */}
        {reason && (
          <Text className="font-medium text-base text-muted-foreground">
            Motif du refus : {reason}
          </Text>
        )}

        {/* Explication et suite */}
        <Text className="text-base text-muted-foreground">
          L'expéditeur du document a été immédiatement notifié de votre refus. Aucune action supplémentaire n'est requise de votre part pour le moment. L'expéditeur pourra revenir vers vous s'il souhaite obtenir des précisions.
        </Text>
      </Section>
    </Container>
  );
}

export default TemplateDocumentRejectionConfirmed;
