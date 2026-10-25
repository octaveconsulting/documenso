import { Heading, Img, Section, Text } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';

export type TemplateAccessAuth2FAProps = {
  documentTitle: string;
  code: string;
  userEmail: string;
  userName: string;
  expiresInMinutes: number;
  assetBaseUrl?: string;
};

export const TemplateAccessAuth2FA = ({
  documentTitle,
  code,
  userName,
  expiresInMinutes,
  assetBaseUrl = 'https://sign.octave.consulting',
}: TemplateAccessAuth2FAProps) => {
  return (
    <div>
      <Img
        src={getEmailAssetUrl(assetBaseUrl, 'static/document.png')}
        alt="Document"
        className="mx-auto h-12 w-12"
      />

      <Section className="mt-8">
        {/* Titre principal */}
        <Heading className="text-center font-semibold text-foreground text-lg">
          Code de vérification requis
        </Heading>

        {/* Message explicatif */}
        <Text className="mt-2 text-center text-foreground">
          Bonjour {userName}, veuillez saisir le code de vérification suivant pour accéder au document « {documentTitle} » et finaliser sa signature.
        </Text>

        {/* Bloc d'affichage du code */}
        <Section className="mt-6 rounded-lg bg-muted p-6 text-center">
          <Text className="mb-2 font-medium text-muted-foreground text-sm">
            Votre code de vérification :
          </Text>
          <Text className="font-bold text-2xl text-foreground tracking-wider">{code}</Text>
        </Section>

        {/* Expiration */}
        <Text className="mt-4 text-center text-muted-foreground text-sm">
          {expiresInMinutes === 1
            ? `Ce code expirera dans ${expiresInMinutes} minute.`
            : `Ce code expirera dans ${expiresInMinutes} minutes.`}
        </Text>

        {/* Mention de sécurité */}
        <Text className="mt-4 text-center text-muted-foreground text-sm">
          Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet e-mail en toute sécurité.
        </Text>
      </Section>
    </div>
  );
};

export default TemplateAccessAuth2FA;
