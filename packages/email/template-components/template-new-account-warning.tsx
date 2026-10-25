import { Container, Link, Text } from '../components';

export type TemplateNewAccountWarningProps = {
  senderEmail: string;
  reportUrl?: string;
};

export const TemplateNewAccountWarning = ({ senderEmail, reportUrl }: TemplateNewAccountWarningProps) => {
  return (
    <Container className="mx-auto mt-8 max-w-xl rounded-lg border border-warning border-l-4 border-solid bg-[#fdfae6] px-4 py-3">
      {/* Titre d'avertissement */}
      <Text className="my-0 font-semibold text-foreground text-sm">
        Attention : Ce message provient d'un nouveau compte ({senderEmail})
      </Text>

      {/* Consignes de vigilance et signalement */}
      <Text className="mt-1 mb-0 text-muted-foreground text-sm">
        {reportUrl ? (
          <>
            Ne signez que si vous connaissez cet expéditeur et attendiez ce document.{' '}
            <Link className="text-foreground underline" href={reportUrl}>
              Signaler cet expéditeur
            </Link>
          </>
        ) : (
          <>Ne signez que si vous connaissez cet expéditeur et attendiez ce document.</>
        )}
      </Text>
    </Container>
  );
};

export default TemplateNewAccountWarning;
