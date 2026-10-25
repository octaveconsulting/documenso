import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateForgotPasswordProps = {
  resetPasswordLink: string;
  assetBaseUrl: string;
};

export const TemplateForgotPassword = ({ resetPasswordLink, assetBaseUrl }: TemplateForgotPasswordProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Mot de passe oublié ?
        </Text>

        {/* Message d'explication */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Pas d'inquiétude, cela arrive ! Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe.
        </Text>

        {/* Bouton d'action CTA */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={resetPasswordLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            Réinitialiser mon mot de passe
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateForgotPassword;
