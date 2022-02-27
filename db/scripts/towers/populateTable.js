/* README
Notice that the file must be read directly by the PostgreSQL server, not by the client application. 
Therefore, it must be accessible by the PostgreSQL server machine. 
Also, you need to have superuser access in order to execute the COPY statement successfully.
(above explanation from: https://www.postgresqltutorial.com/import-csv-file-into-posgresql-table/)

If this script doesn't work, you must run the following command from the psql client.
\copy towers FROM '<absolute-path-to-csv-file>' with (format csv, header true, delimiter ',');
*/

import db from "../../connection.js";
import __dirname from "../../../dirname.js";
import path from "path";

const dataFilePath = path.join(__dirname, "towers.csv");

const response = await db.query(
  `COPY towers(TowerID,RingID,RingType,Place,Place2,PlaceCL,Dedicn,AltName,County,Country,ISO3166code,Diocese,Lat,Long,Bells,UR,Semitones,Wt,App,Note,Hz,Details,GF,Toilet,Simulator,ExtraInfo,WebPage,Affiliations,NG,Postcode,Practice,OvhaulYr,Contractor,TuneYr,LGrade,BldgID,ChurchCare,TowerBase,DoveID,SNLat,SNLong
    )
    FROM '${dataFilePath}'
    DELIMITER ','
    CSV HEADER;`
);

console.log(response);

db.end();
