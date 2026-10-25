import { formatTeamUrl } from '@documenso/lib/utils/teams';

import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';
import TemplateImage from '../template-components/template-image';

export type ConfirmTeamEmailProps = {
  assetBaseUrl: string;
  baseUrl: string;
  teamName: string;
  teamUrl: string;
  token: string;
};

export const ConfirmTeamEmailTemplate = ({
  assetBaseUrl = 'https://sign.octave.consulting',
  baseUrl = 'https://sign.octave.consulting',
  teamName = 'Nom de l’équipe',
  teamUrl = 'demo',
  token = '',
}: ConfirmTeamEmailProps) => {
  const previewText = `Demande d'utilisation de votre adresse e-mail par l'équipe ${teamName} sur Signature`;

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid px-2 pt-2 backdrop-blur-sm">
            <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6 p-2" />

            <Section>
              <TemplateImage className="mx-auto" assetBaseUrl={assetBaseUrl} staticAsset="mail-open.png" />
            </Section>

            <Section className="p-2 text-muted-foreground">
              <Text className="text-center font-medium text-foreground text-lg">
                Vérifiez l'adresse e-mail de votre équipe
              </Text>

              <Text className="text-center text-base">
                <span className="font-bold">{teamName}</span> a demandé à utiliser votre adresse e-mail pour son équipe sur Signature.
              </Text>

              <div className="mx-auto mt-6 w-fit rounded-lg bg-muted px-4 py-2 font-medium text-base text-muted-foreground">
                {formatTeamUrl(teamUrl, baseUrl)}
              </div>

              <Section className="mt-6">
                <Text className="my-0 text-sm">
                  En acceptant cette demande, vous autorisez <strong>{teamName}</strong> à :
                </Text>

                <ul className="mt-2 mb-0">
                  <li className="text-sm">
                    Consulter tous les documents envoyés à et depuis cette adresse e-mail
                  </li>
                  <li className="mt-1 text-sm">
                    Permettre aux destinataires de répondre directement à cette adresse e-mail
                  </li>
                  <li className="mt-1 text-sm">
                    Envoyer des documents au nom de l'équipe via cette adresse e-mail
                  </li>
                </ul>

                <Text className="mt-2 text-sm">
                  Vous pouvez révoquer cet accès à tout moment dans les paramètres de votre équipe sur Signature{' '}
                  <Link href={`${baseUrl}/settings/teams`} className="text-[#3cb9c9] underline" style={{ color: '#3cb9c9' }}>
                    ici
                  </Link>.
                </Text>
              </Section>

              <Section className="mt-8 mb-6 text-center">
                <Button
                  className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
                  href={`${baseUrl}/team/verify/email/${token}`}
                  style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
                >
                  Accepter
                </Button>
              </Section>
            </Section>

            <Text className="text-center text-muted-foreground text-xs">
              Ce lien expirera dans 1 heure.
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

export default ConfirmTeamEmailTemplate;
