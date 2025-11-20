const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // Conversions
  const asNumber = typeof raw === "string" && raw.trim() === "" ? NaN : Number(raw);
  const asBoolean = Boolean(raw); // non-empty strings are true
  const asString = String(raw);

  // Detect invalid numeric cases per assignment
  const isExplicitInvalid =
    asNumber !== asNumber || // NaN check
    raw === " " ||
    raw === "100px" ||
    raw === "NaN";

  if (!isExplicitInvalid && !Number.isNaN(asNumber)) {
    validNumbers.push(asNumber);
  } else {
    invalidNumbers.push({ index: i, value: raw, asNumber, asString, asBoolean });
  }

  // Per-item detail line
  console.log(
    `[Q1] idx=${i} raw=${JSON.stringify(raw)} -> Number:${asNumber} Boolean:${asBoolean} String:${JSON.stringify(asString)}`
  );
}

// Summary report
console.log("[Q1] ----- Report -----");
console.log(`[Q1] Valid numeric count: ${validNumbers.length}`);
console.log(`[Q1] Valid numeric data:`, validNumbers);
console.log(`[Q1] Invalid numeric count: ${invalidNumbers.length}`);
console.log(`[Q1] Invalid entries detail:`, invalidNumbers);
