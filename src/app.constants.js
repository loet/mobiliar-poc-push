angular.module('mobiliar-app.constants', [])

    .constant('CLAIM_MAX_IMAGES', 6)

    .constant('ASSISTANCE_PHONE', {
        'de': '+41313898427',
        'fr': '+41313898428',
        'it': '+41313898430'
    })

    .constant('ACTUAL_ENVIRONMENT', 'PROD')

    .constant('ENVIRONMENTS', {
        'PROD': 'PROD',
        'INT': 'INT',
        'TEST': 'TEST'
    })

    .constant('SERVER_ADDRESSES', {
        'PROD': {
            'MYMOBILIAR': 'https://my.mobiliar.ch',
            'CLAIM': 'https://resources.mobiliar.ch',
            'REGISTRATION': 'https://resources.mobiliar.ch',
            'CONTACT': 'https://resources.mobiliar.ch'
        },
        'INT': {
            'MYMOBILIAR': 'https://my-i.mobiliar-int.ch',
            'CLAIM': 'https://resources-i.mobiliar-int.ch',
            'REGISTRATION': 'https://resources-i.mobiliar-int.ch',
            'CONTACT': 'https://resources-i.mobiliar-int.ch'
        },
        'TEST': {}
    })

    .constant('MOBI_CH_URLS', {
        'HOME': {
            'de': 'https://www.mobiliar.ch',
            'fr': 'https://www.mobiliere.ch',
            'it': 'https://www.mobiliare.ch'
        },
        'CLAIM_FORMS': {
            'de': 'https://mobiliar.ch/app-schaden',
            'fr': 'https://mobiliere.ch/app-sinistre',
            'it': 'https://mobiliare.ch/app-sinistro'
        },
        'AGENTS': {
            'de': 'https://mobiliar.ch/app-beratersuche',
            'fr': 'https://mobiliere.ch/app-recherche-conseiller',
            'it': 'https://mobiliare.ch/app-ricerca-consulente'
        },
        'FEEDBACK': {
            'de': 'https://www.mobiliar.ch/app-feedback',
            'fr': 'https://www.mobiliere.ch/app-feedback',
            'it': 'https://www.mobiliare.ch/app-feedback'
        },
        'ZUGANGSDATEN': {
            'de': 'https://www.mobiliar.ch/app-zugangsdaten',
            'fr': 'https://www.mobiliere.ch/app-donnees-acces',
            'it': 'https://www.mobiliare.ch/app-dati-accesso'
        }
    })

    .constant('ANALYTICS_IDS', {
        'PROD': 'UA-74498321-3',
        'INT': 'UA-74498321-2',
        'TEST': 'UA-74498321-1'
    })

    .constant('ANALYTICS_VIEWS', {
        'ANMELDEN': 'Anmelden',
        'WILLKOMMEN': 'Willkommen',
        'IMPRESSUM': 'Impressum',
        'INDEX': 'Index',
        'SCHADEN': 'Schaden',
        'SCHADENDETAILS': 'Schadendetails',
        'SCHADEN_ERFASSEN': 'Schaden erfassen',
        'SCHADENDATUM': 'Schadendatum',
        'SCHADENORT': 'Schadenort',
        'ORT_SUCHEN': 'Ort suchen',
        'BESCHREIBUNG': 'Beschreibung',
        'ANSPRECHPERSON': 'Ansprechperson',
        'ASSISTANCE': '24 h Assistance'
    })

    .constant('ANALYTICS_EVENTS', {
        'ANMELDUNG': {
            category: 'Anmeldung',
            actions: {
                'SEITENAUFRUF': 'Registrierungsseite aufgerufen default',
                'SEITENAUFRUF_SCHADEN': 'Registrierungsseite aufgerufen über Schaden-Link',
                'SEITENAUFRUF_ANSPRECHPERSON': 'Registrierungsseite aufgerufen über Ansprechperson-Link',
                'ABBRUCH': 'Anmeldung abgebrochen',
                'ANMELDUNG_AUSGELOEST': 'Annmeldung ausgelöst',
                'WEITER_AUSGELOEST': 'Weiter ausgelöst',
                'SCHADENFORMULARE': 'Schadenformulare aufgerufen',
                'BERATER_MOBICH': 'Mobi.ch für Beraterinfo augerufen'
            }
        },
        'INDEX': {
            category: 'Index',
            actions: {
                'CUSTOMER_CAPTURE_IMAGE': 'Persönliches Bild aufnehmen',
                'CUSTOMER_PICK_IMAGE': 'Persönliches Bild auswählen'
            }
        },
        'SCHADEN': {
            category: 'Schaden',
            actions: {
                'SCHADEN_OPEN': 'Liste aufgerufen',
                'SCHADEN_ERFASSEN': 'Schaden erfassen aufgerufen',
                'SCHADEN_LOKAL_OEFFNEN': 'Lokaler Schaden geöffnet',
                'SCHADEN_GESENDET_OEFFNEN': 'Gesendeter Schaden geöffnet',
                'SCHADENDATUM': 'Schadendatum aufgerufen',
                'SCHADENORT': 'Schadenort aufgerufen',
                'SCHADENORT_GPS': 'Schadenort aktuelle Position ermitteln aufgerufen',
                'SCHADENORT_SUCHE': 'Schadenort Suche aufgerufen',
                'SCHADENORT_SUCHERGEBNIS': 'Schadenort Suchergebnis übernommen',
                'SCHADEN_BESCHREIBUNG': 'Schaden Beschreibung aufgerufen',
                'SCHADEN_BESCHREIBUNG_TEXT': 'Schaden Beschreibung Text erfasst',
                'SCHADEN_BESCHREIBUNG_FOTO_NEW': 'Schaden Beschreibung neues Bild hinzugefügt',
                'SCHADEN_BESCHREIBUNG_FOTO_PICKER': 'Schaden Beschreibung vorhandenes Bild hinzugefügt',
                'SCHADEN_BESCHREIBUNG_FOTO_REMOVE': 'Schaden Beschreibung Bild gelöscht',
                'SCHADEN_SENDEN': 'Schaden senden aufgerufen',
                'SCHADEN_GESENDET_LOESCHEN': 'Gesendeter Schaden gelöscht',
                'SCHADEN_LOKAL_LOESCHEN': 'Lokaler Schaden gelöscht',
                'SCHADEN_KONTAKT': 'Schaden Kontakt aufgerufen',
                'SCHADEN_KONTAKT_EMAIL': 'Schaden Kontakt E-Mail erstellt',
                'SCHADEN_KONTAKT_TELEFON': 'Schaden Kontakt Telefon aufgerufen'

            }
        },
        'PORTAL': {
            category: 'Kundenportal',
            actions: {
                'PORTAL_OPENED': 'Kundenportal aufgerufen'
            }
        },
        'ASSISTANCE': {
            category: '24h Assistance',
            actions: {
                'ASSISTANCE_CALL': '24h Assistance angerufen'
            }
        },
        'ANSPRECHPERSON': {
            category: 'Ansprechperson',
            actions: {
                'ANSPRECHPERSON_TELEFON': 'Ansprechperson angerufen',
                'ANSPRECHPERSON_EMAIL': 'Ansprechperson Email erstellt',
                'ANSPRECHPERSON_MAP': 'Ansprechperson Map geöffnet'
            }
        }
    })

;