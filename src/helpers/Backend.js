import DataFrame, { Row } from 'dataframe-js';

const Backend = () => {
    const filename = 'Dane_Nazwy_Ładne.csv'
    /*
        Wzór danych z .csv:
    
        const csv = [
            { 
                Numer_karty: "1047220043", 
                Numer_linii: "18", 
                Numer_ewidencyjny: "681",
                numer_kursu: "1",
                data: "2021-09-01 04:24:00",
                first_stop: "Ś Dworzec Kolejowy",
                last_stop: "Par Mikołowska",
                Dzień_tyg: "2",
                Godzina: "04:24:00",
            },
            { 
                Numer_karty: "1047220043", 
                Numer_linii: "33", 
                Numer_ewidencyjny: "767",
                numer_kursu: "15",
                data: "2021-09-01 14:05:00",
                first_stop: "MN Maroko",
                last_stop: "CH Osiedle",
                Dzień_tyg: "2",
                Godzina: "14:05:00",
            },
            ...
        ];
    */

    const onClickHandler = () => {
        try {


            // Funkcjonalność #1


            // Funkcjonalność #2

        }
        catch (error) {
            console.log("Bład przy wczytywaniu z pliku: " + error)
        }
    }


    // ============== FUNKCJONALNOŚĆ #1 ==============
    function fun1(csv, grupa_przystankow, data_OD, data_DO, godziny_OD, godziny_DO) {

        // 1. Pobranie listy wszystkich przystanków
        const set = new Set();
        const firstStopDistinctValues = csv.filter(item => {
            const duplicate = set.has(item.first_stop);
            set.add(item.first_stop);
            return !duplicate;
        });

        // 2. Dla kazdego z przystanków pobieram ilość wyjazdów z niego w określonym przedziale czasu

    }

    // ============== FUNKCJONALNOŚĆ #2 ==============
    function fun2(csv, grupa_przystanków_OD, grupa_przystanków_DO, data_OD, data_DO, godziny_OD, godziny_DO) {

    }


    // ============== FUNKCJE POMOCNICZE ==============
    // kalkulacje PALUS

    const getData = () => {
        fetch('data/text.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    };



    return (
        <div>
            <button onClick={onClickHandler}>Klijnij</button>
        </div>
    )
}

export default Backend
