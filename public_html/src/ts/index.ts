'use strict'

import DOMColoredPoint from "./modules/types/DOMColoredPoint";
import CustomForm from "./objects/form/CustomForm";
import { Coordinates, FormResponseData } from "./objects/form/FormResponseData";
import PointsDB, { StoredPoint } from "./objects/points/PointsDB";
import Plane2D from "./objects/plane/Plane2D";
import PlaneManager from "./objects/plane/PlaneManager";
import CoordsTable from "./objects/table/CoordsTable";
import { WorkboxManager } from "./modules/workbox/WorkboxManager";
import { LabCounter } from "./objects/labCounter/LabCounter";
import { RequestManager } from "./modules/requests/RequestManager";


var planes : PlaneManager = new PlaneManager();
var coordsTable : CoordsTable | null = null;

// IndexedDB

var pointsDB: PointsDB | null = null;
var requestManager : RequestManager | null = null;

var workboxManager = WorkboxManager.getInstance();

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

async function onDOMContentLoaded() {

    // COUNTER

    const labCounter = new LabCounter(
        document.getElementById("counter")!
    );

    

    // FORM

    const defaultForm : HTMLElement | null = document?.querySelector(".sn-default-form");

    const form = new CustomForm(
        defaultForm!
    );

    // TABLE

    const table : HTMLTableElement | null = document?.querySelector("#sn-form-result-table");

    coordsTable = new CoordsTable(table!);

    // CANVASES

    const canvases : NodeListOf<HTMLCanvasElement> | null = document.querySelectorAll(".sn-canvas-container > div > canvas");

    for (let i = 0; i < canvases.length; i++) {
        let plane : Plane2D = new Plane2D(i + 1, canvases.item(i));
        planes.add(plane);
    }

    // INDEXED DB RESET BUTTON

    const idbResetButton = document.querySelector('#reset-db');

    if (idbResetButton) {
        idbResetButton!.addEventListener('click', async () => {
            if (!pointsDB) {
                alert('База данных не инициализирована');
                return;
            }

            if (!confirm('Вы уверены, что хотите удалить все данные из базы?')) return;

            try {
                await pointsDB.clearAllPoints();

                planes.plane2Dlist.forEach(plane => plane.clear());

                if (coordsTable) coordsTable.clear();
                alert('Данные успешно удалены из базы данных');
            } catch (error) {
                console.error('Error clearing database:', error);
                alert('Ошибка при очистке базы данных');
            }
        });
    }

   // REQUEST MANAGER INIT

    requestManager = new RequestManager();

    // POINTS DB INIT

    pointsDB = new PointsDB();

    try {
        pointsDB.init();
        console.log('IndexedDB initialized successfully');
        
        await loadSavedPoints();
    } catch (error) {
        console.error('Failed to initialize IndexedDB:', error);
    }

    // WORKBOX MANAGER

    await workboxManager.register('/service-worker.js');

    // const pwaLogs = document.getElementById("pwa-logs");

    // pwaLogs!.addEventListener("workbox-message", 
    //     (message : Event) => {
    //         const response : string = (message as CustomEvent).detail;
    //         pwaLogs!.innerHTML += response + "\n";
    //     }
    // );

    setTimeout(() => {

        if (navigator.serviceWorker.controller) {
            console.log(navigator.serviceWorker);
            document.querySelector("#internet-status")!.innerHTML = "есть (оффлайн готов)";
        } else {
            console.log('no service worker is available');
        }
    }, 5500);
}

document.addEventListener("sn-form-response", (event : Event) => {

    const response : XMLHttpRequest = (event as CustomEvent).detail;

    console.debug("SERVER FORM RESPONSE", response);
    
    const data : FormResponseData = JSON.parse(response.responseText);

    if (data.status != "ok") return;

    const coordinates : Coordinates[] = data.coordinates;

    let plane : Plane2D;
    let prepared : DOMColoredPoint;

    coordinates.forEach(async (coordinate: Coordinates) => {

        if (pointsDB) {
            try {
                await pointsDB.addPoint({
                    result: coordinate.result,
                    x: coordinate.x,
                    y: coordinate.y,
                    r: coordinate.r,
                    time: data.time,
                    nanoseconds: Number.parseInt(data.nanoseconds)
                });
                console.log('Point saved to database:', coordinate);
            } catch (error) {
                console.error('Error saving point to database:', error);
            }
        }

        prepared = new DOMColoredPoint();
        
        prepared.color = Plane2D.POINT_HIT_COLOR;
        prepared.x = Number.parseFloat(coordinate.x);
        prepared.y = Number.parseFloat(coordinate.y);

        console.log("THROWING POINT : ", prepared, plane, Number.parseInt((coordinate.r as string)) - 1, planes, coordinate);

        plane = planes.get(
            Number.parseInt((coordinate.r as string)) - 1
        );

        if (coordinate.result == "miss") {
            prepared.color = Plane2D.POINT_MISS_COLOR;
        }

        plane.throwPoint(prepared);

        // ADD ROW IN TABLE

        if (coordsTable == null) return;
        
        coordsTable.addRow(
            "<tr><td>" + coordsTable.getCounter() + "</td><td>" + data.time + "</td><td>" + data.nanoseconds +  "</td><td>" + coordinate.x + "</td><td>" + coordinate.y + "</td><td>" + coordinate.r + "</td><td>" + coordinate.result + "</td></tr>"
        );
    });
});


async function loadSavedPoints() {
    if (!pointsDB) return;
    
    try {
        const savedPoints = await pointsDB.getAllPoints();
        console.log(`Loaded ${savedPoints.length} points from database`);
        
        savedPoints.forEach((point: StoredPoint) => {
            try {
                const rValue = parseInt(point.r);
                let plane : Plane2D = planes.plane2Dlist[rValue - 1]!;

                plane.throwPoint(
                    new DOMColoredPoint(
                        point.result === 'hit' ? Plane2D.POINT_HIT_COLOR : Plane2D.POINT_MISS_COLOR,
                        Number.parseFloat(point.x),
                        Number.parseFloat(point.y)
                    )
                );
            } catch (error) {
                console.error('Error rendering point from DB:', error, point);
            }
            
            if (coordsTable) {
                coordsTable.addRow(
                    `<tr><td>${coordsTable.getCounter()}</td><td>${point.time}</td><td>`+point.nanoseconds+`</td><td>${point.x}</td><td>${point.y}</td><td>${point.r}</td><td>${point.result}</td></tr>`
                );
            }
        });
    } catch (error) {
        console.error('Error loading points from database:', error);
    }
}

// INTERNET

window.addEventListener("online", e => {
    document.querySelector("#internet-status")!.innerHTML = "есть";
});

window.addEventListener("offline", e => {
    document.querySelector("#internet-status")!.innerHTML = "вы оффлайн!";
});