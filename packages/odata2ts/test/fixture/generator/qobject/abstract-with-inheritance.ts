import {
  ENUMERABLE_PROP_DEFINITION,
  QBooleanParam,
  QBooleanPath,
  QId,
  QueryObject,
} from "@odata2ts/odata-query-objects";
// @ts-ignore
import type { BookId, WithOwnStuffId } from "./TesterModel";

export class QBookBaseType extends QueryObject {
  public readonly id = new QBooleanPath(this.withPrefix("ID"));
  public readonly test = new QBooleanPath(this.withPrefix("test"));
}

export class QBook extends QBookBaseType {
  protected readonly __subtypeMapping = {
    "Tester.NothingToAdd": "QNothingToAdd",
    "Tester.WithOwnStuff": "QWithOwnStuff",
  };

  public get QWithOwnStuff_id2() {
    return this.__asQWithOwnStuff().id2;
  }

  public get QWithOwnStuff_test2() {
    return this.__asQWithOwnStuff().test2;
  }

  private __asQNothingToAdd() {
    return new QNothingToAdd(this.withPrefix("Tester.NothingToAdd"));
  }

  private __asQWithOwnStuff() {
    return new QWithOwnStuff(this.withPrefix("Tester.WithOwnStuff"));
  }
}
Object.defineProperties(QBook.prototype, {
  QWithOwnStuff_id2: ENUMERABLE_PROP_DEFINITION,
  QWithOwnStuff_test2: ENUMERABLE_PROP_DEFINITION,
});

export const qBook = new QBook();

export class QBookId extends QId<BookId> {
  private readonly params = [new QBooleanParam("ID", "id")];

  getParams() {
    return this.params;
  }
}

export class QNothingToAdd extends QBookBaseType {}

export const qNothingToAdd = new QNothingToAdd();

export class QWithOwnStuff extends QBookBaseType {
  public readonly id2 = new QBooleanPath(this.withPrefix("ID2"));
  public readonly test2 = new QBooleanPath(this.withPrefix("test2"));
}

export const qWithOwnStuff = new QWithOwnStuff();

export class QWithOwnStuffId extends QId<WithOwnStuffId> {
  private readonly params = [new QBooleanParam("ID", "id"), new QBooleanParam("ID2", "id2")];

  getParams() {
    return this.params;
  }
}
