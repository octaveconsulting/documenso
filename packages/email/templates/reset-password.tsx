import type { TPasswordChangeSource } from '@documenso/lib/jobs/definitions/emails/send-password-reset-success-email';

import { Body, Container, Head, Hr, Html, Link, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import type { TemplateResetPasswordProps } from '../template-components/template-reset-password';
import { TemplateResetPassword } from '../template-components/template-reset-password';

export type ResetPasswordTemplateProps = Partial<TemplateResetPasswordProps> & {
  source?: TPasswordChangeSource;
};

export const ResetPasswordTemplate = ({
  userName = 'Un utilisateur',
  userEmail = 'support@octave.consulting',
  assetBaseUrl = 'https://sign.octave.consulting',
  source = 'RESET',
}: ResetPasswordTemplateProps) => {
  const previewText =
    source === 'RESET' ? 'Réinitialisation du mot de passe réussie' : 'Votre mot de passe a été modifié';

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateResetPassword userName={userName} userEmail={userEmail} assetBaseUrl={assetBaseUrl} />
            </Section>
          </Container>

          <Container className="mx-auto mt-12 max-w-xl">
            <Section>
              <Text className="my-4 font-semibold text-base">
                Bonjour {userName}{' '}
                <Link className="font-normal text-muted-foreground" href={`mailto:${userEmail}`}>
                  ({userEmail})
                </Link>
              </Text>

              {source === 'RESET' ? (
                <>
                  <Text className="mt-2 text-base text-muted-foreground">
                    Votre mot de passe a bien été modifié selon votre demande. Vous pouvez dès à présent vous connecter avec votre nouveau mot de passe.
                  </Text>
                  <Text className="mt-2 text-base text-muted-foreground">
                    Vous n'êtes pas à l'origine de cette demande ? Nous sommes là pour vous aider à sécuriser votre compte,{' '}
                    <Link className="font-normal text-primary" href="mailto:support@octave.consulting">
                      contactez-nous
                    </Link>
                    .
                  </Text>
                </>
              ) : (
                <>
                  <Text className="mt-2 text-base text-muted-foreground">
                    Votre mot de passe vient d'être modifié depuis les paramètres de sécurité de votre compte.
                  </Text>
                  <Text className="mt-2 text-base text-muted-foreground">
                    S'il s'agit de vous, aucune action n'est requise. Dans le cas contraire, réinitialisez immédiatement votre mot de passe et{' '}
                    <Link className="font-normal text-primary" href="mailto:support@octave.consulting">
                      contactez-nous
                    </Link>
                    .
                  </Text>
                </>
              )}
            </Section>
          </Container>

          <Hr className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter isDocument={false} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default ResetPasswordTemplate;
