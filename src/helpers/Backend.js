import * as dfd from "danfojs/dist/index";

const Backend = () => {
    const ridesDbFilename = 'Dane_Ostateczne_1.csv';
    const busStopsDbFilename = 'Dane_Ostateczne_1.csv';
    // const ridesDbFilename = 'Przejazdy.csv';
    // const busStopsDbFilename = 'Przystanki.csv';

    const onClickHandler = async () => {
        try {
            const ridesDf = await getDataFromCsv(ridesDbFilename);
            const busStopsDf = await getDataFromCsv(busStopsDbFilename);

            // *** hard-codowane dane --> docelowo otrzymuję to z frontu *** 
            const busStopsGroupIds1 = [
                'node/930800706',
                'node/1628587025',
                'node/1755122995',
                'node/1894708577',
            ];
            const busStopsGroupIds2 = [
                'node/6741894654',
                'node/7113383020',
                'node/7122978659',
                'node/8150753124',
            ];
            const dateFrom = '2021-09-01';
            const dateTo = '2021-09-08';
            const hourFrom = '04:24:00';
            const hourTo = '13:29:00';


            // Funkcjonalność #1
            fun1(
                ridesDf,
                busStopsDf,
                busStopsGroupIds1,
                dateFrom,
                dateTo,
                hourFrom,
                hourTo
            )

            // Funkcjonalność #2
            // fun2(
            //     ridesDf,
            //     busStopsDf,
            //     busStopsGroupIds1,
            //     busStopsGroupIds2,
            //     dateFrom,
            //     dateTo,
            //     hourFrom,
            //     hourTo
            // )
        } catch (error) {
            console.log('Bład przy wczytywaniu z pliku:\n' + error);
        }
    };

    // ============== FUNKCJONALNOŚĆ #1 ==============
    function fun1(
        ridesDf,
        busStopsDf,
        stopsGroupIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        // 1. tmp = SELECT * FROM ridesDf WHERE przystanek_początkowy_id IN stopsGroupIds;
        ridesDf.print();

        // 2. tmp = SELECT * FROM tmp WHERE data > dateFrom AND data < dateTo;

        // 3. tmp = SELECT * FROM tmp WHERE Godzina > hourFrom AND Godzina < hourTo;

        // 4. return SELECT COUNT(*) FROM tmp

    }

    // ============== FUNKCJONALNOŚĆ #2 ==============
    function fun2(
        ridesDf,
        busStopsDf,
        stopsFromIds,
        stopsToIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        console.log("fun2")
        ridesDf.print();
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
