// node createPatients.js
const firstNames = ["Juan", "Luis", "Carlos", "Miguel", "José", "Pedro", "Andrés", "Diego", "Fernando", "Rafael"];
const lastNames = ["Pérez", "Gómez", "López", "Rodríguez", "Hernández", "Ramírez", "Torres", "Sánchez", "Vega", "Morales"];
const genres = ["Masculino", "Femenino", "Otro"];
const diagnoses = ["Gripe leve", "Resfriado común", "Dolor de cabeza", "Fiebre", "Dolor de garganta"];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate() {
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
}

async function createPatients() {
    for (let i = 0; i < 20; i++) {
        const name = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
        const description = `Paciente con síntomas de ${getRandomItem(diagnoses)}`;
        const age = Math.floor(Math.random() * 90) + 1;
        const genre = getRandomItem(genres);
        const diagList = [getRandomItem(diagnoses)];
        const registrationDate = getRandomDate();

        const patientData = {
            title: name,
            description,
            age,
            genre,
            diagnosis: diagList,
            registrationDate
        };

        try {
            const response = await fetch("http://localhost:3000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientData)
            });

            if (response.ok) {
                console.log(`Paciente ${name} creado correctamente.`);
            } else {
                const errorData = await response.text();
                console.log(`Error al crear paciente ${name}: ${errorData}`);
            }
        } catch (error) {
            console.log(`Error al crear paciente ${name}: ${error.message}`);
        }
    }
}

createPatients();
