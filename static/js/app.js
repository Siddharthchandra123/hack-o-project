async function getRecommendations() {
    const landId = document.getElementById("landId").value;
    const resultsDiv = document.getElementById("results");

    if (!landId) {
        alert("Please enter Land ID");
        return;
    }

    resultsDiv.innerHTML = "<p>Loading...</p>";

    try {
        const res = await fetch(`http://127.0.0.1:10000/api/recommend/${landId}`);
        const data = await res.json();

        if (data.length === 0) {
            resultsDiv.innerHTML = "<p>No recommendations found</p>";
            return;
        }

        resultsDiv.innerHTML = "";

        data.forEach(item => {
            let scoreClass = "low";
            if (item.score >= 70) scoreClass = "high";
            else if (item.score >= 40) scoreClass = "medium";

            resultsDiv.innerHTML += `
                <div class="crop">
                    <span>${item.crop}</span>
                    <span class="score ${scoreClass}">${item.score}</span>
                </div>
            `;
        });

    } catch (err) {
        resultsDiv.innerHTML = "<p>Error loading data</p>";
        console.error(err);
    }
}
if (!Array.isArray(data)) {
    resultsDiv.innerHTML = "<p>Error: Invalid land ID</p>";
    return;
}
