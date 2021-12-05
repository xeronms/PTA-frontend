const Backend = () => {
    //const ridesDbFilename = 'Dane_Ostateczne_1_transformed.csv';
    const ridesDbFilename = 'Przejazdy_transformed.csv';

    const onClickHandler = async () => {
        //try {
        const ridesTable = await getDataFromCsv(ridesDbFilename);

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
            '9.0',
            '7.0',
            '12.0',
            '173.0',
        ];
        const busStopsGroupIds2 = [
            '66',
            '23',
        ];
        const dateFrom = 1630447200; // 2021-09-01
        const dateTo = 1630620000;   // 2021-09-03
        const hourFrom = '100';      // 01:00:00
        const hourTo = '2300';       // 23:00:00

        // Funkcjonalność #1
        // fun1(
        //     ridesTable,
        //     busStopsGroupIds1,
        //     dateFrom,
        //     dateTo,
        //     hourFrom,
        //     hourTo
        // )

        // Funkcjonalność #2
        fun2(
            ridesTable,
            busStopsGroupIds1,
            busStopsGroupIds2,
            dateFrom,
            dateTo,
            hourFrom,
            hourTo
        )
        //} catch (error) {
        //    console.log('Bład przy wczytywaniu z pliku:\n' + error);
        //}
    };

    // ============== FUNKCJONALNOŚĆ #1 ==============
    function fun1(
        ridesTable,
        busStopsGroupIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        let ridesTableLines = ridesTable.split('\n');
        let dateColumnIdx = 2
        let hourColumnIdx = 4
        let busStopFromIdColumnIdx = 5

        // 1. Zastosowanie ograniczeń czasowych
        let rowsWithinTimeLimit = []
        for (let i = 0; i < ridesTableLines.length; i++) {
            let colVals = ridesTableLines[i].split(',');
            if (colVals[dateColumnIdx] >= dateFrom &&
                colVals[dateColumnIdx] <= dateTo &&
                colVals[hourColumnIdx] >= hourFrom &&
                colVals[hourColumnIdx] <= hourTo) {
                rowsWithinTimeLimit.push(colVals);
            }
        }
        if (rowsWithinTimeLimit.length == 0) {
            throw "No records found for given time boundaries!";
        }

        // 2. Zliczenie wystąpień dla kazdego z przystankow
        let busStopsOccurencesCount = {}
        busStopsGroupIds.forEach(item => busStopsOccurencesCount[item] = 0)
        for (let busStopId of busStopsGroupIds) {
            for (let row of rowsWithinTimeLimit) {
                if (row[busStopFromIdColumnIdx] === busStopId) {
                    busStopsOccurencesCount[busStopId]++;
                }
            }
        }
        console.log(busStopsOccurencesCount)
        return busStopsOccurencesCount;
    }

    // ============== FUNKCJONALNOŚĆ #2 ==============
    function fun2(
        ridesTable,
        busStopsFromIds,
        busStopsToIds,
        dateFrom,
        dateTo,
        hourFrom,
        hourTo
    ) {
        let ridesTableLines = ridesTable.split('\n');
        let dateColumnIdx = 2
        let hourColumnIdx = 4
        let busStopFromIdColumnIdx = 5
        let busStopToIdColumnIdx = 6

        // 1. Zastosowanie ograniczeń czasowych
        let rowsWithinTimeLimit = []
        for (let i = 0; i < ridesTableLines.length; i++) {
            let colVals = ridesTableLines[i].split(',');
            if (colVals[dateColumnIdx] >= dateFrom &&
                colVals[dateColumnIdx] <= dateTo &&
                colVals[hourColumnIdx] >= hourFrom &&
                colVals[hourColumnIdx] <= hourTo) {
                rowsWithinTimeLimit.push(colVals);
            }
        }
        if (rowsWithinTimeLimit.length == 0) {
            throw "No records found for given time boundaries!";
        }

        // 2. 
        let connectionsArr = []
        for (let fromId of busStopsFromIds) {
            for (let toId of busStopsToIds) {
                const found = connectionsArr.some(
                    el => (el.fromId === fromId && el.toId === toId));
                if (!found) connectionsArr.push({
                    fromId: fromId,
                    toId: toId,
                    count: 0
                });

                for (let row of rowsWithinTimeLimit) {
                    console.log(row[busStopFromIdColumnIdx] + " " + row[busStopToIdColumnIdx]);
                    if (row[busStopFromIdColumnIdx] == fromId &&
                        row[busStopToIdColumnIdx] == toId) {
                        //console.log("chuj")
                        connectionsArr.find(el => (el.fromId === fromId && el.toId === toId))['count'] += 1;
                    }
                }
            }
        }
        console.log(connectionsArr);
        return connectionsArr;
    }

    // ============== FUNKCJE POMOCNICZE ==============
    const getDataFromCsv = async (filename) => {
        const res = await fetch(filename);
        return await res.text();
    };

    return (
        <div>
            <button onClick={onClickHandler}>Klijnij</button>
        </div>
    );
};

export default Backend;
