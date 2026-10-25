import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

export type OrganisationDeleteEmailProps = {
  assetBaseUrl: string;
  organisationName: string;
  /**
   * Whether the deletion was performed by an administrator (as opposed to the owner).
   * Slightly changes the wording in the email.
   */
  deletedByAdmin?: boolean;
};

export const OrganisationDeleteEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  organisationName = 'Nom de l’organisation',
  deletedByAdmin = false,
}: OrganisationDeleteEmailProps) => {
  const previewText = 'Votre organisation a été supprimée';
  const title = 'Votre organisation a été supprimée';

  const description = deletedByAdmin
    ? "L'organisation suivante a été supprimée par un administrateur. Vous et vos membres n'aurez plus accès à cette organisation, à ses équipes ni à ses données associées."
    : "L'organisation suivante a été supprimée. Vous et vos membres n'aurez plus accès à cette organisation, à ses équipes ni à ses données associées.";

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background text-muted-foreground">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section>
              <TemplateImage className="mx-auto" assetBaseUrl={assetBaseUrl} staticAsset="delete-team.png" />
            </Section>

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">{title}</Text>

              <Text className="my-1 text-center text-base">{description}</Text>

              <div className="mx-auto my-2 w-fit rounded-lg bg-muted px-4 py-2 font-medium text-base text-muted-foreground">
                {organisationName}
              </div>
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

export default OrganisationDeleteEmailTemplate;
