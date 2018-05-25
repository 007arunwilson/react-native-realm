import Realm from "realm";

class AppOptions extends Realm.Object {
  constructor() {
    super();
    console.log("[Realm.Object] : called ");
  }
}
AppOptions.schema = {
  name: "AppOptions",
  properties: {
    key: {
      type: "string"
    },
    value: {
      type: "string"
    }
  }
};

export default new Realm({
  schema: [AppOptions]
});
