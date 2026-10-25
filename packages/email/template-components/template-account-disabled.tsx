import { Link, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export type TemplateAccountDisabledProps = {
  assetBaseUrl: string;
  supportEmail: string;
};

export const TemplateAccountDisabled = ({ assetBaseUrl, supportEmail }: TemplateAccountDisabledProps) => {
  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        {/* Titre principal */}
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Votre compte a été suspendu
        </Text>

        {/* Explication du motif */}
        <Text className="mx-auto mt-2 mb-0 max-w-[80%] text-center text-base text-muted-foreground">
          L'une de vos demandes de signature a fait l'objet d'un signalement. Afin de garantir la sécurité des signataires, votre compte a été temporairement suspendu.
        </Text>

        {/* Restrictions */}
        <Text className="mx-auto mt-2 mb-0 max-w-[80%] text-center text-base text-muted-foreground">
          Vous ne pourrez ni vous connecter ni envoyer de documents tant que la suspension est active.
        </Text>

        {/* Contact du support */}
        <Text className="mx-auto mt-4 mb-2 max-w-[80%] text-center text-base text-muted-foreground">
          Si vous estimez qu'il s'agit d'une erreur, contactez notre équipe à l'adresse{' '}
          <Link
            href={`mailto:${supportEmail}`}
            className="text-[#3cb9c9] no-underline hover:underline"
            style={{ color: '#3cb9c9' }}
          >
            {supportEmail}
          </Link>
          .
        </Text>
      </Section>
    </>
  );
};

export default TemplateAccountDisabled;
