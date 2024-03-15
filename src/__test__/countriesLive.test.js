import countries from "../services/countries";

test("getAll returns data from the API", async () => {
  const data = await countries.getAll();

  expect(Array.isArray(data)).toBe(true);

  data.forEach((country) => {
    expect(country).toHaveProperty("name");
    expect(country).toHaveProperty("population");
    expect(country).toHaveProperty("area");
  });
});
