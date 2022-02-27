import db from "../../connection.js";

const response = await db.query(`
    CREATE TABLE towers (
        TowerID INT,
        RingID INT,
        RingType TEXT,
        Place TEXT,
        Place2 TEXT,
        PlaceCL TEXT,
        Dedicn TEXT,
        AltName TEXT,
        County TEXT,
        Country TEXT,
        ISO3166code TEXT,
        Diocese TEXT,
        Lat TEXT,
        Long TEXT,
        Bells INT,
        UR TEXT,
        Semitones TEXT,
        Wt TEXT,
        App TEXT,
        Note TEXT,
        Hz TEXT,
        Details TEXT,
        GF TEXT,
        Toilet TEXT,
        Simulator TEXT,
        ExtraInfo TEXT,
        WebPage TEXT,
        Affiliations TEXT,
        NG TEXT,
        Postcode TEXT,
        Practice TEXT,
        OvhaulYr TEXT,
        Contractor TEXT,
        TuneYr TEXT,
        LGrade TEXT,
        BldgID TEXT,
        ChurchCare TEXT,
        TowerBase TEXT,
        DoveID TEXT,
        SNLat TEXT,
        SNLong TEXT
    );
`);

console.log(response);

db.end();
