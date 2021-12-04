import * as dfd from "danfojs/dist/index";

const Backend = () => {
    const ridesDbFilename = 'Dane_Ostateczne_1.csv';
    //const busStopsDbFilename = 'Dane_Ostateczne_1.csv';

    // const ridesDbFilename = 'Przejazdy.csv';
    // const busStopsDbFilename = 'Przystanki.csv';

    const onClickHandler = async () => {
        //try {
        const ridesDf = await getDataFromCsv(ridesDbFilename);
        //const busStopsDf = await getDataFromCsv(busStopsDbFilename);

        // *** hard-codowane dane --> docelowo otrzymuję to z frontu *** 
        // const busStopsGroupIds1 = [
        //     'node/930800706',
        //     'node/1628587025',
        //     'node/1755122995',
        //     'node/1894708577',
        // ];
        // const busStopsGroupIds2 = [
        //     'node/6741894654',
        //     'node/7113383020',
        //     'node/7122978659',
        //     'node/8150753124',
        // ];
        const busStopsGroupIds1 = [
            'ś dworzec kolejowy',
            'ś policja',
            'mn maroko',
            'ś sąd',
        ];
        const busStopsGroupIds2 = [
            'par mikołowska',
            'ś dworzec kolejowy',
            'ch osiedle',
            'mn księżok',
        ];
        const dateFrom = '2021-09-01';
        const dateTo = '2021-09-03';
        const hourFrom = '01:00:00';
        const hourTo = '23:00:00';


        // Funkcjonalność #1
        fun1(
            ridesDf,
            //busStopsDf,
            busStopsGroupIds1,
            dateFrom,
            dateTo,
            hourFrom,
            hourTo
        )

        // Funkcjonalność #2
        // fun2(
        //     ridesDf,
        //     //busStopsDf,
        //     busStopsGroupIds1,
        //     busStopsGroupIds2,
        //     dateFrom,
        //     dateTo,
        //     hourFrom,
        //     hourTo
        // )
        //} catch (error) {
        //    console.log('Bład przy wczytywaniu z pliku:\n' + error);
        //}
    };

    // ============== FUNKCJONALNOŚĆ #1 ==============
    function fun1(
        ridesDf,
        //busStopsDf,
        stopsGroupIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        // 1. tmp = SELECT * FROM tmp WHERE data > dateFrom AND data < dateTo;
        // 2. tmp = SELECT * FROM tmp WHERE Godzina > hourFrom AND Godzina < hourTo;
        // TODO #1: kolumna Godzina -> usunąć : i zmienić na inta (musi być skalar by porównywać)
        // TODO #2: kolumna data -> zmienić na czasu Unixowy, wtedy otrzebujemy skalara 
        ridesDf.print();
        ridesDf.print();

        ridesDf["data"] = new dfd.Series(ridesDf["data"])

        // let ridesDfTimeFiltered = ridesDf.iloc({
        //     rows: ridesDf["data"].ge(dateFrom)
        //         .and(ridesDf["data"].le(dateTo))
        //         .and(ridesDf["Godzina"].ge(hourFrom))
        //         .and(ridesDf["Godzina"].le(hourTo))
        // });
        let ridesDfTimeFiltered = ridesDf.iloc({
            rows: ridesDf["Godzina"].gt(hourFrom)
        });
        ridesDfTimeFiltered.print();

        // 3. tmp = SELECT * FROM ridesDf WHERE przystanek_początkowy_id IN stopsGroupIds;
        // let ridesDfTimeAndIdFilteredArr = [];
        // for (let stopId in stopsGroupIds) {
        //     let ridesDfTimeAndIdFiltered = ridesDfTimeFiltered.iloc({
        //         rows: ridesDfTimeFiltered["Przystanek_Początkowy_id"].eq(stopId)
        //     });
        //     ridesDfTimeAndIdFilteredArr.push(ridesDfTimeAndIdFiltered);
        // }

        // 4. return SELECT COUNT(*) FROM tmp
        // let countsPerBusStopArr = [];
        // for (let ridesDfTimeAndIdFiltered in ridesDfTimeAndIdFilteredArr) {
        //     let counted = ridesDfTimeAndIdFiltered.count();
        //     // TODO: obczaić jak to zliczać dokładnie XD ew. df.shape
        // }
    }

    // ============== FUNKCJONALNOŚĆ #2 ==============
    function fun2(
        ridesDf,
        //busStopsDf,
        stopsFromIds,
        stopsToIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        // 1. tmp = SELECT * FROM tmp WHERE data > dateFrom AND data < dateTo;
        // 2. tmp = SELECT * FROM tmp WHERE Godzina > hourFrom AND Godzina < hourTo;

        let ridesDfTimeFiltered = ridesDf.iloc({
            rows: ridesDf["data"].ge(dateFrom)
                .and(ridesDf["data"].le(dateTo))
                .and(ridesDf["Godzina"].ge(hourFrom))
                .and(ridesDf["Godzina"].le(hourTo))
        });

        // 3. foreach fromId in stopsFromIds: 
        //      foreach toId in stopsToIds:
        //        SELECT COUNT(*) FROM ridesDfTimeFiltered WHERE przystanek_początkowy_id=fromId AND przystanek_koncowy_id=toId
        let countsBusStopConnectionsArr = []
    }

    // ============== FUNKCJE POMOCNICZE ==============
    const getDataFromCsv = async (filename) => {
        return dfd.read_csv(filename);
    };

    return (
        <div>
            <button onClick={onClickHandler}>Klijnij</button>
        </div>
    );
};

export default Backend;
