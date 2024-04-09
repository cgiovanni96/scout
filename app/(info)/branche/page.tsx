import Image from "next/image";

export const metadata = {
  title: "Branche | Gruppo Scout Agesci Tigullio",
};

const Page = () => {
  return (
    <>
      <div>
        Il percorso scout si articola in tre momenti specifici, coordinati e
        progressivi di educazione.
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2
            id="lc"
            className="text-2xl  font-bold leading-none text-yellow-500"
          >
            L/C (Lupetti e Coccinelle)
          </h2>

          <section className="flex flex-col lg:flex-row gap-4">
            <Image
              src="/branche/lc.png"
              alt="Illustrazione della divisa della branca L/C"
              width={201}
              height={251}
            />

            <div className="space-y-2">
              <p>
                La branca “L/C” (Lupetti e Coccinelle) si rivolge ai bambini e
                alle bambine compresi tra gli 8 e gli 11/12 anni di eta’.{" "}
              </p>
              <p>
                All’interno di essa, i fratellini/sorelline fanno parte del
                “Branco” con a capo i capi branco. L’ambientazione è il libro
                della giungla e i capi vengono chiamati con i nomi degli animali
                che Mowgli incontra.
              </p>
              <p>
                Ruolo centrale di questa fascia d’eta’ è il gioco, strumento
                fondamentale per la crescita dei bambini.{" "}
              </p>
              <p>
                <strong>Impegno richiesto:</strong> Normalmente, i bambini si
                vedono una volta alla settimana (riunione) e una volta al mese
                per l’uscita giornaliera (Caccia). In estate ci sono le Vacanze
                di Branco (campo estivo della durata di circa 7 giorni)
              </p>
              <strong>BUONA CACCIA!</strong>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-2">
          <h2
            id="eg"
            className="text-2xl text-green-800 font-bold leading-none"
          >
            E/G (Esploratori e Guide)
          </h2>

          <section className="flex flex-col lg:flex-row gap-4">
            <Image
              src="/branche/lc.png"
              alt="Illustrazione della divisa della branca L/C"
              width={201}
              height={251}
            />

            <div className="space-y-2">
              <p>
                La branca “E/G” (Esploratori e Guide) si rivolge ai ragazzi e
                alle ragazze compresi tra i 12 e i 15/16 anni di eta’.{" "}
              </p>
              <p>
                {" "}
                I ragazzi, ormai cresciuti, abbandonano il Gioco del Branco per
                lanciarsi nell’ Avventura del Reparto. Sono loro i protagonisti
                di questa branca e, attraverso riunioni, bivacchi e campi che si
                susseguono durante l’anno, hanno la possibilita’ di realizzare
                “sogni” che sembrano difficili da raggiungere nella
                quotidianita’.
              </p>
              <p>
                <strong>Impegno richiesto:</strong> Normalmente, i ragazzi si
                vedono una volta a settimana (riunione) e una volta al mese per
                l’uscita di due giorni (bivacco). In estate i ragazzi svolgono
                il Campo Estivo (campo estivo della durata di circa 12-14
                giorni).
              </p>
              <strong>BUON SENTIERO!</strong>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-2">
          <h2 id="rs" className="text-2xl text-red-500 font-bold leading-none">
            R/S (Rover e Scolte)
          </h2>

          <section className="flex flex-col lg:flex-row gap-4">
            <div className="space-y-2">
              <p>
                La branca “R/S” (Rover e Scolte) è l’ultima branca del percorso
                Scout e comprende i ragazzi tra i 16 e i 21 anni di eta’.{" "}
              </p>
              <p>
                I ragazzi si trovano adesso in Clan. Elemento chiave di questa
                branca è il Cammino durante il quale si trovano ad interrogarsi
                su loro stessi e sul rapporto che hanno verso gli altri e verso
                il mondo con lo scopo di compiere delle Scelte (Politica,
                Servizio e Fede).{" "}
              </p>
              <p>
                I ragazzi svolgono Servizio attivo all’interno delle due branche
                precedenti (servizio associativo) o Servizio presso altre realtà
                presenti sul territorio come case di riposo/aiuto
                compiti/dormitorio/Caritas/Anfass… (servizio extra associativo).
              </p>
              <p>
                <strong>Impegno richiesto:</strong> Normalmente, i ragazzi si
                vedono una volta a settimana (riunione) e una volta al mese per
                l’uscita di due giorni (bivacchi). In estate i ragazzi svolgono
                la Route (attività estiva della durata di circa 5-7 giorni).{" "}
              </p>{" "}
              <strong>BUONA STRADA!</strong>
            </div>
          </section>
        </div>
        <p id="scoiattolo">
          <a
            href="https://www.loscoiattolo.info/"
            className="font-bold text-primary-700 underline cursor-pointer"
          >
            Visita il sito ufficiale "Lo Scoiattolo" per comprare uniforme,
            distintivi o qualsiasi cosa ti serva.
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default Page;
