import { Button, Link, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateAdminUserCreatedProps = {
  resetPasswordLink: string;
  assetBaseUrl: string;
};

export const TemplateAdminUserCreated = ({ resetPasswordLink, assetBaseUrl }: TemplateAdminUserCreatedProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Bienvenue sur Signature !
        </Text>

        {/* Message d'information */}
        <Text className="my-1 text-center text-base text-muted-foreground">
          Un administrateur a créé un compte d'accès pour vous.
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          Pour commencer, veuillez définir votre mot de passe en cliquant sur le bouton ci-dessous :
        </Text>

        {/* Bouton d'action CTA */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            href={resetPasswordLink}
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            Définir mon mot de passe
          </Button>

          <Text className="mt-8 text-center text-muted-foreground text-sm italic">
            Vous pouvez également copier et coller ce lien dans votre navigateur : {resetPasswordLink} (ce lien expire dans 24 heures)
          </Text>
        </Section>

        {/* Support */}
        <Section className="mt-8">
          <Text className="text-center text-muted-foreground text-sm">
            Si vous n'attendiez pas la création de ce compte ou pour toute question, n'hésitez pas à{' '}
            <Link href="mailto:support@octave.consulting" className="text-[#3cb9c9]" style={{ color: '#3cb9c9' }}>
              contacter l'assistance
            </Link>
            .
          </Text>
        </Section>
      </Section>
    </>
  );
};

export default TemplateAdminUserCreated;
