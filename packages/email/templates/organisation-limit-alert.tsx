import { SUPPORT_EMAIL } from '@documenso/lib/constants/app';
import { match } from 'ts-pattern';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';

export type OrganisationLimitAlertEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
  counter: 'document' | 'email' | 'api';
  kind: 'rateLimit' | 'quota' | 'quotaNearing';
  period: string;
};

export const OrganisationLimitAlertEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  organisationName = 'Nom de l’organisation',
  counter = 'email',
  kind = 'quota',
  period = '2026-05',
}: OrganisationLimitAlertEmailProps) => {
  const previewText =
    kind === 'quotaNearing'
      ? 'Vous approchez des limites de votre forfait'
      : 'Vérification de votre organisation requise';

  const supportContact = SUPPORT_EMAIL || 'support@octave.consulting';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background text-muted-foreground">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">
                {kind === 'quotaNearing'
                  ? 'Vous approchez des limites de votre forfait'
                  : 'Vérification de votre organisation requise'}
              </Text>

              <div className="mx-auto my-2 w-fit rounded-lg bg-muted px-4 py-2 font-medium text-base text-muted-foreground">
                {organisationName}
              </div>

              {match(kind)
                .with('quota', () => (
                  <Text className="text-center text-base">
                    {match(counter)
                      .with('document', () => (
                        <>
                          Nous avons constaté sur votre compte une activité liée aux documents qui dépasse les limites d'utilisation équitable de votre forfait actuel. Par mesure de précaution, la création de nouveaux documents a été temporairement suspendue en attente d'un examen.
                        </>
                      ))
                      .with('email', () => (
                        <>
                          Nous avons constaté sur votre compte des envois d'e-mails qui dépassent les limites d'utilisation équitable de votre forfait actuel. Par mesure de précaution, les nouveaux envois d'e-mails ont été temporairement suspendus en attente d'un examen.
                        </>
                      ))
                      .with('api', () => (
                        <>
                          Nous avons constaté sur votre compte une activité API qui dépasse les limites d'utilisation équitable de votre forfait actuel. Par mesure de précaution, les nouveaux appels API ont été temporairement suspendus en attente d'un examen.
                        </>
                      ))
                      .exhaustive()}
                  </Text>
                ))
                .with('rateLimit', () => (
                  <Text className="text-center text-base">
                    {match(counter)
                      .with('document', () => (
                        <>
                          Votre organisation génère des documents plus rapidement que la normale. Certaines requêtes sont temporairement ralenties.
                        </>
                      ))
                      .with('email', () => (
                        <>
                          Votre organisation génère des e-mails plus rapidement que la normale. Certaines requêtes sont temporairement ralenties.
                        </>
                      ))
                      .with('api', () => (
                        <>
                          Votre organisation effectue des requêtes API plus rapidement que la normale. Certaines requêtes sont temporairement ralenties.
                        </>
                      ))
                      .exhaustive()}
                  </Text>
                ))
                .with('quotaNearing', () => (
                  <Text className="text-center text-base">
                    {match(counter)
                      .with('document', () => (
                        <>
                          Votre organisation approche des limites d'utilisation pour la création de documents sur votre forfait actuel. Une fois la limite atteinte, la création de documents sera temporairement suspendue.
                        </>
                      ))
                      .with('email', () => (
                        <>
                          Votre organisation approche des limites d'envoi d'e-mails sur votre forfait actuel. Une fois la limite atteinte, les nouveaux envois seront temporairement suspendus.
                        </>
                      ))
                      .with('api', () => (
                        <>
                          Votre organisation approche des limites de requêtes API sur votre forfait actuel. Une fois la limite atteinte, les nouveaux appels API seront temporairement suspendus.
                        </>
                      ))
                      .exhaustive()}
                  </Text>
                ))
                .exhaustive()}

              <Text className="text-center text-base">
                {kind === 'quotaNearing' ? (
                  <>
                    Si vous prévoyez d'avoir besoin de limites supérieures, veuillez contacter le support à l'adresse {supportContact} afin que nous puissions examiner votre compte.
                  </>
                ) : (
                  <>
                    Veuillez contacter le support à l'adresse {supportContact} afin que nous puissions examiner votre compte.
                  </>
                )}
              </Text>
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

export default OrganisationLimitAlertEmailTemplate;
