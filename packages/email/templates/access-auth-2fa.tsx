import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateAccessAuth2FA } from '../template-components/template-access-auth-2fa';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateFooter } from '../template-components/template-footer';

export type AccessAuth2FAEmailTemplateProps = {
  documentTitle: string;
  code: string;
  userEmail: string;
  userName: string;
  expiresInMinutes: number;
  assetBaseUrl?: string;
};

export const AccessAuth2FAEmailTemplate = ({
  documentTitle,
  code,
  userEmail,
  userName,
  expiresInMinutes,
  assetBaseUrl = 'https://sign.octave.consulting',
}: AccessAuth2FAEmailTemplateProps) => {
  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{`Votre code de vérification : ${code}`}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateAccessAuth2FA
                documentTitle={documentTitle}
                code={code}
                userEmail={userEmail}
                userName={userName}
                expiresInMinutes={expiresInMinutes}
                assetBaseUrl={assetBaseUrl}
              />
            </Section>
          </Container>

          <div className="mx-auto mt-12 max-w-xl" />

          <Container className="mx-auto max-w-xl">
            <TemplateFooter isDocument={false} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default AccessAuth2FAEmailTemplate;
