let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const p in statistics) {
    if (p.charAt(0) === 'r' || (statistics[p] % 2) === 1) {
        console.log(statistics[p]);
    }
}
