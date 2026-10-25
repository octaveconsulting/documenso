import { formatTeamUrl } from '@documenso/lib/utils/teams';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

export type TeamDeleteEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  teamUrl: string;
};

export const TeamDeleteEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  baseUrl = 'https://sign.octave.consulting',
  teamUrl = 'demo',
}: TeamDeleteEmailProps) => {
  const previewText = 'Une équipe dont vous faisiez partie a été supprimée';
  const title = 'Une équipe dont vous faisiez partie a été supprimée';
  const description =
    "L'équipe suivante a été supprimée. Vous n'aurez plus accès à cette équipe ni à ses documents.";

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
                {formatTeamUrl(teamUrl, baseUrl)}
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

export default TeamDeleteEmailTemplate;
