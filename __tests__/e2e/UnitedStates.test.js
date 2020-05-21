const axios = require('axios');
const { use, expect } = require('chai');
const chaiSubset = require('chai-subset');

/* eslint-disable no-undef */
use(chaiSubset);
const baseUrl = 'http://localhost:3333';
describe('Holidays in United States', () => {
  it('should be New Year', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2021-01-01,2021-12-31,2022-12-54/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property('description', "New Year's Day");
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property(
      'description',
      "New Year's Day (Observed)"
    );
    expect(response.data[2]).to.be.an('object');
    expect(response.data[2]).to.have.property(
      'error',
      'invalid date: 2022-12-54'
    );
  });

  it('should be Martin Luther King Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-01-20,2021-01-18/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property(
      'description',
      'Martin Luther King Day'
    );
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property(
      'description',
      'Martin Luther King Day'
    );
  });

  it("should be Washington's Birthday", async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-02-17,2021-02-15/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property(
      'description',
      "Washington's Birthday"
    );
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property(
      'description',
      "Washington's Birthday"
    );
  });

  it('should be Memorial Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-05-25,2021-05-31,1889-05-30/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property('description', 'Memorial Day');
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property('description', 'Memorial Day');
    expect(response.data[2]).to.be.an('object');
    expect(response.data[2]).to.have.property('holiday', true);
    expect(response.data[2]).to.have.property('description', 'Memorial Day');
  });

  it('should be Independence Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-07-04,2020-07-03/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property(
      'description',
      'Independence Day'
    );
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property(
      'description',
      'Independence Day (Observed)'
    );
  });

  it('should be Labor Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-09-07,2025-09-01/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property('description', 'Labor Day');
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property('description', 'Labor Day');
  });

  it('should be Columbus Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-10-12,2022-10-10,1940-10-12/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property('description', 'Columbus Day');
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property('description', 'Columbus Day');
    expect(response.data[2]).to.be.an('object');
    expect(response.data[2]).to.have.property('holiday', true);
    expect(response.data[2]).to.have.property('description', 'Columbus Day');
  });

  it('should be Veterans Day', async () => {
    const response = await axios.get(
      `${baseUrl}/listdays/2020-11-11,2023-11-10,1940-11-11/usa`
    );
    expect(response.status).to.equal(200);
    expect(response.data[0]).to.be.an('object');
    expect(response.data[0]).to.have.property('holiday', true);
    expect(response.data[0]).to.have.property('description', 'Veterans Day');
    expect(response.data[1]).to.be.an('object');
    expect(response.data[1]).to.have.property('holiday', true);
    expect(response.data[1]).to.have.property(
      'description',
      'Veterans Day (Observed)'
    );
    expect(response.data[2]).to.be.an('object');
    expect(response.data[2]).to.have.property('holiday', true);
    expect(response.data[2]).to.have.property('description', 'Armistice Day');
  });
});
