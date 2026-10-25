import { RecipientRole } from '@prisma/client';
import { match } from 'ts-pattern';

import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentReminderProps {
  recipientName: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl: string;
  role: RecipientRole;
}

const ROLE_ACTION_VERB_FR: Record<RecipientRole, string> = {
  [RecipientRole.SIGNER]: 'signer',
  [RecipientRole.VIEWER]: 'consulter',
  [RecipientRole.APPROVER]: 'approuver',
  [RecipientRole.ASSISTANT]: 'compléter',
  [RecipientRole.CC]: 'consulter',
};

export const TemplateDocumentReminder = ({
  recipientName,
  documentName,
  signDocumentLink,
  assetBaseUrl,
  role,
}: TemplateDocumentReminderProps) => {
  const actionVerb = ROLE_ACTION_VERB_FR[role] ?? 'consulter';

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Rappel : Veuillez {actionVerb} votre document
          <br />"{documentName}"
        </Text>

        {/* Salutation */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Bonjour {recipientName},
        </Text>

        {/* Sous-titre indicatif */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          {match(role)
            .with(RecipientRole.SIGNER, () => 'Continuez en signant le document.')
            .with(RecipientRole.VIEWER, () => 'Continuez en consultant le document.')
            .with(RecipientRole.APPROVER, () => 'Continuez en approuvant le document.')
            .with(RecipientRole.CC, () => '')
            .with(RecipientRole.ASSISTANT, () => 'Continuez en complétant le document.')
            .exhaustive()}
        </Text>

        {/* Bouton d'action principal */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={signDocumentLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            {match(role)
              .with(RecipientRole.SIGNER, () => 'Signer le document')
              .with(RecipientRole.VIEWER, () => 'Consulter le document')
              .with(RecipientRole.APPROVER, () => 'Approuver le document')
              .with(RecipientRole.CC, () => '')
              .with(RecipientRole.ASSISTANT, () => 'Préparer le document')
              .exhaustive()}
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentReminder;
