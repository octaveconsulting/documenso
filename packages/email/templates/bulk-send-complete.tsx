import { Body, Container, Head, Html, Preview, Section, Text } from '../components';
import { TemplateFooter } from '../template-components/template-footer';

export interface BulkSendCompleteEmailProps {
  userName: string;
  templateName: string;
  totalProcessed: number;
  successCount: number;
  failedCount: number;
  errors: string[];
  assetBaseUrl?: string;
}

export const BulkSendCompleteEmail = ({
  userName,
  templateName,
  totalProcessed,
  successCount,
  failedCount,
  errors,
}: BulkSendCompleteEmailProps) => {
  const previewText = `Envoi en masse terminé pour le modèle « ${templateName} »`;

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto bg-background font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-lg border border-border border-solid p-4 backdrop-blur-sm">
            <Section>
              <Text className="text-sm">
                Bonjour {userName},
              </Text>

              <Text className="text-sm">
                Votre opération d'envoi en masse pour le modèle « {templateName} » est terminée.
              </Text>

              <Text className="font-semibold text-lg">
                Récapitulatif :
              </Text>

              <ul className="my-2 ml-4 list-inside list-disc">
                <li>
                  Lignes traitées : {totalProcessed}
                </li>
                <li className="mt-1">
                  Créés avec succès : {successCount}
                </li>
                <li className="mt-1">
                  Échecs : {failedCount}
                </li>
              </ul>

              {errors && errors.length > 0 && (
                <Section className="mt-4">
                  <Text className="font-semibold text-lg">
                    Les erreurs suivantes sont survenues :
                  </Text>

                  <ul className="my-2 ml-4 list-inside list-disc">
                    {errors.map((error, index) => (
                      <li key={index} className="mt-1 text-destructive text-sm">
                        {error}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <Text className="text-sm">
                Vous pouvez consulter les documents créés sur votre tableau de bord dans la section « Documents créés à partir d'un modèle ».
              </Text>
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl">
            <TemplateFooter isDocument={false} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default BulkSendCompleteEmail;
