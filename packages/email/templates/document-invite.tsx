import type { RecipientRole } from '@prisma/client';
import { OrganisationType } from '@prisma/client';

import { Body, Container, Head, Hr, Html, Link, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateCustomMessageBody } from '../template-components/template-custom-message-body';
import type { TemplateDocumentInviteProps } from '../template-components/template-document-invite';
import { TemplateDocumentInvite } from '../template-components/template-document-invite';
import { TemplateFooter } from '../template-components/template-footer';
import { TemplateNewAccountWarning } from '../template-components/template-new-account-warning';

export type DocumentInviteEmailTemplateProps = Partial<TemplateDocumentInviteProps> & {
  customBody?: string;
  role: RecipientRole;
  selfSigner?: boolean;
  teamName?: string;
  teamEmail?: string;
  includeSenderDetails?: boolean;
  organisationType?: OrganisationType;
  reportUrl?: string;

  /**
   * The user's own email, not a team email, so the recipient can verify who
   * actually contacted them.
   */
  newAccountWarningSenderEmail?: string;
};

const ROLE_ACTION_VERB_FR: Record<string, string> = {
  SIGNER: 'signer',
  VIEWER: 'consulter',
  APPROVER: 'approuver',
  CC: 'recevoir en copie',
};

export const DocumentInviteEmailTemplate = ({
  inviterName = 'Un collaborateur',
  inviterEmail = 'support@octave.consulting',
  documentName = 'Document.pdf',
  signDocumentLink = 'https://sign.octave.consulting',
  assetBaseUrl = 'https://sign.octave.consulting',
  customBody,
  role,
  selfSigner = false,
  teamName = '',
  includeSenderDetails,
  organisationType,
  reportUrl,
  newAccountWarningSenderEmail,
}: DocumentInviteEmailTemplateProps) => {
  const action = ROLE_ACTION_VERB_FR[role] ?? 'signer';

  let previewText = `${inviterName} vous a invité à ${action} « ${documentName} »`;

  if (organisationType === OrganisationType.ORGANISATION) {
    previewText = includeSenderDetails
      ? `${inviterName} au nom de « ${teamName} » vous a invité à ${action} « ${documentName} »`
      : `${teamName} vous a invité à ${action} « ${documentName} »`;
  }

  if (selfSigner) {
    previewText = `Veuillez ${action} votre document « ${documentName} »`;
  }

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          {newAccountWarningSenderEmail && (
            <TemplateNewAccountWarning senderEmail={newAccountWarningSenderEmail} reportUrl={reportUrl} />
          )}

          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentInvite
                inviterName={inviterName}
                inviterEmail={inviterEmail}
                documentName={documentName}
                signDocumentLink={signDocumentLink}
                assetBaseUrl={assetBaseUrl}
                role={role}
                selfSigner={selfSigner}
                organisationType={organisationType}
                teamName={teamName}
                includeSenderDetails={includeSenderDetails}
              />
            </Section>
          </Container>

          <Container className="mx-auto mt-12 max-w-xl">
            <Section>
              {organisationType === OrganisationType.PERSONAL && (
                <Text className="my-4 font-semibold text-base">
                  {inviterName}{' '}
                  <Link className="font-normal text-muted-foreground" href={`mailto:${inviterEmail}`}>
                    ({inviterEmail})
                  </Link>
                </Text>
              )}

              <Text className="mt-2 text-base text-muted-foreground">
                {customBody ? (
                  <TemplateCustomMessageBody text={customBody} />
                ) : (
                  `${inviterName} vous a invité à ${action} le document « ${documentName} ».`
                )}
              </Text>
            </Section>
          </Container>

          <Hr className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentInviteEmailTemplate;
