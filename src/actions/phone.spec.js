import * as actions from "./phone";

describe("Phone actions", () => {
  it("addPhone should create ADD_PHONE action", () => {
    expect(actions.addPhone({ firstName: "vip" })).toEqual({
      type: "ADD_PHONE",
      phone: { firstName: "vip" }
    });
  });

  it("editPhone should create EDIT_PHONE action", () => {
    expect(actions.editPhone({ firstName: "vip" })).toEqual({
      type: "EDIT_PHONE",
      phone: { firstName: "vip" }
    });
  });
});
