
import * as app from "../src/App";
import * as math from "../src/math.js";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);

});