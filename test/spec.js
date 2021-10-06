const { expect } = require("chai");

const app = require("supertest")(require("../app"));

describe("db", () => {
  it("api workin", async () => {
    const response = await app.get("/");
    expect(response.status).to.equal(200);
  });
});
