import { OrganisationType, RecipientRole } from '@prisma/client';
import { match, P } from 'ts-pattern';

import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentInviteProps {
  inviterName: string;
  inviterEmail: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl: string;
  role: RecipientRole;
  selfSigner: boolean;
  teamName?: string;
  includeSenderDetails?: boolean;
  organisationType?: OrganisationType;
}

const ROLE_ACTION_VERB_FR: Record<RecipientRole, string> = {
  [RecipientRole.SIGNER]: 'signer',
  [RecipientRole.VIEWER]: 'consulter',
  [RecipientRole.APPROVER]: 'approuver',
  [RecipientRole.ASSISTANT]: 'compléter',
  [RecipientRole.CC]: 'consulter',
};

export const TemplateDocumentInvite = ({
  inviterName,
  documentName,
  signDocumentLink,
  assetBaseUrl,
  role,
  selfSigner,
  teamName,
  includeSenderDetails,
  organisationType,
}: TemplateDocumentInviteProps) => {
  const actionVerb = ROLE_ACTION_VERB_FR[role] ?? 'consulter';

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        {/* Titre dynamique selon le rôle et l'expéditeur */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          {match({ selfSigner, organisationType, includeSenderDetails, teamName })
            .with({ selfSigner: true }, () => (
              <>
                Veuillez {actionVerb} votre document
                <br />"{documentName}"
              </>
            ))
            .with(
              {
                organisationType: OrganisationType.ORGANISATION,
                includeSenderDetails: true,
                teamName: P.string,
              },
              () => (
                <>
                  {inviterName} au nom de "{teamName}" vous invite à {actionVerb}
                  <br />"{documentName}"
                </>
              ),
            )
            .with({ organisationType: OrganisationType.ORGANISATION, teamName: P.string }, () => (
              <>
                {teamName} vous invite à {actionVerb}
                <br />"{documentName}"
              </>
            ))
            .otherwise(() => (
              <>
                {inviterName} vous invite à {actionVerb}
                <br />"{documentName}"
              </>
            ))}
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
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-base text-white no-underline"
            href={signDocumentLink}
            style={{ backgroundColor: '#3cb9c9' }}
          >
            {match(role)
              .with(RecipientRole.SIGNER, () => 'Consulter et signer le document')
              .with(RecipientRole.VIEWER, () => 'Consulter le document')
              .with(RecipientRole.APPROVER, () => 'Consulter et approuver le document')
              .with(RecipientRole.CC, () => '')
              .with(RecipientRole.ASSISTANT, () => 'Consulter et préparer le document')
              .exhaustive()}
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentInvite;
