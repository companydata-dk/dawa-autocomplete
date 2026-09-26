# dawa-autocomplete-companydata

Adresse-autocomplete til danske adresser, en udgave af [dawa-autocomplete2](https://github.com/SDFIdk/dawa-autocomplete2) (MIT, Styrelsen for Dataforsyning og Infrastruktur), der som standard taler med [dawa.companydata.dk](https://dawa.companydata.dk) i stedet for DAWA, som lukker 1. oktober 2026.

Samme komponent, samme indstillinger, samme `select`-callback med samme data. To ting er nye:

- `baseUrl` er `https://dawa.companydata.dk` som standard.
- `apiKey` (valgfri) lægger din companydata-nøgle i stien, så loftet hæves fra det nøgleløse niveau. Widgets i browseren kan ikke sende headers, derfor stien.

## Brug

Som script:

```html
<link rel="stylesheet" href="https://cdn.companydata.dk/dawa-autocomplete/2.0.0/dawa-autocomplete2.css">
<input id="adresse" type="text" autocomplete="off">
<script src="https://cdn.companydata.dk/dawa-autocomplete/2.0.0/dawa-autocomplete2.min.js"></script>
<script>
  dawaAutocomplete.dawaAutocomplete(document.getElementById('adresse'), {
    apiKey: 'sk_din_noegle',   // valgfri
    select: valgt => console.log(valgt.data.id, valgt.tekst)
  });
</script>
```

Som pakke:

```
npm install dawa-autocomplete-companydata
```

```js
import { dawaAutocomplete } from 'dawa-autocomplete-companydata';

dawaAutocomplete(document.getElementById('adresse'), {
  select: valgt => console.log(valgt.data.id, valgt.tekst),
});
```

## Flytter du fra dawa-autocomplete2?

Behold din nuværende kode og sæt `baseUrl: 'https://dawa.companydata.dk'`. Eller skift pakken ud med denne, så er base-URL'en sat.

## Indstillinger

Alle indstillinger fra dawa-autocomplete2 gælder uændret: `baseUrl`, `minLength`, `params`, `fuzzy`, `stormodtagerpostnumre`, `supplerendebynavn`, `type`, `adgangsadresserOnly`, `debounce`, `select`, `multiline`, `id`. Hertil `apiKey`.

Nøgleløs brug er begrænset pr. IP-adresse. En gratis nøgle fås på [companydata.dk/api](https://companydata.dk/api); adressekald tæller ikke på nøglens API-kvote.

## Kildekode og fejl

Koden ligger på [github.com/companydata-dk/dawa-autocomplete](https://github.com/companydata-dk/dawa-autocomplete). Fejl og ønsker som issues samme sted.

## Byg

```
npm install
npm run build
```

Bygget lander i `dist/js` (UMD og ES, med og uden polyfills) og `dist/css`.

## Licens

MIT. Ophavsret 2017 Danmarks adresser for den oprindelige komponent, se `LICENSE`. Ændringerne er ophavsret 2026 Uneven Bits ApS under samme licens.
