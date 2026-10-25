import { Body, Button, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

export type OrganisationInviteEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  senderName: string;
  organisationName: string;
  token: string;
};

export const OrganisationInviteEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  baseUrl = 'https://sign.octave.consulting',
  senderName = 'Un collaborateur',
  organisationName = 'Nom de l’organisation',
  token = '',
}: OrganisationInviteEmailProps) => {
  const previewText = "Accepter l'invitation à rejoindre une organisation sur Signature";

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background text-muted-foreground">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section>
              <TemplateImage className="mx-auto" assetBaseUrl={assetBaseUrl} staticAsset="add-user.png" />
            </Section>

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">
                Rejoindre {organisationName} sur Signature
              </Text>

              <Text className="my-1 text-center text-base">
                Vous avez été invité à rejoindre l'organisation suivante :
              </Text>

              <div className="mx-auto my-2 w-fit rounded-lg bg-muted px-4 py-2 font-medium text-base text-muted-foreground">
                {organisationName}
              </div>

              <Text className="my-1 text-center text-base">
                par <span className="text-foreground">{senderName}</span>
              </Text>

              <Section className="mt-6 mb-6 text-center">
                <Button
                  className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
                  href={`${baseUrl}/organisation/invite/${token}`}
                  style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
                >
                  Accepter
                </Button>
                <Button
                  className="ml-4 inline-flex items-center justify-center rounded-lg bg-muted px-6 py-3 text-center font-medium text-muted-foreground text-sm no-underline"
                  href={`${baseUrl}/organisation/decline/${token}`}
                >
                  Refuser
                </Button>
              </Section>
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

export default OrganisationInviteEmailTemplate;
