import { env } from '@documenso/lib/utils/env';

import { Button, Column, Img, Link, Section, Text } from '../components';
import { getEmailAssetUrl } from '../utils/asset-url';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentSelfSignedProps {
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentSelfSigned = ({ documentName, assetBaseUrl }: TemplateDocumentSelfSignedProps) => {
  const NEXT_PUBLIC_WEBAPP_URL = env('NEXT_PUBLIC_WEBAPP_URL');

  const signUpUrl = `${NEXT_PUBLIC_WEBAPP_URL ?? 'https://sign.octave.consulting'}/signup`;

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        {/* Statut avec icône */}
        <Section>
          <Column align="center">
            <Text className="font-semibold text-base text-foreground">
              <Img
                src={getEmailAssetUrl(assetBaseUrl, 'static/completed.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
                alt=""
              />
              Document signé
            </Text>
          </Column>
        </Section>

        {/* Titre principal */}
        <Text className="mt-6 mb-0 text-center font-semibold text-foreground text-lg">
          Vous avez signé « {documentName} »
        </Text>

        {/* Message d'invitation à créer un compte */}
        <Text className="mx-auto mt-1 mb-6 max-w-[80%] text-center text-base text-muted-foreground">
          Créez un{' '}
          <Link
            href={signUpUrl}
            target="_blank"
            className="whitespace-nowrap text-[#3cb9c9] hover:underline"
            style={{ color: '#3cb9c9' }}
          >
            compte
          </Link>{' '}
          pour accéder à l'ensemble de vos documents signés à tout moment.
        </Text>

        {/* Bouton d'action principal */}
        <Section className="mt-8 mb-6 text-center">
          <Button
            href={signUpUrl}
            className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
            style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
          >
            <Img
              src={getEmailAssetUrl(assetBaseUrl, 'static/user-plus.png')}
              className="mr-2 mb-0.5 inline h-5 w-5 align-middle"
              alt=""
            />
            Créer mon compte
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentSelfSigned;
