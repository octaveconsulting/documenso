import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateConfirmationEmailProps = {
  confirmationLink: string;
  assetBaseUrl: string;
};

export const TemplateConfirmationEmail = ({ confirmationLink, assetBaseUrl }: TemplateConfirmationEmailProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Bienvenue sur Signature !
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          Avant de commencer, veuillez confirmer votre adresse e-mail en cliquant sur le bouton ci-dessous :
        </Text>

        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={confirmationLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            Confirmer mon e-mail
          </Button>

          <Text className="mt-8 text-center text-muted-foreground text-sm italic">
            Vous pouvez également copier et coller ce lien dans votre navigateur : {confirmationLink} (ce lien expire dans 1 heure)
          </Text>
        </Section>
      </Section>
    </>
  );
};

export default TemplateConfirmationEmail;
