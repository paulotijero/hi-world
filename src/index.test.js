import hiWorld from ".";

describe("it should say Hi", () => {
  it("should greet 'World'", () => {
    expect(hiWorld()).toBe("Hi world!!");
  });
});
