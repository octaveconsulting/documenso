import { SUPPORT_EMAIL } from '@documenso/lib/constants/app';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';

export const ORGANISATION_LIMITS_UPDATED_SUBJECT =
  'Les limites de votre organisation ont été mises à jour';

export type OrganisationLimitsUpdatedEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
};

export const OrganisationLimitsUpdatedEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  organisationName = 'Nom de l’organisation',
}: OrganisationLimitsUpdatedEmailProps) => {
  const supportContact = SUPPORT_EMAIL || 'support@octave.consulting';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{ORGANISATION_LIMITS_UPDATED_SUBJECT}</Preview>

        <Section className="bg-background text-muted-foreground">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">
                {ORGANISATION_LIMITS_UPDATED_SUBJECT}
              </Text>

              <div className="mx-auto my-2 w-fit rounded-lg bg-muted px-4 py-2 font-medium text-base text-muted-foreground">
                {organisationName}
              </div>

              <Text className="text-center text-base">
                Nous avons mis à jour les limites d'utilisation de votre organisation.
              </Text>

              <Text className="text-center text-base">
                Si vous avez récemment reçu un e-mail concernant vos limites d'utilisation, cette modification fait suite à cette situation.
              </Text>

              <Text className="text-center text-base">
                Pour toute question, veuillez contacter le support à l'adresse {supportContact}.
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

export default OrganisationLimitsUpdatedEmailTemplate;
