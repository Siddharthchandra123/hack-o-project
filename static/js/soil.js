const soilColors = {
  "Alluvial Soil": "#f59e0b",
  "Black Soil": "#1d4ed8",
  "Black Cotton Soil": "#1e40af",
  "Red Soil": "#16a34a",
  "Red & Laterite Soil": "#22c55e",
  "Sandy Desert Soil": "#a16207",
  "Black & Saline Soil": "#0f766e",
  "Mixed Soil": "#64748b"
};

const tooltip = document.getElementById("tooltip");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".state").forEach(state => {

  /* ---------- Hover Tooltip ---------- */
  state.addEventListener("mousemove", e => {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.innerText = state.getAttribute("title");
  });

  state.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  /* ---------- Click Event ---------- */
  state.addEventListener("click", () => {

    document.querySelectorAll(".state")
      .forEach(s => s.classList.remove("active"));

    state.classList.add("active");

    const soil = soilData[state.id]?.[0] || "Mixed Soil";
    const region = soilData[state.id]?.[1] || "India";

    document.getElementById("stateName").innerText = state.title;
    document.getElementById("soil").innerText = soil;
    document.getElementById("region").innerText = region;

    state.style.fill = soilColors[soil] || "#64748b";

    document.getElementById("infoBox").style.display = "block";
  });
});

/* ---------- Close InfoBox ---------- */
closeBtn.onclick = () => {
  document.getElementById("infoBox").style.display = "none";
  document.querySelectorAll(".state")
    .forEach(s => s.classList.remove("active"));
};
