import { Body, Button, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

type OrganisationAccountLinkConfirmationTemplateProps = {
  type: 'create' | 'link';
  confirmationLink: string;
  organisationName: string;
  assetBaseUrl: string;
};

export const OrganisationAccountLinkConfirmationTemplate = ({
  type = 'link',
  confirmationLink = '<CONFIRMATION_LINK>',
  organisationName = '<ORGANISATION_NAME>',
  assetBaseUrl = 'https://sign.octave.consulting',
}: OrganisationAccountLinkConfirmationTemplateProps) => {
  const previewText =
    type === 'create'
      ? 'Une demande a été effectuée pour créer un compte à votre nom'
      : 'Une demande a été effectuée pour associer votre compte Signature';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid px-2 pt-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section>
              <TemplateImage className="mx-auto h-12 w-12" assetBaseUrl={assetBaseUrl} staticAsset="building-2.png" />
            </Section>

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">
                {type === 'create' ? 'Demande de création de compte' : 'Associez votre compte Signature'}
              </Text>

              <Text className="text-center text-base">
                {type === 'create' ? (
                  <>
                    <span className="font-bold">{organisationName}</span> a demandé à créer un compte en votre nom.
                  </>
                ) : (
                  <>
                    <span className="font-bold">{organisationName}</span> a demandé à associer votre compte Signature actuel à son organisation.
                  </>
                )}
              </Text>

              <Section className="mt-8 mb-6 text-center">
                <Button
                  className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
                  href={confirmationLink}
                  style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
                >
                  Examiner la demande
                </Button>
              </Section>
            </Section>

            <Text className="text-center text-muted-foreground text-xs">
              Ce lien expirera dans 30 minutes.
            </Text>
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

export default OrganisationAccountLinkConfirmationTemplate;
