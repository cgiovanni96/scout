import { Html, Heading, Text } from "@react-email/components";
import { Schema } from "../components/enrollment-form/enrollment-form.component";

type Props = {
  data: Schema;
};

export const EnrollmentTemplate = ({ data }: Props) => {
  return (
    <Html lang="it">
      <Heading as="h1">Nuova Iscrizione</Heading>
      <Text>È stata sottomessa una nuova iscrizione:</Text>
      <Text>Nome e Cognome di vostro/a FIGLIO/A: {data.name}</Text>
      <Text>Data di nascita: {data.birthDate}</Text>
      <Text>Nome e Cognome di un genitore/tutore: {data.parentName}</Text>
      <Text>Luogo e via di residenza: {data.residence}</Text>
      <Text>Ha fratelli/sorelle in Gruppo?: {data.hasSiblings}</Text>
      <Text>
        Indicare nome, anno di nascita e branca dei fratelli/sorelle presenti in
        gruppo: {data.siblings}
      </Text>
      <Text>Numero di telefono : {data.phone}</Text>
      <Text>Indirizzo email: {data.emailAddress}</Text>
      <Text>
        Come siete venuti a conoscenza del nostro gruppo?: {data.groupKnowledge}
      </Text>
      <Text>
        Ci sono esigenze particolari di cui il Gruppo deve essere informato?
        (es. allergie, difficoltà, ecc.) : {data.additionalInfo}
      </Text>
    </Html>
  );
};
