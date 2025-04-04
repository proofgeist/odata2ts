import { beforeEach, describe, expect, test } from "vitest";
import { servicexxx_Trippin_xxxs } from "../../src-generated/trippin-max-renaming/servicexxx_Trippin_xxxs";
import type {
  EDITABLE_LOCATION,
  EDITABLE_THE_PERSON,
  THE_PERSON_ID,
} from "../../src-generated/trippin-max-renaming/TRIPPIN_TYPES";
import { FEATURE, PERSON_GENDER } from "../../src-generated/trippin-max-renaming/TRIPPIN_TYPES";
import { MockODataClient } from "../MockODataClient";

describe("Testing Generation With Max Renaming Options", () => {
  const BASE_URL = "/test";
  const odataClient = new MockODataClient();

  // noinspection JSPotentiallyInvalidConstructorUsage
  const testService = new servicexxx_Trippin_xxxs(odataClient, BASE_URL, { noUrlEncoding: true });

  let editModel: EDITABLE_THE_PERSON;

  beforeEach(() => {
    editModel = {
      user_name: "williams",
      favorite_feature: FEATURE.Feature1,
      features: [],
      first_name: "Heinz",
      gender: PERSON_GENDER.Unknown,
    };
  });

  test("unbound function", async () => {
    await testService.the_one_with_a_lot_of_friends_func();
    expect(odataClient.lastUrl).toBe(`${BASE_URL}/GetPersonWithMostFriends()`);
  });

  test("unbound function with params", async () => {
    await testService.get_nearest_airport_func({ lat: 123, lon: 345 });
    expect(odataClient.lastUrl).toBe(`${BASE_URL}/GetNearestAirport(lat=123,lon=345)`);
  });

  test("unbound action", async () => {
    await testService.do_reset_act();
    expect(odataClient.lastUrl).toBe(`${BASE_URL}/ResetDataSource`);
    expect(odataClient.lastData).toEqual({});
  });

  test("entitySet", async () => {
    const expected = `${BASE_URL}/People`;

    expect(testService.navigate_to_people().getPath()).toBe(expected);
    expect(testService.navigate_to_people().getKeySpec().length).toBe(1);
    expect(testService.navigate_to_people().getKeySpec()[0].getName()).toEqual("UserName");
  });

  test("entitySet: create", async () => {
    const expectedUrl = `${BASE_URL}/People`;

    await testService.navigate_to_people().create(editModel);

    expect(odataClient.lastOperation).toBe("POST");
    expect(odataClient.lastUrl).toBe(expectedUrl);
    expect(odataClient.lastData).toStrictEqual({
      UserName: "williams",
      FavoriteFeature: "Feature1",
      Features: [],
      Gender: "Unknown",
      FirstName: "Heinz",
    });
  });

  test("entitySet: get", async () => {
    const testId = "test";
    const expected = `${BASE_URL}/People('${testId}')`;

    const etService = testService.navigate_to_people(testId);

    expect(etService.getPath()).toBe(expected);
  });

  test("entitySet: get with complex id", async () => {
    const testId: THE_PERSON_ID = { user_name: "williams" };
    const expected = `${BASE_URL}/People(UserName='williams')`;

    expect(testService.navigate_to_people(testId).getPath()).toBe(expected);
  });

  test("entityType: update", async () => {
    const id = "williams";
    const expectedUrl = `${BASE_URL}/People('${id}')`;
    const model: EDITABLE_THE_PERSON = {
      user_name: "williams",
      favorite_feature: FEATURE.Feature1,
      features: [],
      first_name: "Heinz",
      age: 33,
      gender: PERSON_GENDER.Unknown,
    };

    await testService.navigate_to_people(id).update(model);

    expect(odataClient.lastOperation).toBe("PUT");
    expect(odataClient.lastUrl).toBe(expectedUrl);
    expect(odataClient.lastData).toStrictEqual({
      UserName: "williams",
      FavoriteFeature: FEATURE.Feature1,
      Features: [],
      FirstName: "Heinz",
      Age: 33,
      Gender: "Unknown",
    });
  });

  test("entityType: patch", async () => {
    const id = "williams";
    const expectedUrl = `${BASE_URL}/People('${id}')`;
    const model = {
      age: 44,
    };

    await testService.navigate_to_people(id).patch(model);

    expect(odataClient.lastOperation).toBe("PATCH");
    expect(odataClient.lastUrl).toBe(expectedUrl);
    expect(odataClient.lastData).toStrictEqual({ Age: 44 });
  });

  test("entityType: delete", async () => {
    const id = "williams";
    const expectedUrl = `${BASE_URL}/People('${id}')`;

    await testService.navigate_to_people(id).delete();

    expect(odataClient.lastOperation).toBe("DELETE");
    expect(odataClient.lastUrl).toBe(expectedUrl);
    expect(odataClient.lastData).toBe(undefined);
  });

  test("complex type", async () => {
    const complex = testService.navigate_to_people("tester").navigate_to_home_address();

    expect(complex.getPath()).toBe(`${BASE_URL}/People('tester')/HomeAddress`);
  });

  test("complex type: query", async () => {
    await testService.navigate_to_people("tester").navigate_to_home_address().query();

    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/HomeAddress`);
    expect(odataClient.lastOperation).toBe("GET");
    expect(odataClient.lastData).toBeUndefined();
  });

  test("complex type: update", async () => {
    const complex = testService.navigate_to_people("tester").navigate_to_home_address();

    const model: EDITABLE_LOCATION = {
      address: "Test Address",
      city: { name: "Test City" },
    };
    await complex.update(model);

    expect(odataClient.lastOperation).toBe("PUT");
    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/HomeAddress`);
    expect(odataClient.lastData).toStrictEqual({
      Address: "Test Address",
      City: { Name: "Test City" },
    });
  });

  test("complex collection", async () => {
    const complex = testService.navigate_to_people("tester").navigate_to_address_info();

    expect(complex.getPath()).toBe(`${BASE_URL}/People('tester')/AddressInfo`);
  });

  test("complex collection: query", async () => {
    await testService.navigate_to_people("tester").navigate_to_address_info().query();

    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/AddressInfo`);
    expect(odataClient.lastOperation).toBe("GET");
    expect(odataClient.lastData).toBeUndefined();
  });

  test("complex collection: create", async () => {
    const model: EDITABLE_LOCATION = { address: "TestAdress" };
    await testService.navigate_to_people("tester").navigate_to_address_info().add(model);

    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/AddressInfo`);
    expect(odataClient.lastOperation).toBe("POST");
    expect(odataClient.lastData).toStrictEqual({ Address: "TestAdress" });
  });

  test("complex collection: update", async () => {
    const models = [{ address: "TestAddress 1" }, { address: "test 2" }];
    await testService.navigate_to_people("tester").navigate_to_address_info().update(models);

    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/AddressInfo`);
    expect(odataClient.lastOperation).toBe("PUT");
    expect(odataClient.lastData).toStrictEqual([{ Address: "TestAddress 1" }, { Address: "test 2" }]);
  });

  test("complex collection: delete", async () => {
    await testService.navigate_to_people("tester").navigate_to_address_info().delete();

    expect(odataClient.lastUrl).toBe(`${BASE_URL}/People('tester')/AddressInfo`);
    expect(odataClient.lastOperation).toBe("DELETE");
    expect(odataClient.lastData).toBeUndefined();
  });

  test("navigation", async () => {
    const result = testService
      .navigate_to_people("tester")
      .navigate_to_best_friend()
      .navigate_to_best_friend()
      .navigate_to_best_friend()
      .navigate_to_home_address()
      .navigate_to_city();

    expect(result.getPath()).toBe(`${BASE_URL}/People('tester')/BestFriend/BestFriend/BestFriend/HomeAddress/City`);
  });

  test("singleton", async () => {
    const result = testService.navigate_to_me();

    expect(result.getPath()).toBe(`${BASE_URL}/Me`);
  });
});
