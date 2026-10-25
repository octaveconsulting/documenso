import { env } from '@documenso/lib/utils/env';

import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateResetPasswordProps {
  userName: string;
  userEmail: string;
  assetBaseUrl: string;
}

export const TemplateResetPassword = ({ assetBaseUrl }: TemplateResetPasswordProps) => {
  const NEXT_PUBLIC_WEBAPP_URL = env('NEXT_PUBLIC_WEBAPP_URL');

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Mot de passe mis à jour !
        </Text>

        {/* Message de confirmation */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Votre mot de passe a bien été modifié. Vous pouvez désormais vous connecter avec vos nouveaux identifiants.
        </Text>

        {/* Bouton de connexion */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={`${NEXT_PUBLIC_WEBAPP_URL ?? 'https://sign.octave.consulting'}/signin`}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            Se connecter
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateResetPassword;
