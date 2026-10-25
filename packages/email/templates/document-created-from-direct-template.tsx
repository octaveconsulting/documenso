Property 'ASSISTANT' is missing in type '{ SIGNER: string; VIEWER: string; APPROVER: string; CC: string; }' 
but required in type 'Record<RecipientRole, string>'.
```[cite: 6, 7]

Dans la version de Prisma utilisée par Documenso, l'enum `RecipientRole` contient également la valeur **`ASSISTANT`**. Comme le dictionnaire était typé en `Record<RecipientRole, string>`, TypeScript exige strictement l'exhaustivité de toutes les clés de l'enum[cite: 6, 7].

Ce problème concerne deux fichiers :
1. `document-created-from-direct-template.tsx`
2. `document-invite.tsx`

Voici les versions corrigées avec `Partial<Record<RecipientRole, string>>` et la gestion du rôle `ASSISTANT`.

---

### 1. `document-created-from-direct-template.tsx`

```tsx
import { RecipientRole } from '@prisma/client';

import { Body, Button, Container, Head, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import TemplateDocumentImage from '../template-components/template-document-image';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCompletedEmailTemplateProps = {
  recipientName?: string;
  recipientRole?: RecipientRole;
  documentLink?: string;
  documentName?: string;
  assetBaseUrl?: string;
};

const ROLE_ACTION_FR: Partial<Record<RecipientRole, string>> = {
  [RecipientRole.SIGNER]: 'a signé',
  [RecipientRole.VIEWER]: 'a consulté',
  [RecipientRole.APPROVER]: 'a approuvé',
  [RecipientRole.CC]: 'a reçu une copie de',
  [RecipientRole.ASSISTANT]: 'a préparé',
};

export const DocumentCreatedFromDirectTemplateEmailTemplate = ({
  recipientName = 'Un utilisateur',
  recipientRole = RecipientRole.SIGNER,
  documentLink = 'https://sign.octave.consulting',
  documentName = 'Document.pdf',
  assetBaseUrl = 'https://sign.octave.consulting',
}: DocumentCompletedEmailTemplateProps) => {
  const actionText = (recipientRole && ROLE_ACTION_FR[recipientRole]) ?? 'a signé';
  const previewText = 'Document créé à partir d’un lien direct';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto font-sans">
        <Preview>{previewText}</Preview>

        <Section className="bg-background">
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-2 backdrop-blur-sm">
            <Section className="p-2">
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-4 h-6" />

              <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

              <Section>
                <Text className="mb-0 text-center font-semibold text-foreground text-lg">
                  {recipientName} {actionText} un document en utilisant l'un de vos liens directs
                </Text>

                <div className="mx-auto my-2 w-fit rounded-lg bg-muted px-4 py-2 text-muted-foreground text-sm">
                  {documentName}
                </div>

                <Section className="my-6 text-center">
                  <Button
                    className="inline-flex items-center justify-center rounded-lg bg-[#3cb9c9] px-6 py-3 text-center font-medium text-white text-sm no-underline"
                    href={documentLink}
                    style={{ backgroundColor: '#3cb9c9', color: '#ffffff' }}
                  >
                    Consulter le document
                  </Button>
                </Section>
              </Section>
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl">
            <TemplateFooter />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentCreatedFromDirectTemplateEmailTemplate;
